import Prism from "./Prism";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppNavigate } from "../context/navigate";

const isSafari =
    typeof CSS !== "undefined" &&
    CSS.supports("-webkit-appearance", "none") &&
    !navigator.userAgent.includes("Chrome") &&
    !navigator.userAgent.includes("Chromium");

export default function HeroSection() {
    const navigate = useAppNavigate();

    return (
        <>
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                minHeight: "560px",
                overflow: "hidden",
                background: "#1533e8",
                fontFamily: "'Manrope Variable', Manrope, sans-serif",
            }}
        >
            <Navbar />

            {/* Prism — desktop, non-Safari */}
            {!isSafari && (
                <div className="prism-container prism-desktop">
                    <Prism
                        animationType="rotate"
                        transparent={true}
                        hueShift={0}
                        colorFrequency={0.3}
                        glow={0.5}
                        bloom={1.5}
                        noise={0.0}
                        scale={1.7}
                        timeScale={0.35}
                    />
                </div>
            )}

            {/* Prism — desktop, Safari/WebKit only (reduced glow) */}
            {isSafari && (
                <div className="prism-container prism-desktop">
                    <Prism
                        animationType="rotate"
                        transparent={true}
                        hueShift={0}
                        colorFrequency={0.3}
                        glow={0.4}
                        bloom={0.7}
                        noise={0.0}
                        scale={1.7}
                        timeScale={0.35}
                    />
                </div>
            )}

            {/* Prism — mobile only */}
            <div className="prism-container prism-mobile">
                <Prism
                    animationType="rotate"
                    transparent={true}
                    hueShift={0}
                    colorFrequency={0.3}
                    glow={0.4}
                    bloom={1.0}
                    noise={0.0}
                    scale={1.2}
                    timeScale={0.35}
                />
            </div>

            {/* Glass panel */}
            <div className="hero-panel">
                {/* Glass blur layer */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(48px) saturate(1.1)",
                        WebkitBackdropFilter: "blur(48px) saturate(1.1)",
                        background: "rgba(10, 20, 160, 0.12)",
                    }}
                />

                {/* Content layer */}
                <div className="hero-content">
                    {/* Vertically centred text block */}
                    <div className="hero-text-wrapper">
                        <div>
                            <h1 className="hero-h1">
                                Kompletní IT
                                <br />
                                <span style={{ opacity: 0.65 }}>&lt; &gt;</span> pod jednou střechou.
                            </h1>

                            <p className="hero-p">
                                Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit
                                několik dodavatelů zároveň. Věnujte se byznysu, IT nechte na nás.
                            </p>
                        </div>
                    </div>

                    {/* CTA — pinned to bottom */}
                    <div className="hero-cta">
                        <button
                            className="hero-btn-primary"
                            onClick={() => navigate('/sluzby')}
                        >
                            Zjistit více
                        </button>
                        <a
                            href="/kontakt"
                            onClick={(e) => { e.preventDefault(); navigate('/kontakt'); }}
                            className="hero-btn-arrow"
                        >
                            Kontaktujte nás <span>→</span>
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                /* ── Prism position ─────────────────────────── */
                .prism-container {
                    position: absolute;
                }
                .prism-desktop {
                    inset: 0;
                    left: 35%;
                    top: 0%;
                }
                .prism-mobile {
                    display: none;
                }
                @media (max-width: 767px) {
                    .prism-desktop {
                        display: none;
                    }
                    .prism-mobile {
                        display: block;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: 0;
                        top: auto;
                        width: 100%;
                        height: 55%;
                        opacity: 0.9;
                    }
                }

                /* ── Glass panel ────────────────────────────── */
                .hero-panel {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 66.666%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding: clamp(2rem, 6vw, 7rem);
                }
                @media (max-width: 767px) {
                    .hero-panel {
                        width: 100%;
                        height: auto;
                        top: 0;
                        bottom: auto;
                        padding: clamp(1.5rem, 6vw, 3rem);
                        padding-bottom: 2rem;
                        max-height: 52%;
                    }
                    .hero-panel > div:first-child {
                        display: none;
                    }
                }

                /* ── Inner content layer ────────────────────── */
                .hero-content {
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                }
                @media (max-width: 767px) {
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        padding-top: 40%;
                        height: auto;
                    }
                }

                /* ── Text wrapper — vertically centred ──────── */
                .hero-text-wrapper {
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
                @media (max-width: 767px) {
                    .hero-text-wrapper {
                        height: auto;
                        align-items: flex-start;
                        padding-top: 0;
                    }
                }

                /* ── Headline ───────────────────────────────── */
                .hero-h1 {
                    color: #fff;
                    font-family: inherit;
                    font-weight: 800;
                    font-size: clamp(2.2rem, 5.5vw, 4.2rem);
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    margin: 0 0 1.25rem;
                }
                @media (max-width: 767px) {
                    .hero-h1 {
                        font-size: clamp(2rem, 10vw, 3rem);
                    }
                }

                /* ── Body copy ──────────────────────────────── */
                .hero-p {
                    color: rgba(255,255,255,0.65);
                    font-family: inherit;
                    font-weight: 400;
                    font-size: clamp(0.875rem, 1.4vw, 1rem);
                    line-height: 1.65;
                    margin: 0;
                    max-width: 38ch;
                }
                @media (max-width: 767px) {
                    .hero-p {
                        font-size: 0.9rem;
                        max-width: 100%;
                    }
                }

                /* ── CTA block ──────────────────────────────── */
                .hero-cta {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1.25rem;
                }
                @media (max-width: 767px) {
                    .hero-cta {
                        position: static;
                        margin-top: 2rem;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.875rem;
                    }
                }

                /* ── Primary CTA button ─────────────────────── */
                .hero-btn-primary {
                    all: unset;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #fff;
                    color: #1533e8;
                    font-family: inherit;
                    font-weight: 700;
                    font-size: 0.75rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 0.7em 1.6em;
                    border-radius: 999px;
                    transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
                    box-shadow: 0 2px 16px rgba(255,255,255,0.15);
                }
                @media (hover: hover) {
                    .hero-btn-primary:hover {
                        background: rgba(255,255,255,0.9);
                        box-shadow: 0 4px 28px rgba(255,255,255,0.3);
                        transform: translateY(-1px);
                    }
                }
                .hero-btn-primary:active {
                    transform: translateY(0);
                }
                @media (max-width: 767px) {
                    .hero-btn-primary {
                        font-size: 0.85rem;
                    }
                }

                /* ── Secondary CTA (ghost arrow) ────────────── */
                .hero-btn-arrow {
                    all: unset;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: #fff;
                    font-family: inherit;
                    font-weight: 700;
                    font-size: 0.75rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    border-bottom: 1px solid rgba(255,255,255,0.35);
                    padding-bottom: 2px;
                    transition: border-color 0.2s, text-shadow 0.2s;
                }
                @media (hover: hover) {
                    .hero-btn-arrow:hover {
                        border-color: rgba(255,255,255,0.9);
                        text-shadow: 0 0 12px rgba(255,255,255,0.7), 0 0 28px rgba(255,255,255,0.35);
                    }
                }
                @media (max-width: 767px) {
                    .hero-btn-arrow {
                        font-size: 0.85rem;
                    }
                }
            `}</style>
        </section>
        <Footer />
        </>
    );
}
