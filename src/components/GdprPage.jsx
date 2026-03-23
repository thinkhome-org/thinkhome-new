import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppNavigate } from "../context/navigate";

const BLUE = "#1533e8";

const pStyle = {
    fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
    fontWeight: 400,
    color: "#2a3f8f",
    lineHeight: 1.75,
    margin: "0 0 1rem",
};

const ulStyle = {
    margin: "0 0 1rem",
    paddingLeft: "1.4rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
};

const liStyle = {
    fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
    color: "#2a3f8f",
    lineHeight: 1.7,
};

const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#7a8fc4",
    margin: 0,
    paddingTop: "0.3rem",
    flexShrink: 0,
};

const dividerStyle = {
    width: "100%",
    height: "1px",
    background: "#e4e9f7",
    margin: "clamp(2.5rem, 5vw, 4rem) 0",
};

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
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a8fc4", margin: "0 0 1.25rem" }}>
                        Právní informace
                    </p>
                    <h1 style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 1.5rem", color: BLUE }}>
                        Ochrana osobních údajů
                    </h1>
                    <p style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)", color: "#7a8fc4", margin: 0, lineHeight: 1.6 }}>
                        Zásady zpracování osobních údajů v souladu s nařízením GDPR (EU) 2016/679.<br />
                        Poslední aktualizace: 19. března 2026
                    </p>
                </div>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", marginBottom: "clamp(3rem, 6vw, 5rem)" }} />

                {/* 1. Správce */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>1. Správce osobních údajů</p>
                    <div>
                        <p style={pStyle}>Správcem vašich osobních údajů je:</p>
                        <div style={{ background: "#f4f6fd", borderRadius: "12px", padding: "1.25rem 1.5rem", marginBottom: "1rem", fontSize: "clamp(0.875rem, 1.3vw, 1rem)", color: "#2a3f8f", lineHeight: 1.75 }}>
                            <strong>Thinkhome s.r.o.</strong><br />
                            Se sídlem v České republice<br />
                            IČO: bude doplněno po zápisu do OR<br />
                            Kontaktní e-mail: <a href="mailto:info@thinkhome.cz" style={{ color: BLUE }}>info@thinkhome.cz</a>
                        </div>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Thinkhome s.r.o. (dále jen „správce" nebo „my") zpracovává osobní údaje v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a platnou českou legislativou.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 2. Jaké údaje */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>2. Jaké osobní údaje zpracováváme</p>
                    <div>
                        <p style={pStyle}>V závislosti na způsobu, jakým nás kontaktujete nebo využíváte naše služby, můžeme zpracovávat tyto kategorie osobních údajů:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Identifikační údaje – jméno a příjmení, název firmy, IČO</li>
                            <li style={liStyle}>Kontaktní údaje – e-mailová adresa, telefonní číslo, adresa sídla</li>
                            <li style={liStyle}>Komunikační údaje – obsah zpráv zaslaných prostřednictvím kontaktního formuláře nebo e-mailu</li>
                            <li style={liStyle}>Technické údaje – IP adresa, typ prohlížeče, cookies (pouze při návštěvě webu)</li>
                            <li style={liStyle}>Smluvní a fakturační údaje – při uzavření smlouvy o poskytování služeb</li>
                        </ul>
                        <p style={{ ...pStyle, marginBottom: 0 }}>Nezpracováváme zvláštní kategorie osobních údajů (citlivé údaje) ve smyslu čl. 9 GDPR.</p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 3. Účel */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>3. Účel a právní základ zpracování</p>
                    <div>
                        <p style={pStyle}>Vaše osobní údaje zpracováváme na základě těchto právních titulů:</p>
                        <ul style={{ ...ulStyle, marginBottom: 0 }}>
                            <li style={liStyle}>Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR) – zpracování nezbytné pro poskytování sjednaných IT služeb</li>
                            <li style={liStyle}>Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR) – ochrana před podvody, bezpečnost sítí, přímý marketing vůči stávajícím klientům</li>
                            <li style={liStyle}>Souhlas (čl. 6 odst. 1 písm. a) GDPR) – zasílání obchodních sdělení osobám, které o to požádaly</li>
                            <li style={liStyle}>Právní povinnost (čl. 6 odst. 1 písm. c) GDPR) – archivace daňových dokladů, povinnosti dle zákona o účetnictví</li>
                        </ul>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 4. Doba uchování */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>4. Doba uchování osobních údajů</p>
                    <div>
                        <p style={pStyle}>Osobní údaje uchováváme pouze po dobu nezbytně nutnou pro splnění účelu, pro který byly shromážděny:</p>
                        <ul style={{ ...ulStyle, marginBottom: 0 }}>
                            <li style={liStyle}>Smluvní dokumentace a fakturační údaje – po dobu trvání smluvního vztahu a následně 10 let dle zákona o účetnictví</li>
                            <li style={liStyle}>Kontaktní dotazy a komunikace – 3 roky od poslední komunikace</li>
                            <li style={liStyle}>Marketingová sdělení – do odvolání souhlasu</li>
                            <li style={liStyle}>Technické logy a cookies – v souladu s nastavením, maximálně 13 měsíců</li>
                        </ul>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 5. Příjemci */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>5. Příjemci osobních údajů</p>
                    <div>
                        <p style={pStyle}>
                            Vaše osobní údaje neprodáváme třetím stranám. V nezbytném rozsahu je sdílíme pouze s důvěryhodnými zpracovateli, kteří zajišťují technický provoz našich služeb (cloudová infrastruktura, e-mailové systémy, účetní software). Všichni zpracovatelé jsou vázáni smlouvou o zpracování osobních údajů a zaručují odpovídající úroveň ochrany.
                        </p>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Osobní údaje nepředáváme do třetích zemí mimo EHP, pokud není zajištěna odpovídající úroveň ochrany ve smyslu GDPR (např. standardní smluvní doložky).
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 6. Vaše práva */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>6. Vaše práva</p>
                    <div>
                        <p style={pStyle}>Jako subjekt údajů máte vůči nám tato práva:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Právo na přístup – získat potvrzení, zda zpracováváme vaše osobní údaje, a přístup k nim</li>
                            <li style={liStyle}>Právo na opravu – požádat o opravu nepřesných nebo doplnění neúplných údajů</li>
                            <li style={liStyle}>Právo na výmaz ("právo být zapomenut") – za podmínek čl. 17 GDPR</li>
                            <li style={liStyle}>Právo na omezení zpracování – v případech stanovených čl. 18 GDPR</li>
                            <li style={liStyle}>Právo na přenositelnost údajů – obdržet údaje v strojově čitelném formátu</li>
                            <li style={liStyle}>Právo vznést námitku – zejména proti zpracování na základě oprávněného zájmu</li>
                            <li style={liStyle}>Právo odvolat souhlas – kdykoli, bez vlivu na zákonnost předchozího zpracování</li>
                            <li style={liStyle}>Právo podat stížnost – u dozorového úřadu (Úřad pro ochranu osobních údajů, www.uoou.cz)</li>
                        </ul>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Vaše žádosti vyřizujeme bez zbytečného odkladu, nejpozději do 30 dnů. Pro uplatnění práv nás kontaktujte na <a href="mailto:info@thinkhome.cz" style={{ color: BLUE }}>info@thinkhome.cz</a>.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 7. Cookies */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>7. Cookies</p>
                    <div>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Náš web může používat technické cookies nezbytné pro správné fungování stránek. Analytické nebo marketingové cookies používáme pouze na základě vašeho souhlasu. Svá nastavení cookies můžete kdykoli změnit v nastavení prohlížeče.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 8. Zabezpečení */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>8. Zabezpečení osobních údajů</p>
                    <div>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Přijímáme vhodná technická a organizační opatření k ochraně osobních údajů před neoprávněným přístupem, ztrátou nebo zničením. Zahrnují mimo jiné šifrování přenosu dat (TLS/HTTPS), řízení přístupových práv, pravidelné bezpečnostní audity a školení zaměstnanců.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 9. Změny */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>9. Změny těchto zásad</p>
                    <div>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Tyto zásady ochrany osobních údajů můžeme příležitostně aktualizovat. O podstatných změnách vás budeme informovat prostřednictvím e-mailu nebo oznámením na webu. Doporučujeme tuto stránku pravidelně navštěvovat.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
                    <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.3, color: BLUE, margin: 0, maxWidth: "44ch" }}>
                        Máte otázky ohledně zpracování vašich osobních údajů?
                    </p>
                    <a
                        href="/kontakt"
                        onClick={(e) => { e.preventDefault(); navigate('/kontakt'); }}
                        style={{
                            all: "unset",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 0,
                            color: BLUE,
                            fontFamily: "'Manrope Variable', Manrope, sans-serif",
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            borderBottom: "1px solid rgba(21,51,232,0.3)",
                            paddingBottom: "2px",
                            textDecoration: "none",
                        }}
                    >
                        Kontaktujte nás →
                    </a>
                </div>
            </main>

            <style>{`
                @media (max-width: 767px) {
                    .gdpr-section {
                        grid-template-columns: 1fr !important;
                        gap: 0.75rem !important;
                    }
                }
            `}</style>

            <div style={{ background: BLUE }}>
                <Footer />
            </div>
        </div>
    );
}
