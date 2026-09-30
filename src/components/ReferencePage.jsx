import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TrustSignals from "./TrustSignals";
import { useAppNavigate } from "../context/navigate";

const BLUE = "#1533e8";

export default function ReferencePage() {
    const navigate = useAppNavigate();

    useEffect(() => {
        document.title = "Reference – thinkhome";
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.href = "https://thinkhome.cz/reference";
        return () => {
            document.title = "thinkhome – Kompletní IT pod jednou střechou";
            canonical.href = "https://thinkhome.cz/";
        };
    }, []);

    return (
        <div style={{
            minHeight: "100vh",
            background: "#fff",
            fontFamily: "'Manrope Variable', Manrope, sans-serif",
            color: BLUE,
        }}>
            <Navbar light />

            <main style={{
                padding: "clamp(6rem, 14vw, 10rem) clamp(1.5rem, 8vw, 7rem) clamp(4rem, 8vw, 6rem)",
            }}>
                <div className="ref-header">
                    <div>
                        <p className="ref-kicker">Reference</p>
                        <h1 className="ref-title">
                            Partneři a odznaky,<br />na které se dá spolehnout.
                        </h1>
                    </div>
                    <p className="ref-lead">
                        Tady jsou reference, partnerství a pravidla, podle kterých poznáte, s kým spolupracujeme a jak přistupujeme k ochraně dat.
                    </p>
                </div>

                <TrustSignals />

                <div className="ref-cta">
                    <p className="ref-cta-text">
                        Chcete vědět, jak to vypadá v praxi? Domluvíme konzultaci a projdeme, co dává smysl u vás.
                    </p>
                    <a
                        href="/kontakt"
                        onClick={(e) => { e.preventDefault(); navigate("/kontakt"); }}
                        className="ref-cta-btn"
                    >
                        Domluvit konzultaci →
                    </a>
                </div>
            </main>

            <style>{`
                .ref-header {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: clamp(2rem, 5vw, 5rem);
                    align-items: end;
                }

                .ref-kicker {
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #7a8fc4;
                    margin: 0 0 1.25rem;
                }

                .ref-title {
                    font-size: clamp(2.4rem, 6vw, 4rem);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.05;
                    margin: 0;
                    color: ${BLUE};
                }

                .ref-lead {
                    font-size: clamp(0.9rem, 1.4vw, 1.05rem);
                    font-weight: 400;
                    color: #2a3f8f;
                    line-height: 1.75;
                    margin: 0;
                    max-width: 42ch;
                }

                .ref-cta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: clamp(2rem, 5vw, 4rem);
                    flex-wrap: wrap;
                    margin-top: clamp(3.5rem, 7vw, 5.5rem);
                    padding-top: clamp(2.5rem, 5vw, 4rem);
                    border-top: 1px solid rgba(21,51,232,0.1);
                }

                .ref-cta-text {
                    font-size: clamp(1.1rem, 2vw, 1.45rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    line-height: 1.3;
                    color: ${BLUE};
                    margin: 0;
                    max-width: 36ch;
                }

                .ref-cta-btn {
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
                    text-decoration: none;
                    transition: border-color 0.2s;
                }

                @media (hover: hover) {
                    .ref-cta-btn:hover { border-color: ${BLUE}; }
                }

                @media (max-width: 767px) {
                    .ref-header {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .ref-lead {
                        max-width: none;
                    }
                }
            `}</style>

            <Footer />
        </div>
    );
}
