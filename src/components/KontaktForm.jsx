import { useEffect, useId, useRef, useState } from "react";
import { useAppNavigate } from "../context/navigate";

const TO = "info@thinkhome.org";

const STEPS = [
    {
        key: "name",
        label: "Jméno",
        placeholder: "Jana Nováková",
        autoComplete: "name",
    },
    {
        key: "contact",
        label: "Email / Telefon",
        placeholder: "jana@firma.cz nebo +420 728 981 602",
        autoComplete: "on",
    },
    {
        key: "message",
        label: "S čím potřebujete pomoct",
        placeholder: "Například správa sítě ve škole nebo nový web…",
        multiline: true,
    },
];

function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isPhone(value) {
    const compact = value.replace(/[\s().-]/g, "");
    return /^(?:\+|00)?\d{9,15}$/.test(compact);
}

export function validateInquiryField(key, raw) {
    const value = raw.trim();

    if (key === "name") {
        if (value.length < 2) return "Napište, jak vám máme říkat.";
        return "";
    }

    if (key === "contact") {
        if (!value) return "Zadejte e-mail nebo telefon.";
        if (value.includes("@") ? !isEmail(value) : !isPhone(value)) {
            return "To nevypadá jako e-mail ani telefon.";
        }
        return "";
    }

    if (value.length < 5) return "Napište, s čím potřebujete pomoct.";
    return "";
}

