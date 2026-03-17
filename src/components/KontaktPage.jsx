import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CopyButton({ value }) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        });
    };

    return (
        <button
            onClick={copy}
            title="Kopírovat"
            style={{
                all: "unset",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                flexShrink: 0,
                color: copied ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
        >
            {copied ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="4.5" y="1" width="8" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 4.5h2M1 4.5V13h8.5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
            )}
        </button>
    );
}

function CopyRow({ children, value }) {
    return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", whiteSpace: "nowrap" }}>
            {children}
            <CopyButton value={value} />
        </span>
    );
}

function LegalItem({ label, value }) {
    return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            {label}: {value}
            <CopyButton value={value} />
        </span>
    );
}

export default function KontaktPage() {
    return (
        <div style={{
            minHeight: "100vh",
            background: "#1533e8",
            fontFamily: "'Manrope Variable', Manrope, sans-serif",
            color: "#fff",
        }}>
            <Navbar />

            <main style={{
                padding: "clamp(6rem, 14vw, 10rem) clamp(1.5rem, 8vw, 7rem) clamp(4rem, 8vw, 6rem)",
                maxWidth: "1100px",
            }}>
                {/* Header */}
                <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
                    <p style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.75)",
                        margin: "0 0 1.25rem",
                    }}>Kontakt</p>
                    <h1 style={{
                        fontSize: "clamp(2.4rem, 6vw, 4rem)",
                        fontWeight: 800,
                        fontFamily: "'Manrope Variable', Manrope, sans-serif",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        margin: "0 0 1.25rem",
                        color: "#fff",
                    }}>
                        Jsme tu pro vás.
                    </h1>
                    <p style={{
                        fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.65,
                        margin: 0,
                        maxWidth: "44ch",
                    }}>
                        Ozvěte se nám s jakýmkoliv dotazem, poptávkou nebo návrhem spolupráce.
                    </p>
                </div>

                {/* Contact grid */}
                <div className="kontakt-grid">
                    {/* Email */}
                    <div className="kontakt-block">
                        <p className="kontakt-label">Email</p>
                        <CopyRow value="info@thinkhome.org">
                            <a href="mailto:info@thinkhome.org" className="kontakt-link">
                                info@thinkhome.org
                            </a>
                        </CopyRow>
                        <p className="kontakt-note">Odpovídáme do 24 hodin</p>
                    </div>

                    {/* Phone */}
                    <div className="kontakt-block">
                        <p className="kontakt-label">Telefon</p>
                        <CopyRow value="+420222160782">
                            <a href="tel:+420222160782" className="kontakt-link">
                                +420 222 160 782
                            </a>
                        </CopyRow>
                        <p className="kontakt-note">Po–Ne 10:00–20:00</p>
                    </div>

                    {/* Datová schránka */}
                    <div className="kontakt-block">
                        <p className="kontakt-label">Datová schránka</p>
                        <CopyRow value="hujt7i5">
                            <p className="kontakt-value" style={{ margin: 0, fontVariantNumeric: "tabular-nums", letterSpacing: "0.04em" }}>
                                hujt7i5
                            </p>
                        </CopyRow>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    width: "100%",
                    height: "1px",
                    background: "rgba(255,255,255,0.1)",
                    margin: "clamp(3rem, 6vw, 4rem) 0",
                }} />

                {/* Legal info */}
                <div className="kontakt-legal">
                    <LegalItem label="Název" value="ThinkHome s.r.o." />
                    <LegalItem label="Sídlo" value="Rytířova 777/3, 143 00 Praha — Kamýk" />
                    <LegalItem label="IČO" value="23893591" />
                    <LegalItem label="DIČ" value="CZ23893591" />
                    <LegalItem label="Účet" value="363677109/0300" />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem" }}>
                        Spisová značka C 434666 vedená u Městského soudu v Praze
                    </span>
                </div>
            </main>

            <style>{`
                .kontakt-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: clamp(2rem, 4vw, 3rem);
                }
                @media (max-width: 1023px) {
                    .kontakt-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 767px) {
                    .kontakt-grid {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }
                }

                .kontakt-block {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                @media (max-width: 767px) {
                    .kontakt-block {
                        padding: 1.4rem 0;
                        border-bottom: 1px solid rgba(255,255,255,0.08);
                    }
                    .kontakt-block:first-child {
                        padding-top: 0;
                    }
                }

                .kontakt-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.75);
                    margin: 0 0 0.4rem;
                }

                .kontakt-value {
                    font-size: clamp(0.95rem, 1.4vw, 1.05rem);
                    font-weight: 500;
                    color: rgba(255,255,255,0.85);
                    line-height: 1.7;
                    margin: 0;
                }

                .kontakt-link {
                    font-size: clamp(0.95rem, 1.4vw, 1.05rem);
                    font-weight: 600;
                    color: #fff;
                    text-decoration: none;
                    border-bottom: 1px solid rgba(255,255,255,0.3);
                    padding-bottom: 2px;
                    width: fit-content;
                    transition: border-color 0.2s;
                }
                .kontakt-link:hover {
                    border-color: rgba(255,255,255,0.9);
                }

                .kontakt-note {
                    font-size: 0.8rem;
                    font-weight: 400;
                    color: rgba(255,255,255,0.8);
                    margin: 0.1rem 0 0;
                }

                .kontakt-legal {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.5rem 1.5rem;
                    font-size: 0.78rem;
                    font-weight: 400;
                    color: rgba(255,255,255,0.7);
                    line-height: 1.7;
                }
            `}</style>
            <Footer />
        </div>
    );
}
