import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppNavigate } from "../context/navigate";

const BLUE = "#1533e8";

function GoogleMark() {
    return (
        <svg className="ref-logo" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59A14.6 14.6 0 0 1 9.77 24c0-1.6.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            <path fill="none" d="M0 0h48v48H0z" />
        </svg>
    );
}

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

            <main className="ref-main">
                <header className="ref-header">
                    <div>
                        <p className="ref-kicker">Reference</p>
                        <h1 className="ref-title">S kým spolupracujeme.</h1>
                    </div>
                    <p className="ref-lead">
                        Jak dodáváme Google a kde je popsané zpracování osobních údajů.
                    </p>
                </header>

                <div className="ref-entries">
                    <article className="ref-entry">
                        <div className="ref-heading">
                            <GoogleMark />
                            <h2>Google Workspace &amp; Google Cloud Reseller</h2>
                        </div>
                        <p>
                            Jsme součástí Google Cloud Partner Network se schváleným Sell modelem.
                            Pro zákazníky dodáváme a spravujeme Google Cloud, Google Workspace a ChromeOS
                            prostřednictvím distribučního partnera TD SYNNEX.
                        </p>
                    </article>

                    <article className="ref-entry">
                        <h2>Ochrana osobních údajů</h2>
                        <p>
                            Na samostatné stránce je, jaké osobní údaje web zpracovává, z jakého důvodu,
                            jak dlouho je držíme a kam se obrátit.
                        </p>
                        <a
                            href="/gdpr"
                            className="ref-link"
                            onClick={(e) => { e.preventDefault(); navigate("/gdpr"); }}
                        >
                            Zásady zpracování
                        </a>
                    </article>
                </div>

                <div className="ref-close">
                    <p>Chcete to projít u vás?</p>
                    <a
                        href="/kontakt"
                        onClick={(e) => { e.preventDefault(); navigate("/kontakt"); }}
                    >
                        Domluvit konzultaci
                    </a>
                </div>
            </main>

            <style>{`
                .ref-main {
                    padding: clamp(6rem, 14vw, 10rem) clamp(1.5rem, 8vw, 7rem) clamp(4rem, 8vw, 6rem);
                }

                .ref-header {
                    display: grid;
                    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
                    gap: clamp(2rem, 5vw, 5rem);
                    align-items: end;
                    margin-bottom: clamp(3rem, 6vw, 4.5rem);
                }

                .ref-kicker {
                    font-size: 1rem;
                    font-weight: 500;
                    letter-spacing: 0;
                    text-transform: none;
                    color: rgba(21,51,232,0.82);
                    margin: 0 0 0.85rem;
                }

                .ref-title {
                    font-size: clamp(2.2rem, 5vw, 3.4rem);
                    font-weight: 700;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                    margin: 0;
                    color: ${BLUE};
                }

                .ref-lead {
                    margin: 0;
                    max-width: 32ch;
                    font-size: clamp(1rem, 1.4vw, 1.15rem);
                    font-weight: 500;
                    line-height: 1.55;
                    color: rgba(21,51,232,0.82);
                }

                .ref-entries {
                    display: grid;
                    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
                    gap: clamp(2rem, 5vw, 5rem);
                    align-items: start;
                    border-top: 1px solid rgba(21,51,232,0.12);
                }

                .ref-entry {
                    padding-top: clamp(1.75rem, 3vw, 2.4rem);
                    min-width: 0;
                }

                .ref-heading {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.85rem;
                    margin-bottom: 0.7rem;
                }

                .ref-logo {
                    width: 1.65rem;
                    height: 1.65rem;
                    margin-top: 0.15rem;
                    flex-shrink: 0;
                    display: block;
                }

                .ref-entry h2 {
                    margin: 0;
                    font-size: clamp(1.25rem, 2vw, 1.55rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    line-height: 1.25;
                    color: ${BLUE};
                }

                .ref-entry > h2 {
                    margin-bottom: 0.7rem;
                }

                .ref-entry p {
                    margin: 0;
                    font-size: 1.02rem;
                    font-weight: 400;
                    line-height: 1.7;
                    color: #24357a;
                }

                .ref-link,
                .ref-close a {
                    color: ${BLUE};
                    font-weight: 600;
                    text-decoration: underline;
                    text-underline-offset: 0.18em;
                    text-decoration-thickness: 1px;
                }

                .ref-link {
                    display: inline-block;
                    margin-top: 0.9rem;
                    font-size: 1rem;
                }

                .ref-close {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: clamp(1.5rem, 4vw, 3rem);
                    margin-top: clamp(2.5rem, 5vw, 3.5rem);
                    padding-top: clamp(1.75rem, 3vw, 2.4rem);
                    border-top: 1px solid rgba(21,51,232,0.12);
                    font-size: clamp(1.15rem, 2vw, 1.4rem);
                    font-weight: 600;
                    line-height: 1.4;
                    color: ${BLUE};
                }

                .ref-close p {
                    margin: 0;
                    max-width: 22ch;
                }

                .ref-close a {
                    flex-shrink: 0;
                }

                @media (hover: hover) {
                    .ref-link:hover,
                    .ref-close a:hover {
                        text-decoration-thickness: 2px;
                    }
                }

                @media (max-width: 760px) {
                    .ref-header,
                    .ref-entries,
                    .ref-close {
                        grid-template-columns: 1fr;
                    }
                    .ref-lead {
                        max-width: none;
                    }
                    .ref-close {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .ref-close p {
                        max-width: none;
                    }
                }
            `}</style>

            <Footer />
        </div>
    );
}