export function buildInquiryMailto({ name, contact, message }) {
    const subject = `Poptávka — ${name.trim()}`;
    const body = [
        `Jméno: ${name.trim()}`,
        `Kontakt: ${contact.trim()}`,
        "",
        "S čím potřebujete pomoct:",
        message.trim(),
    ].join("\n");

    return `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function openMailto(href) {
    const link = document.createElement("a");
    link.href = href;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

export default function KontaktForm() {
    const navigate = useAppNavigate();
    const titleId = useId();
    const errorId = useId();
    const fieldRef = useRef(null);
    const seenStep = useRef(0);
    const [step, setStep] = useState(0);
    const [sent, setSent] = useState(false);
    const [values, setValues] = useState({ name: "", contact: "", message: "" });
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const current = STEPS[step];
    const mailto = buildInquiryMailto(values);

    useEffect(() => {
        if (seenStep.current === step) return;
        seenStep.current = step;
        fieldRef.current?.focus();
    }, [step]);

    const goTo = (next) => {
        setError("");
        setStep(next);
    };

    const advance = () => {
        const message = validateInquiryField(current.key, values[current.key]);
        if (message) {
            setError(message);
            fieldRef.current?.focus();
            return;
        }

        if (step < STEPS.length - 1) {
            goTo(step + 1);
            return;
        }

        openMailto(mailto);
        setSent(true);
    };

    const onChange = (value) => {
        setValues((prev) => ({ ...prev, [current.key]: value }));
        if (error) setError("");
    };

    const copyInquiry = () => {
        const text = decodeURIComponent(mailto.split("body=")[1] || "");
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        });
    };

    return (
        <section className="inquiry" id="poptavka" aria-labelledby={titleId}>
            <div className="inquiry-copy">
                <p className="inquiry-kicker">Kontaktní formulář</p>
                <h2 id={titleId} className="inquiry-title">
                    Potřebujete vyřešit IT nebo upravit web?
                </h2>
                <p className="inquiry-lead">
                    Tři krátké kroky. Ozveme se na e-mail nebo telefon, který necháte.
                </p>
            </div>

            <form
                className="inquiry-form"
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!sent) advance();
                }}
                noValidate
            >
                <div className="inquiry-progress" aria-hidden="true">
                    {STEPS.map((item, index) => (
                        <span
                            key={item.key}
                            className={sent || index <= step ? "is-on" : undefined}
                        />
                    ))}
                </div>
                <p className="inquiry-step">
                    {sent ? "Hotovo" : `Krok 0${step + 1} z 03`}
                </p>

                {step > 0 && !sent && (
                    <ul className="inquiry-recap">
                        {STEPS.slice(0, step).map((item, index) => (
                            <li key={item.key}>
                                <button type="button" onClick={() => goTo(index)}>
                                    <span>{item.label}</span>
                                    <strong>{values[item.key]}</strong>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {sent ? (
                    <div className="inquiry-done" key="done">
                        <p className="inquiry-done-title">Díky, {values.name.trim()}.</p>
                        <p className="inquiry-done-body">
                            Poptávka je připravená v e-mailu na{" "}
                            <a href={`mailto:${TO}`}>{TO}</a>. Stačí ji odeslat a ozveme se.
                        </p>
                        <div className="inquiry-actions">
                            <a className="inquiry-next" href={mailto}>
                                Otevřít e-mail znovu
                            </a>
                            <button type="button" className="inquiry-back" onClick={copyInquiry}>
                                {copied ? "Zkopírováno" : "Zkopírovat text"}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="inquiry-field" key={current.key}>
                        <label htmlFor={`inquiry-${current.key}`}>{current.label}</label>
                        {current.multiline ? (
                            <textarea
                                ref={fieldRef}
                                id={`inquiry-${current.key}`}
                                name={current.key}
                                rows={4}
                                placeholder={current.placeholder}
                                value={values[current.key]}
                                aria-invalid={error ? "true" : "false"}
                                aria-describedby={error ? errorId : undefined}
                                onChange={(event) => onChange(event.target.value)}
                            />
                        ) : (
                            <input
                                ref={fieldRef}
                                id={`inquiry-${current.key}`}
                                name={current.key}
                                type="text"
                                autoComplete={current.autoComplete}
                                enterKeyHint={step === STEPS.length - 1 ? "send" : "next"}
                                placeholder={current.placeholder}
                                value={values[current.key]}
                                aria-invalid={error ? "true" : "false"}
                                aria-describedby={error ? errorId : undefined}
                                onChange={(event) => onChange(event.target.value)}
                            />
                        )}
                        <p id={errorId} className="inquiry-error" role={error ? "alert" : undefined}>
                            {error || "\u00a0"}
                        </p>
                        <div className="inquiry-actions">
                            {step > 0 && (
                                <button type="button" className="inquiry-back" onClick={() => goTo(step - 1)}>
                                    Zpět
                                </button>
                            )}
                            <button type="submit" className="inquiry-next">
                                {step === STEPS.length - 1 ? "Odeslat poptávku" : "Pokračovat"}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {!sent && (
                    <p className="inquiry-note">
                        Údaje použijeme jen k vyřízení poptávky.{" "}
                        <a
                            href="/gdpr"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/gdpr");
                            }}
                        >
                            Ochrana osobních údajů
                        </a>
                    </p>
                )}
            </form>

            <style>{`
                .inquiry {
                    display: grid;
                    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
                    gap: clamp(2rem, 5vw, 4.5rem);
                    align-items: start;
                    padding: clamp(2rem, 4vw, 3rem) 0 clamp(2.5rem, 5vw, 3.5rem);
                    border-top: 1px solid rgba(21,51,232,0.1);
                    border-bottom: 1px solid rgba(21,51,232,0.1);
                    margin-bottom: clamp(3rem, 6vw, 4.5rem);
                }
                .inquiry-kicker {
                    font-size: 1rem;
                    font-weight: 500;
                    letter-spacing: 0;
                    text-transform: none;
                    color: rgba(21,51,232,0.82);
                    margin: 0 0 1rem;
                }
                .inquiry-title {
                    font-size: clamp(1.8rem, 3.4vw, 2.6rem);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                    margin: 0 0 1rem;
                    color: #1533e8;
                    text-wrap: balance;
                }
                .inquiry-lead {
                    margin: 0;
                    max-width: 32ch;
                    font-size: 0.95rem;
                    line-height: 1.65;
                    color: rgba(21,51,232,0.62);
                }
                .inquiry-form {
                    min-width: 0;
                }
                .inquiry-progress {
                    display: flex;
                    gap: 0.35rem;
                    margin-bottom: 0.7rem;
                }
                .inquiry-progress span {
                    height: 2px;
                    flex: 1;
                    background: rgba(21,51,232,0.12);
                    transition: background 0.25s ease;
                }
                .inquiry-progress span.is-on {
                    background: #1533e8;
                }
                .inquiry-step {
                    margin: 0 0 1.25rem;
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: rgba(21,51,232,0.45);
                }
                .inquiry-recap {
                    list-style: none;
                    margin: 0 0 1.25rem;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                }
                .inquiry-recap button {
                    all: unset;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0.45rem 0;
                    border-bottom: 1px solid rgba(21,51,232,0.08);
                    font-family: inherit;
                }
                .inquiry-recap span {
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: rgba(21,51,232,0.4);
                    flex-shrink: 0;
                }
                .inquiry-recap strong {
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: rgba(21,51,232,0.8);
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .inquiry-recap button:hover strong {
                    color: #1533e8;
                }
                .inquiry-field,
                .inquiry-done {
                    animation: inquiry-in 0.35s cubic-bezier(0.25, 0, 0, 1);
                }
                .inquiry-field label {
                    display: block;
                    margin-bottom: 0.35rem;
                    font-size: clamp(1.15rem, 2vw, 1.45rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: #1533e8;
                }
                .inquiry-field input,
                .inquiry-field textarea {
                    width: 100%;
                    box-sizing: border-box;
                    border: none;
                    border-bottom: 1px solid rgba(21,51,232,0.22);
                    border-radius: 0;
                    background: transparent;
                    color: #1533e8;
                    font-family: inherit;
                    font-size: clamp(1.05rem, 1.6vw, 1.25rem);
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    line-height: 1.45;
                    padding: 0.55rem 0 0.7rem;
                    outline: none;
                    resize: vertical;
                }
                .inquiry-field input::placeholder,
                .inquiry-field textarea::placeholder {
                    color: rgba(21,51,232,0.28);
                    font-weight: 500;
                }
                .inquiry-field input:focus,
                .inquiry-field textarea:focus {
                    border-bottom-color: #1533e8;
                }
                .inquiry-error {
                    min-height: 1.3rem;
                    margin: 0.55rem 0 0;
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #9d1c2b;
                }
                .inquiry-actions {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.85rem 1.25rem;
                    margin-top: 0.4rem;
                }
                .inquiry-next {
                    all: unset;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.55rem;
                    padding: 0.85rem 1.4rem;
                    background: #1533e8;
                    color: #fff;
                    font-family: inherit;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    text-decoration: none;
                    border-radius: 999px;
                    transition: background 0.15s, transform 0.15s;
                }
                .inquiry-next:hover {
                    background: rgba(21,51,232,0.88);
                    transform: translateY(-1px);
                }
                .inquiry-next:focus-visible,
                .inquiry-back:focus-visible,
                .inquiry-recap button:focus-visible {
                    outline: 2px solid #1533e8;
                    outline-offset: 3px;
                }
                .inquiry-back {
                    all: unset;
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(21,51,232,0.5);
                }
                .inquiry-back:hover {
                    color: #1533e8;
                }
                .inquiry-note {
                    margin: 1.25rem 0 0;
                    font-size: 0.78rem;
                    line-height: 1.5;
                    color: rgba(21,51,232,0.5);
                }
                .inquiry-note a,
                .inquiry-done-body a {
                    color: #1533e8;
                    text-underline-offset: 3px;
                }
                .inquiry-done-title {
                    margin: 0 0 0.6rem;
                    font-size: clamp(1.4rem, 2.4vw, 1.8rem);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    color: #1533e8;
                }
                .inquiry-done-body {
                    margin: 0 0 1.4rem;
                    max-width: 42ch;
                    font-size: 0.95rem;
                    line-height: 1.65;
                    color: rgba(21,51,232,0.7);
                }
                @keyframes inquiry-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: none; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .inquiry-field,
                    .inquiry-done,
                    .inquiry-progress span,
                    .inquiry-next {
                        animation: none;
                        transition: none;
                    }
                }
                @media (max-width: 860px) {
                    .inquiry {
                        grid-template-columns: 1fr;
                        gap: 1.75rem;
                    }
                    .inquiry-lead {
                        max-width: none;
                    }
                    .inquiry-kicker {
                        font-size: 1rem;
                        color: rgba(21,51,232,0.82);
                    }
                }
            `}</style>
        </section>
    );
}
