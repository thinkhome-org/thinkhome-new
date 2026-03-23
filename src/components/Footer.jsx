import { useAppNavigate } from "../context/navigate";

export default function Footer() {
    const navigate = useAppNavigate();

    const navLink = (path, e) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <footer style={{
            fontFamily: "'Manrope Variable', Manrope, sans-serif",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "clamp(3rem, 8vw, 5rem) clamp(1.5rem, 8vw, 7rem) clamp(2rem, 4vw, 3rem)",
        }}>
            <div className="footer-top">
                {/* Left — logo + tagline */}
                <div className="footer-brand">
                    <a href="/" onClick={(e) => navLink('/', e)} style={{ textDecoration: "none" }}>
                        <span style={{
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: "0.95rem",
                            letterSpacing: "-0.02em",
                        }}>
                            &lt;thinkhome&gt;
                        </span>
                    </a>
                    <p style={{
                        margin: "0.75rem 0 0",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.6,
                        maxWidth: "28ch",
                    }}>
                        Kompletní IT péče pro firmy,<br />
                        které mají lepší věci na práci.
                    </p>
                </div>

                {/* Right — two columns */}
                <div className="footer-right">
                    <div className="footer-col">
                        <span className="footer-col-label">Stránky</span>
                        <a href="/" onClick={(e) => navLink('/', e)} className="footer-link">Domů</a>
                        <a href="/sluzby" onClick={(e) => navLink('/sluzby', e)} className="footer-link">Služby</a>
                    </div>
                    <div className="footer-col">
                        <span className="footer-col-label">Firma</span>
                        <a href="/o-nas" onClick={(e) => navLink('/o-nas', e)} className="footer-link">O nás</a>
                        <a href="/kontakt" onClick={(e) => navLink('/kontakt', e)} className="footer-link">Kontakt</a>
                        <a href="/gdpr" onClick={(e) => navLink('/gdpr', e)} className="footer-link">Ochrana osobních údajů</a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                marginTop: "clamp(3rem, 6vw, 4rem)",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
            }}>
                <span style={{
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.04em",
                }}>
                    © {new Date().getFullYear()} Thinkhome s.r.o.
                </span>
                <span style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                }}>
                    IT pod jednou střechou
                </span>
            </div>

            <style>{`
                .footer-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 3rem;
                }

                .footer-brand {
                    flex: 1;
                }

                .footer-right {
                    display: flex;
                    align-items: flex-start;
                    gap: clamp(2.5rem, 6vw, 4rem);
                }

                .footer-col {
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                }

                .footer-col-label {
                    font-size: 0.65rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.25);
                    margin-bottom: 0.3rem;
                }

                .footer-link {
                    font-size: 0.82rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.5);
                    text-decoration: none;
                    letter-spacing: 0.01em;
                    transition: color 0.15s;
                    width: fit-content;
                }
                .footer-link:hover { color: #fff; }

                @media (max-width: 600px) {
                    .footer-top {
                        flex-direction: column;
                        gap: 2.5rem;
                    }
                    .footer-right {
                        gap: 2.5rem;
                    }
                    .footer-brand p {
                        font-size: 1.2rem;
                        font-weight: 600;
                        color: #fff;
                    }
                    .footer-link {
                        font-size: 1.1rem;
                        font-weight: 500;
                        color: #fff;
                    }
                    .footer-col-label {
                        font-size: 0.82rem;
                        color: #fff;
                    }
                }
            `}</style>
        </footer>
    );
}
