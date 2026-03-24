import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import sluzby from "../data/sluzby.json";
import { useAppNavigate } from "../context/navigate";

export function ServiceDetail({ service }) {
    const navigate = useAppNavigate();
    const goBack = () => navigate('/sluzby');

    useEffect(() => {
        document.title = `${service.title} – thinkhome`;
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = `https://thinkhome.cz/sluzby/${service.id}`;
        return () => {
            document.title = "thinkhome – Kompletní IT pod jednou střechou";
            canonical.href = "https://thinkhome.cz/";
        };
    }, [service.title, service.id]);

    return (
        <div style={{
            minHeight: "100vh",
            background: "#1533e8",
            fontFamily: "'Manrope Variable', Manrope, sans-serif",
            color: "#fff",
        }}>
            <Navbar />

            <div style={{
                padding: "clamp(6rem, 14vw, 10rem) clamp(1.5rem, 8vw, 7rem) clamp(4rem, 8vw, 6rem)",
            }}>
                {/* Back button */}
                <button
                    onClick={goBack}
                    className="sd-back-btn"
                    style={{
                        all: "unset",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "clamp(2rem, 5vw, 3.5rem)",
                        transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Zpět na služby
                </button>

                {/* Two-column layout */}
                <div className="sd-grid">
                    {/* Left — title + description */}
                    <div className="sd-left">
                        <h1 style={{
                            fontFamily: "'Manrope Variable', Manrope, sans-serif",
                            fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                            margin: "0 0 1.5rem",
                            color: "#fff",
                        }}>
                            {service.title}
                        </h1>

                        <p style={{
                            fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                            fontWeight: 400,
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.75,
                            margin: 0,
                        }}>
                            {service.description}
                        </p>
                    </div>

                    {/* Right — details list */}
                    <div className="sd-right">
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {service.details.map((item, i) => (
                                <li key={i} style={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    gap: "1.25rem",
                                    padding: "1.1rem 0",
                                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                                    fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.9)",
                                }}>
                                    <span className="sd-num" style={{
                                        fontSize: "0.65rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.1em",
                                        color: "rgba(255,255,255,0.3)",
                                        flexShrink: 0,
                                        fontVariantNumeric: "tabular-nums",
                                    }}>0{i + 1}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
                .sd-grid {
                    display: grid;
                    grid-template-columns: 2fr 3fr;
                    gap: clamp(3rem, 6vw, 7rem);
                    align-items: start;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: clamp(2.5rem, 5vw, 4rem);
                }
                .sd-left {
                    position: sticky;
                    top: clamp(5rem, 10vw, 7rem);
                }
                @media (max-width: 767px) {
                    .sd-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .sd-left {
                        position: static;
                    }
                    .sd-left p {
                        font-size: 1.2rem;
                        font-weight: 600;
                        color: #fff;
                    }
                }
            `}</style>
            <Footer />
        </div>
    );
}

export default function SluzbyPage() {
    const navigate = useAppNavigate();

    useEffect(() => {
        document.title = "Služby – thinkhome";
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = "https://thinkhome.cz/sluzby";
        return () => {
            document.title = "thinkhome – Kompletní IT pod jednou střechou";
            canonical.href = "https://thinkhome.cz/";
        };
    }, []);

    return (
        <div style={{
            minHeight: "100vh",
            background: "#1533e8",
            fontFamily: "'Manrope Variable', Manrope, sans-serif",
            color: "#fff",
        }}>
            <Navbar />

            <main style={{ padding: "clamp(6rem, 14vw, 10rem) clamp(1.5rem, 8vw, 7rem) clamp(4rem, 8vw, 6rem)" }}>
                <div className="sluzby-list">
                    {sluzby.map((service, i) => (
                        <div
                            key={service.id}
                            className="sluzba-block"
                            onClick={() => navigate(`/sluzby/${service.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && navigate(`/sluzby/${service.id}`)}
                        >
                            <div className="sluzba-bottom">
                                <h2 className="sluzba-title">{service.title}</h2>
                                <p className="sluzba-subtitle">{service.subtitle}</p>
                                <div className="sluzba-desc-wrap">
                                    <div className="sluzba-desc-inner">
                                        <p className="sluzba-desc">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                            <svg className="sluzba-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    ))}
                </div>
            </main>

            <style>{`
                .sluzby-list {
                    display: flex;
                    flex-direction: column;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }

                .sluzba-block {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    overflow: hidden;
                    padding: clamp(2.5rem, 5vw, 4rem);
                    min-height: clamp(220px, 30vw, 320px);
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    cursor: pointer;
                    user-select: none;
                    outline: none;
                    transition: background 0.15s;
                }
                @media (hover: hover) {
                    .sluzba-block:hover { background: rgba(255,255,255,0.04); }
                    .sluzba-block:hover .sluzba-arrow { color: #fff; }
                }
                @media (max-width: 767px) {
                    .sluzba-block {
                        padding: 1.75rem 0;
                        min-height: 180px;
                    }
                    .sluzba-subtitle {
                        display: none;
                    }
                }

.sluzba-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    padding-right: 3rem;
                }

                .sluzba-title {
                    font-family: 'Manrope Variable', Manrope, sans-serif;
                    font-size: clamp(1.4rem, 3vw, 2rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin: 0;
                    color: #fff;
                }

                .sluzba-subtitle {
                    font-size: 0.88rem;
                    font-weight: 400;
                    color: rgba(255,255,255,0.55);
                    margin: 0;
                    line-height: 1.5;
                }

                .sluzba-desc-wrap {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.35s cubic-bezier(0.25, 0, 0, 1);
                }
                @media (hover: hover) {
                    .sluzba-block:hover .sluzba-desc-wrap {
                        grid-template-rows: 1fr;
                    }
                }

                .sluzba-desc-inner {
                    overflow: hidden;
                }

                .sluzba-desc {
                    font-size: 0.82rem;
                    font-weight: 400;
                    color: rgba(255,255,255,0.5);
                    margin: 0;
                    padding-top: 0.75rem;
                    line-height: 1.6;
                    max-width: 52ch;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                    pointer-events: none;
                }
                @media (hover: hover) {
                    .sluzba-block:hover .sluzba-desc {
                        opacity: 1;
                    }
                }

                @media (hover: none) {
                    .sluzba-desc-wrap { grid-template-rows: 1fr; }
                    .sluzba-desc { opacity: 1; }
                }

                .sluzba-arrow {
                    position: absolute;
                    bottom: clamp(2.5rem, 5vw, 4rem);
                    right: clamp(2.5rem, 5vw, 4rem);
                    color: rgba(255,255,255,0.3);
                    transition: color 0.15s, transform 0.15s;
                }
                @media (hover: hover) {
                    .sluzba-block:hover .sluzba-arrow {
                        transform: translate(2px, -2px);
                    }
                }
                @media (max-width: 767px) {
                    .sluzba-desc-wrap {
                        display: none;
                    }
                    .sluzba-arrow {
                        bottom: 1.75rem;
                        right: 0;
                        color: rgba(255,255,255,0.6);
                    }
                    .sd-back-btn {
                        font-size: 0.82rem !important;
                        color: rgba(255,255,255,0.8) !important;
                    }
                    .sd-num {
                        font-size: 0.72rem !important;
                        color: rgba(255,255,255,0.65) !important;
                    }
                }
            `}</style>
            <Footer />
        </div>
    );
}
