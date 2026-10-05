import { useAppNavigate } from "../context/navigate";

function GoogleMark() {
    return (
        <svg className="trust-logo" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59A14.6 14.6 0 0 1 9.77 24c0-1.6.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            <path fill="none" d="M0 0h48v48H0z" />
        </svg>
    );
}

function ShieldMark() {
    return (
        <svg className="trust-logo trust-shield" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 5.5 40 11.4v11.2c0 9.2-6.2 17.4-16 20.4-9.8-3-16-11.2-16-20.4V11.4L24 5.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
            <path d="M17 24.2 21.4 28.6 31.2 18.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function TrustSignals() {
    const navigate = useAppNavigate();

    return (
        <section className="trust" aria-labelledby="trust-title">
            <div className="trust-head">
                <p id="trust-title" className="trust-label">Partnerství a přístupnost</p>
                <p className="trust-lead">
                    Odznaky, které dokládají, s kým spolupracujeme a jak chráníme data.
                </p>
            </div>

            <ul className="trust-list">
                <li className="trust-item">
                    <div className="trust-top">
                        <span className="trust-num">01</span>
                        <div className="trust-mark">
                            <GoogleMark />
                            <span className="trust-wordmark">
                                <span className="trust-wordmark-google">Google</span> Cloud
                            </span>
                        </div>
                    </div>
                    <div className="trust-copy">
                        <div className="trust-title-row">
                            <p className="trust-name">Google Workspace &amp; Google Cloud Reseller</p>
                        </div>
                        <p className="trust-body">
                            Jsme součástí Google Cloud Partner Network se schváleným Sell modelem.
                            Pro zákazníky dodáváme a spravujeme Google Cloud, Google Workspace a ChromeOS
                            prostřednictvím distribučního partnera TD SYNNEX.
                        </p>
                    </div>
                </li>

                <li className="trust-item">
                    <div className="trust-top">
                        <span className="trust-num">02</span>
                        <div className="trust-mark">
                            <ShieldMark />
                        </div>
                    </div>
                    <div className="trust-copy">
                        <div className="trust-title-row">
                            <p className="trust-name">GDPR Compliant</p>
                        </div>
                        <p className="trust-body">
                            Ochrana osobních údajů je u nás na prvním místě.
                        </p>
                        <a
                            href="/gdpr"
                            className="trust-link"
                            onClick={(e) => { e.preventDefault(); navigate("/gdpr"); }}
                        >
                            Zásady zpracování →
                        </a>
                    </div>
                </li>
            </ul>

            <style>{`
                .trust {
                    margin-top: clamp(4rem, 8vw, 7rem);
                    padding-top: clamp(2.5rem, 5vw, 4rem);
                    border-top: 1px solid rgba(21,51,232,0.1);
                }

                .trust-head {
                    display: grid;
                    grid-template-columns: clamp(10rem, 22%, 16rem) 1fr;
                    gap: clamp(1.5rem, 4vw, 4rem);
                    align-items: start;
                    margin-bottom: clamp(2rem, 4vw, 3rem);
                }

                .trust-label {
                    font-size: 1rem;
                    font-weight: 500;
                    letter-spacing: 0;
                    text-transform: none;
                    line-height: 1.4;
                    color: rgba(21,51,232,0.82);
                    margin: 0;
                    padding-top: 0.15rem;
                }

                .trust-lead {
                    font-size: clamp(1.15rem, 2vw, 1.55rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    line-height: 1.25;
                    color: #1533e8;
                    margin: 0;
                    max-width: 22ch;
                }

                .trust-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border-top: 1px solid rgba(21,51,232,0.1);
                }

                .trust-item {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1.35rem;
                    padding: clamp(1.75rem, 3vw, 2.5rem) clamp(1.25rem, 2vw, 2rem) clamp(1.75rem, 3vw, 2.5rem) 0;
                    border-bottom: 1px solid rgba(21,51,232,0.1);
                }

                .trust-item + .trust-item {
                    padding-left: clamp(1.5rem, 3vw, 2.75rem);
                    border-left: 1px solid rgba(21,51,232,0.1);
                }

                .trust-top {
                    display: flex;
                    align-items: center;
                    gap: 1.15rem;
                    min-height: 40px;
                }

                .trust-num {
                    font-size: 0.65rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    color: rgba(21,51,232,0.3);
                    font-variant-numeric: tabular-nums;
                }

                .trust-mark {
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                    min-height: 40px;
                }

                .trust-logo {
                    width: 36px;
                    height: 36px;
                    flex-shrink: 0;
                    display: block;
                }

                .trust-shield {
                    color: #1533e8;
                }

                .trust-wordmark {
                    font-size: 1.05rem;
                    font-weight: 500;
                    letter-spacing: -0.03em;
                    color: #3c4043;
                    line-height: 1;
                    white-space: nowrap;
                }

                .trust-wordmark-google {
                    font-weight: 700;
                }

                .trust-copy {
                    min-width: 0;
                }

                .trust-title-row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.65rem 0.75rem;
                    margin-bottom: 0.55rem;
                }

                .trust-name {
                    font-size: clamp(0.95rem, 1.3vw, 1.05rem);
                    font-weight: 700;
                    color: #1533e8;
                    margin: 0;
                    line-height: 1.35;
                    letter-spacing: -0.01em;
                }

                .trust-body {
                    font-size: clamp(0.85rem, 1.15vw, 0.95rem);
                    font-weight: 400;
                    color: rgba(21,51,232,0.65);
                    line-height: 1.7;
                    margin: 0;
                    max-width: 52ch;
                }

                .trust-link {
                    display: inline-flex;
                    margin-top: 0.85rem;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    text-decoration: none;
                    color: #1533e8;
                    border-bottom: 1px solid rgba(21,51,232,0.3);
                    padding-bottom: 2px;
                    width: fit-content;
                    transition: border-color 0.2s;
                }

                @media (hover: hover) {
                    .trust-link:hover { border-color: #1533e8; }
                }

                @media (max-width: 900px) {
                    .trust-list {
                        grid-template-columns: 1fr;
                    }
                    .trust-item + .trust-item {
                        padding-left: 0;
                        border-left: none;
                    }
                    .trust-item {
                        padding-right: 0;
                    }
                }

                @media (max-width: 767px) {
                    .trust-head {
                        grid-template-columns: 1fr;
                        gap: 0.85rem;
                    }
                    .trust-lead {
                        max-width: none;
                    }
                    .trust-num {
                        font-size: 0.72rem;
                        color: rgba(21,51,232,0.65);
                    }
                }
            `}</style>
        </section>
    );
}
