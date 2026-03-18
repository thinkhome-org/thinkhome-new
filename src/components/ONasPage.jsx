import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppNavigate } from "../context/navigate";

const BLUE = "#1533e8";

export default function ONasPage() {
    const navigate = useAppNavigate();

    useEffect(() => {
        document.title = "O nás – thinkhome";
        return () => { document.title = "thinkhome – Kompletní IT pod jednou střechou"; };
    }, []);

    return (
        <div style={{
            minHeight: "100vh",
            background: "#fff",
            fontFamily: "'Manrope Variable', Manrope, sans-serif",
            color: BLUE,
        }}>
            {/* Navbar strip — white bg to match page */}
            <div style={{ background: "#fff", height: "68px", position: "relative" }}>
                <Navbar light />
            </div>

            <main style={{
                padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 8vw, 7rem) clamp(4rem, 8vw, 6rem)",
            }}>

                {/* ── Header ─────────────────────────────────── */}
                <div className="onas-header-row" style={{ marginBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
                    <div>
                        <p style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#7a8fc4",
                            margin: "0 0 1.25rem",
                        }}>O nás</p>

                        <h1 style={{
                            fontSize: "clamp(2.4rem, 6vw, 4rem)",
                            fontWeight: 800,
                            fontFamily: "'Manrope Variable', Manrope, sans-serif",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                            margin: "0",
                            color: BLUE,
                        }}>
                            Váš partner<br />v digitální transformaci.
                        </h1>
                    </div>

                    <p style={{
                        fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                        fontWeight: 400,
                        color: "#2a3f8f",
                        lineHeight: 1.75,
                        margin: 0,
                        alignSelf: "flex-end",
                        maxWidth: "48ch",
                    }}>
                        ThinkHome je vaším důvěryhodným partnerem v digitální transformaci, který spojuje
                        špičkové IT služby pro firmy i domácnosti do uceleného celku. Nabízíme komplexní
                        řešení od webů a cloudu přes kyberbezpečnost až po umělou inteligenci a chytré
                        sítě – vše na klíč s důrazem na spolehlivost, úspory a maximální pohodlí.
                    </p>
                </div>

                {/* ── Divider ────────────────────────────────── */}
                <div style={{
                    width: "100%",
                    height: "1px",
                    background: "#e4e9f7",
                    marginBottom: "clamp(3rem, 6vw, 5rem)",
                }} />

                {/* ── Co děláme ──────────────────────────────── */}
                <div className="onas-section-row" style={{ marginBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
                    <p style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#7a8fc4",
                        margin: 0,
                        paddingTop: "0.2rem",
                        flexShrink: 0,
                    }}>Co děláme</p>

                    <p style={{
                        fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                        fontWeight: 400,
                        color: "#2a3f8f",
                        lineHeight: 1.75,
                        margin: 0,
                    }}>
                        Poskytujeme end-to-end služby, které pokrývají celý cyklus od návrhu po 24/7
                        dohled. Pro firmy řešíme správu IT infrastruktury, nasazení Microsoft 365 nebo
                        Google Workspace, profesionální sítě, Wi-Fi, zálohy a bezpečnostní audity včetně
                        AI automatizací procesů. Pro domácnosti vytváříme stabilní chytré domy na bázi
                        Home Assistant s kamerami, automatizací a vzdálenou správou. Každé řešení je
                        přizpůsobené vašim potřebám, aby šetřilo čas, peníze a minimalizovalo rizika.
                    </p>
                </div>

                {/* ── Divider ────────────────────────────────── */}
                <div style={{
                    width: "100%",
                    height: "1px",
                    background: "#e4e9f7",
                    marginBottom: "clamp(3rem, 6vw, 5rem)",
                }} />

                {/* ── Proč ThinkHome ─────────────────────────── */}
                <div className="onas-section-row" style={{ marginBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
                    <div style={{ flexShrink: 0 }}>
                        <p style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#7a8fc4",
                            margin: "0 0 0.75rem",
                        }}>Proč ThinkHome</p>
                        <p style={{
                            fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
                            fontWeight: 400,
                            color: "#7a8fc4",
                            lineHeight: 1.65,
                            margin: 0,
                            maxWidth: "28ch",
                        }}>
                            Výsledky, které přímo zvyšují vaši efektivitu, šetří čas a minimalizují rizika.
                        </p>
                    </div>

                    <p style={{
                        fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                        fontWeight: 400,
                        color: "#2a3f8f",
                        lineHeight: 1.75,
                        margin: 0,
                        flex: 1,
                    }}>
                        Zaměřujeme se spíše na dlouhodobé partnerství místo jednorázových zakázek –
                        klienti oceňují rychlou reakci, transparentní procesy a technologie jako Terraform,
                        Vercel nebo pokročilé AI chatboti. Ať už potřebujete moderní web, POS systém pro
                        obchod, penetrační testy nebo profesionální hardware servis, doručíme vám výsledky,
                        které přímo zvyšují vaši efektivitu. Naše cena odpovídá tržnímu mediánu, vždy
                        s jasnou hodnotou navíc.
                    </p>
                </div>

                {/* ── Divider ────────────────────────────────── */}
                <div style={{
                    width: "100%",
                    height: "1px",
                    background: "#e4e9f7",
                    marginBottom: "clamp(3rem, 6vw, 5rem)",
                }} />

                {/* ── CTA ────────────────────────────────────── */}
                <div className="onas-cta-row">
                    <p style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                        color: BLUE,
                        margin: 0,
                        maxWidth: "44ch",
                    }}>
                        Kontaktujte nás pro bezplatnou konzultaci a uvidíte, jak jednoduše můžeme změnit
                        váš digitální svět k lepšímu!
                    </p>
                    <a
                        href="/kontakt"
                        onClick={(e) => { e.preventDefault(); navigate('/kontakt'); }}
                        className="onas-cta-btn"
                    >
                        Domluvit konzultaci →
                    </a>
                </div>
            </main>

            <style>{`
                .onas-header-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: clamp(2rem, 5vw, 5rem);
                    align-items: end;
                }
                @media (max-width: 767px) {
                    .onas-header-row {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }

                .onas-section-row {
                    display: grid;
                    grid-template-columns: clamp(8rem, 18%, 14rem) 1fr;
                    gap: clamp(2rem, 5vw, 5rem);
                    align-items: start;
                }
                @media (max-width: 767px) {
                    .onas-section-row {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }

                .onas-cta-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: clamp(2rem, 5vw, 4rem);
                    flex-wrap: wrap;
                }

                .onas-cta-btn {
                    all: unset;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    flex-shrink: 0;
                    color: ${BLUE};
                    font-family: 'Manrope Variable', Manrope, sans-serif;
                    font-weight: 700;
                    font-size: 0.7rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    width: fit-content;
                    border-bottom: 1px solid rgba(21,51,232,0.3);
                    padding-bottom: 2px;
                    transition: border-color 0.2s;
                    text-decoration: none;
                }
                @media (hover: hover) {
                    .onas-cta-btn:hover {
                        border-color: rgba(21,51,232,0.9);
                    }
                }
            `}</style>

            <div style={{ background: BLUE }}>
                <Footer />
            </div>
        </div>
    );
}
