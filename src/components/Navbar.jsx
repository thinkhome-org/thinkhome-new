import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (open) setTimeout(() => setMounted(true), 10);
        else setMounted(false);
    }, [open]);

    // Close drawer on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Prevent scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const links = [
        { label: "Domů", href: "#" },
        { label: "O nás", href: "#o-nas" },
        { label: "Služby", href: "#sluzby" },
    ];

    return (
        <>
            <nav
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 clamp(1.25rem, 6vw, 7rem)",
                    height: "68px",
                    fontFamily: "'Manrope Variable', Manrope, sans-serif",
                }}
            >
                {/* Logo */}
                <a href="#" style={{ textDecoration: "none" }}>
                    <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "-0.02em" }}>
                        &lt;thinkhome&gt;
                    </span>
                </a>

                {/* Desktop links */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        "@media(max-width:767px)": { display: "none" },
                    }}
                    className="nav-desktop"
                >
                    {links.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            style={{
                                color: "rgba(255,255,255,0.6)",
                                fontWeight: 500,
                                fontSize: "0.825rem",
                                textDecoration: "none",
                                letterSpacing: "0.01em",
                                transition: "color 0.2s, background 0.2s, text-shadow 0.2s",
                                padding: "0.15rem 0.75rem",
                                borderRadius: "9999px",
                                background: "transparent",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                e.currentTarget.style.textShadow = "0 0 12px rgba(255,255,255,0.7), 0 0 28px rgba(255,255,255,0.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.textShadow = "none";
                            }}
                        >
                            {label}
                        </a>
                    ))}

                    <span style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.2)", margin: "0 0.5rem" }} />

                    <a
                        href="#kontakt"
                        style={{
                            color: "#1533e8",
                            fontWeight: 700,
                            fontSize: "0.825rem",
                            textDecoration: "none",
                            letterSpacing: "0.01em",
                            padding: "0.15rem 0.75rem",
                            borderRadius: "9999px",
                            transition: "box-shadow 0.15s",
                            background: "#fff",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.3)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                    >
                        Kontakt
                    </a>
                </div>

                {/* Hamburger — mobile only */}
                <button
                    className="nav-hamburger"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Zavřít menu" : "Otevřít menu"}
                    style={{
                        all: "unset",
                        cursor: "pointer",
                        display: "none",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "6px",
                        width: "48px",
                        height: "48px",
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {[0, 1, 2].map((i) => (
                        <span key={i} style={{
                            display: "block",
                            width: "22px",
                            height: "2px",
                            background: "#fff",
                            borderRadius: "2px",
                            transition: "transform 0.25s ease, opacity 0.25s ease",
                            transform: open
                                ? i === 0 ? "translateY(8px) rotate(45deg)"
                                : i === 2 ? "translateY(-8px) rotate(-45deg)"
                                : "none"
                                : "none",
                            opacity: open && i === 1 ? 0 : 1,
                        }} />
                    ))}
                </button>
            </nav>

            {/* Mobile drawer */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9,
                    background: "rgba(8, 16, 140, 0.96)",
                    backdropFilter: "blur(32px)",
                    WebkitBackdropFilter: "blur(32px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "96px clamp(1.5rem, 8vw, 2.5rem) clamp(2rem, 8vw, 3rem)",
                    transform: open ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontFamily: "'Manrope Variable', Manrope, sans-serif",
                    overflow: "hidden",
                }}
                className="nav-drawer"
            >
                {/* Nav links */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {links.map(({ label, href }, i) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setOpen(false)}
                            style={{
                                color: "rgba(255,255,255,0.85)",
                                fontWeight: 800,
                                fontSize: "clamp(2rem, 9vw, 2.6rem)",
                                textDecoration: "none",
                                letterSpacing: "-0.03em",
                                padding: "0.85rem 0",
                                borderBottom: "1px solid rgba(255,255,255,0.07)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                minHeight: "68px",
                                WebkitTapHighlightColor: "transparent",
                                opacity: mounted ? 1 : 0,
                                transform: mounted ? "translateY(0)" : "translateY(16px)",
                                transition: `opacity 0.35s ease ${i * 0.06 + 0.1}s, transform 0.35s ease ${i * 0.06 + 0.1}s, color 0.15s`,
                            }}
                            onTouchStart={(e) => (e.currentTarget.style.color = "#fff")}
                            onTouchEnd={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                        >
                            <span>{label}</span>
                            <span style={{
                                fontSize: "0.7rem",
                                fontWeight: 500,
                                letterSpacing: "0.1em",
                                color: "rgba(255,255,255,0.25)",
                                fontVariantNumeric: "tabular-nums",
                            }}>0{i + 1}</span>
                        </a>
                    ))}
                </div>

                {/* Bottom section */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.35s ease 0.3s, transform 0.35s ease 0.3s",
                }}>
                    <p style={{
                        color: "rgba(255,255,255,0.3)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        margin: 0,
                    }}>
                        IT pod jednou střechou
                    </p>
                    <a
                        href="#kontakt"
                        onClick={() => setOpen(false)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#1533e8",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                            padding: "1rem 1.75rem",
                            borderRadius: "9999px",
                            background: "#fff",
                            minHeight: "56px",
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        Kontaktujte nás →
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    .nav-desktop { display: none !important; }
                    .nav-hamburger { display: flex !important; }
                }
                @media (min-width: 768px) {
                    .nav-drawer { display: none !important; }
                }
            `}</style>
        </>
    );
}
