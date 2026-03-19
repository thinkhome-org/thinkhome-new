import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppNavigate } from "../context/navigate";

const BLUE = "#1533e8";

function Section({ label, children }) {
    return (
        <div className="gdpr-section">
            <p className="gdpr-section-label">{label}</p>
            <div className="gdpr-section-body">{children}</div>
        </div>
    );
}

function P({ children }) {
    return (
        <p style={{
            fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
            fontWeight: 400,
            color: "#2a3f8f",
            lineHeight: 1.75,
            margin: "0 0 1rem",
        }}>{children}</p>
    );
}

function Ul({ items }) {
    return (
        <ul style={{
            margin: "0 0 1rem",
            paddingLeft: "1.4rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
        }}>
            {items.map((item, i) => (
                <li key={i} style={{
                    fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
                    color: "#2a3f8f",
                    lineHeight: 1.7,
                }}>{item}</li>
            ))}
        </ul>
    );
}

export default function GdprPage() {
    const navigate = useAppNavigate();

    useEffect(() => {
        document.title = "Ochrana osobních údajů (GDPR) – thinkhome";
        return () => { document.title = "thinkhome – Kompletní IT pod jednou střechou"; };
    }, []);

    return (
        <div style={{
            minHeight: "100vh",
            background: "#fff",
            fontFamily: "'Manrope Variable', Manrope, sans-serif",
            color: BLUE,
        }}>
            <div style={{ background: "#fff", height: "68px", position: "relative" }}>
                <Navbar light />
            </div>

            <main style={{
                padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 8vw, 7rem) clamp(4rem, 8vw, 6rem)",
                maxWidth: "1100px",
            }}>
                {/* Header */}
                <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
                    <p style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#7a8fc4",
                        margin: "0 0 1.25rem",
                    }}>Právní informace</p>
                    <h1 style={{
                        fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        margin: "0 0 1.5rem",
                        color: BLUE,
                    }}>
                        Ochrana osobních údajů
                    </h1>
                    <p style={{
                        fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
                        color: "#7a8fc4",
                        margin: 0,
                        lineHeight: 1.6,
                    }}>
                        Zásady zpracování osobních údajů v souladu s nařízením GDPR (EU) 2016/679.<br />
                        Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                </div>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", marginBottom: "clamp(3rem, 6vw, 5rem)" }} />

                {/* 1 */}
                <Section label="1. Správce osobních údajů">
                    <P>Správcem vašich osobních údajů je:</P>
                    <div style={{
                        background: "#f4f6fd",
                        borderRadius: "12px",
                        padding: "1.25rem 1.5rem",
                        marginBottom: "1rem",
                        fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
                        color: "#2a3f8f",
                        lineHeight: 1.75,
                    }}>
                        <strong>Thinkhome s.r.o.</strong><br />
                        Se sídlem v České republice<br />
                        IČO: bude doplněno po zápisu do OR<br />
                        Kontaktní e-mail: <a href="mailto:info@thinkhome.cz" style={{ color: BLUE }}>info@thinkhome.cz</a>
                    </div>
                    <P>
                        Thinkhome s.r.o. (dále jen „správce" nebo „my") zpracovává osobní údaje v souladu
                        s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a platnou českou legislativou.
                    </P>
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 2 */}
                <Section label="2. Jaké osobní údaje zpracováváme">
                    <P>V závislosti na způsobu, jakým nás kontaktujete nebo využíváte naše služby, můžeme zpracovávat tyto kategorie osobních údajů:</P>
                    <Ul items={[
                        "Identifikační údaje – jméno a příjmení, název firmy, IČO",
                        "Kontaktní údaje – e-mailová adresa, telefonní číslo, adresa sídla",
                        "Komunikační údaje – obsah zpráv zaslaných prostřednictvím kontaktního formuláře nebo e-mailu",
                        "Technické údaje – IP adresa, typ prohlížeče, cookies (pouze při návštěvě webu)",
                        "Smluvní a fakturační údaje – při uzavření smlouvy o poskytování služeb",
                    ]} />
                    <P>Nezpracováváme zvláštní kategorie osobních údajů (citlivé údaje) ve smyslu čl. 9 GDPR.</P>
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 3 */}
                <Section label="3. Účel a právní základ zpracování">
                    <P>Vaše osobní údaje zpracováváme na základě těchto právních titulů:</P>
                    <Ul items={[
                        "Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR) – zpracování nezbytné pro poskytování sjednaných IT služeb",
                        "Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR) – ochrana před podvody, bezpečnost sítí, přímý marketing vůči stávajícím klientům",
                        "Souhlas (čl. 6 odst. 1 písm. a) GDPR) – zasílání obchodních sdělení osobám, které o to požádaly",
                        "Právní povinnost (čl. 6 odst. 1 písm. c) GDPR) – archivace daňových dokladů, povinnosti dle zákona o účetnictví",
                    ]} />
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 4 */}
                <Section label="4. Doba uchování osobních údajů">
                    <P>Osobní údaje uchováváme pouze po dobu nezbytně nutnou pro splnění účelu, pro který byly shromážděny:</P>
                    <Ul items={[
                        "Smluvní dokumentace a fakturační údaje – po dobu trvání smluvního vztahu a následně 10 let dle zákona o účetnictví",
                        "Kontaktní dotazy a komunikace – 3 roky od poslední komunikace",
                        "Marketingová sdělení – do odvolání souhlasu",
                        "Technické logy a cookies – v souladu s nastavením, maximálně 13 měsíců",
                    ]} />
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 5 */}
                <Section label="5. Příjemci osobních údajů">
                    <P>
                        Vaše osobní údaje neprodáváme třetím stranám. V nezbytném rozsahu je sdílíme pouze s důvěryhodnými
                        zpracovateli, kteří zajišťují technický provoz našich služeb (cloudová infrastruktura, e-mailové systémy,
                        účetní software). Všichni zpracovatelé jsou vázáni smlouvou o zpracování osobních údajů a zaručují
                        odpovídající úroveň ochrany.
                    </P>
                    <P>
                        Osobní údaje nepředáváme do třetích zemí mimo EHP, pokud není zajištěna odpovídající úroveň
                        ochrany ve smyslu GDPR (např. standardní smluvní doložky).
                    </P>
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 6 */}
                <Section label="6. Vaše práva">
                    <P>Jako subjekt údajů máte vůči nám tato práva:</P>
                    <Ul items={[
                        "Právo na přístup – získat potvrzení, zda zpracováváme vaše osobní údaje, a přístup k nim",
                        "Právo na opravu – požádat o opravu nepřesných nebo doplnění neúplných údajů",
                        "Právo na výmaz (\"právo být zapomenut\") – za podmínek čl. 17 GDPR",
                        "Právo na omezení zpracování – v případech stanovených čl. 18 GDPR",
                        "Právo na přenositelnost údajů – obdržet údaje v strojově čitelném formátu",
                        "Právo vznést námitku – zejména proti zpracování na základě oprávněného zájmu",
                        "Právo odvolat souhlas – kdykoli, bez vlivu na zákonnost předchozího zpracování",
                        "Právo podat stížnost – u dozorového úřadu (Úřad pro ochranu osobních údajů, www.uoou.cz)",
                    ]} />
                    <P>
                        Vaše žádosti vyřizujeme bez zbytečného odkladu, nejpozději do 30 dnů. Pro uplatnění práv nás
                        kontaktujte na <a href="mailto:info@thinkhome.cz" style={{ color: BLUE }}>info@thinkhome.cz</a>.
                    </P>
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 7 */}
                <Section label="7. Cookies">
                    <P>
                        Náš web může používat technické cookies nezbytné pro správné fungování stránek. Analytické
                        nebo marketingové cookies používáme pouze na základě vašeho souhlasu. Svá nastavení cookies
                        můžete kdykoli změnit v nastavení prohlížeče.
                    </P>
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 8 */}
                <Section label="8. Zabezpečení osobních údajů">
                    <P>
                        Přijímáme vhodná technická a organizační opatření k ochraně osobních údajů před neoprávněným
                        přístupem, ztrátou nebo zničením. Zahrnují mimo jiné šifrování přenosu dat (TLS/HTTPS),
                        řízení přístupových práv, pravidelné bezpečnostní audity a školení zaměstnanců.
                    </P>
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* 9 */}
                <Section label="9. Změny těchto zásad">
                    <P>
                        Tyto zásady ochrany osobních údajů můžeme příležitostně aktualizovat. O podstatných změnách
                        vás budeme informovat prostřednictvím e-mailu nebo oznámením na webu. Doporučujeme tuto stránku
                        pravidelně navštěvovat.
                    </P>
                </Section>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", margin: "clamp(2.5rem, 5vw, 4rem) 0" }} />

                {/* Contact CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
                    <p style={{
                        fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                        color: BLUE,
                        margin: 0,
                        maxWidth: "44ch",
                    }}>
                        Máte otázky ohledně zpracování vašich osobních údajů?
                    </p>
                    <a
                        href="/kontakt"
                        onClick={(e) => { e.preventDefault(); navigate('/kontakt'); }}
                        className="gdpr-cta-btn"
                    >
                        Kontaktujte nás →
                    </a>
                </div>
            </main>

            <style>{`
                .gdpr-section {
                    display: grid;
                    grid-template-columns: clamp(8rem, 18%, 14rem) 1fr;
                    gap: clamp(2rem, 5vw, 5rem);
                    align-items: start;
                }
                @media (max-width: 767px) {
                    .gdpr-section {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                }

                .gdpr-section-label {
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #7a8fc4;
                    margin: 0;
                    padding-top: 0.3rem;
                    flex-shrink: 0;
                }

                .gdpr-section-body p:last-child,
                .gdpr-section-body ul:last-child {
                    margin-bottom: 0;
                }

                .gdpr-cta-btn {
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
                    border-bottom: 1px solid rgba(21,51,232,0.3);
                    padding-bottom: 2px;
                    transition: border-color 0.2s;
                    text-decoration: none;
                }
                @media (hover: hover) {
                    .gdpr-cta-btn:hover {
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
