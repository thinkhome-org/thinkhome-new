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
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.href = "https://thinkhome.org/gdpr";
        return () => {
            document.title = "thinkhome – Kompletní IT pod jednou střechou";
            canonical.href = "https://thinkhome.org/";
        };
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
                        Poslední aktualizace: 5. října 2026
                    </p>
                </div>

                <div style={{ width: "100%", height: "1px", background: "#e4e9f7", marginBottom: "clamp(3rem, 6vw, 5rem)" }} />

                {/* 1. Správce */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>1. Správce osobních údajů</p>
                    <div>
                        <p style={pStyle}>Správcem vašich osobních údajů je:</p>
                        <div style={{ background: "#f4f6fd", borderRadius: "12px", padding: "1.25rem 1.5rem", marginBottom: "1rem", fontSize: "clamp(0.875rem, 1.3vw, 1rem)", color: "#2a3f8f", lineHeight: 1.75 }}>
                            <strong>ThinkHome s.r.o.</strong><br />
                            Rytířova 777/3, 143 00 Praha — Kamýk<br />
                            IČO: 23893591, DIČ: CZ23893591<br />
                            Spisová značka C 434666 vedená u Městského soudu v Praze<br />
                            E-mail: <a href="mailto:info@thinkhome.org" style={{ color: BLUE }}>info@thinkhome.org</a><br />
                            Telefon: <a href="tel:+420728981602" style={{ color: BLUE }}>+420 728 981 602</a><br />
                            Datová schránka: hujt7i5
                        </div>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            ThinkHome s.r.o. (dále jen „správce“ nebo „my“) zpracovává osobní údaje podle nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a českých právních předpisů. Pro záležitosti ochrany osobních údajů pište na <a href="mailto:info@thinkhome.org" style={{ color: BLUE }}>info@thinkhome.org</a>.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 2. Jaké údaje */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>2. Jaké osobní údaje zpracováváme</p>
                    <div>
                        <p style={pStyle}>Na tomto webu zpracováváme údaje, které nám sami předáte, a omezené technické údaje o návštěvě:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Kontaktní formulář na stránce Kontakt — jméno, e-mail nebo telefon a text poptávky</li>
                            <li style={liStyle}>E-mail, telefon a datová schránka — údaje, které nám sami pošlete</li>
                            <li style={liStyle}>Chat na webu — obsah zprávy a technický identifikátor relace v systému na servis.thinkhome.org</li>
                            <li style={liStyle}>Návštěva webu — adresa zobrazené stránky, přibližná země, typ zařízení a prohlížeče a údaje o rychlosti načtení. Tyto údaje nespojujeme s vaším jménem.</li>
                            <li style={liStyle}>Smluvní a fakturační údaje — jen pokud spolu uzavřeme smlouvu o poskytování služeb</li>
                        </ul>
                        <p style={{ ...pStyle, marginBottom: 0 }}>Nezpracováváme zvláštní kategorie osobních údajů (citlivé údaje) ve smyslu čl. 9 GDPR. Web nemá newsletter.</p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 3. Účel */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>3. Účel a právní základ zpracování</p>
                    <div>
                        <p style={pStyle}>Vaše osobní údaje zpracováváme na základě těchto právních titulů:</p>
                        <ul style={{ ...ulStyle, marginBottom: 0 }}>
                            <li style={liStyle}>Kroky před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR) — vyřízení poptávky, kterou jste sami odeslali</li>
                            <li style={liStyle}>Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR) — poskytování sjednaných IT služeb, pokud spolupráci uzavřeme</li>
                            <li style={liStyle}>Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR) — odpověď na dotaz nebo chat, který jste sami zahájili, a měření návštěvnosti a rychlosti webu bez cookies</li>
                            <li style={liStyle}>Právní povinnost (čl. 6 odst. 1 písm. c) GDPR) — uchování účetních a daňových dokladů</li>
                        </ul>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 4. Doba uchování */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>4. Doba uchování osobních údajů</p>
                    <div>
                        <p style={pStyle}>Osobní údaje uchováváme jen po dobu potřebnou k danému účelu:</p>
                        <ul style={{ ...ulStyle, marginBottom: 0 }}>
                            <li style={liStyle}>Poptávky z e-mailu a chatu — po dobu vyřízení a poté nejdéle 3 roky, pokud z nich nevznikne smlouva. Tříletá lhůta odpovídá obecné promlčecí době.</li>
                            <li style={liStyle}>Smluvní a fakturační údaje — po dobu smlouvy a poté po dobu uloženou daňovými a účetními předpisy. U daňových dokladů je to zpravidla 10 let.</li>
                            <li style={liStyle}>Údaje o návštěvnosti a rychlosti webu — v agregované podobě u provozovatele hostingu, bez cookie, podle které bychom vás poznali</li>
                        </ul>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 5. Příjemci */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>5. Příjemci osobních údajů</p>
                    <div>
                        <p style={pStyle}>
                            Osobní údaje neprodáváme. Na webu je předáváme jen v rozsahu nutném k provozu stránek a k vyřízení toho, co nám napíšete:
                        </p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Vercel Inc. (USA) — hosting webu a nástroje Vercel Web Analytics a Speed Insights. Měří návštěvnost a rychlost načtení bez cookies a bez reklamního profilu. Předání do USA probíhá na základě smluvních záruk tohoto poskytovatele, zejména standardních smluvních doložek.</li>
                            <li style={liStyle}>Chat na servis.thinkhome.org — zprávy z chatu ukládáme ve vlastním systému Zammad, abychom mohli odpovědět. Do reklamních sítí je nepředáváme.</li>
                            <li style={liStyle}>E-mail info@thinkhome.org — zpráva, kterou odešlete, skončí v naší schránce.</li>
                        </ul>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Pokud z poptávky vznikne zakázka, můžeme údaje v nezbytném rozsahu předat účetní nebo subdodavateli, který se na plnění podílí. Takový příjemce je vázán mlčenlivostí nebo smlouvou o zpracování osobních údajů.
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
                            Vaše žádosti vyřizujeme bez zbytečného odkladu, nejpozději do 30 dnů. Pro uplatnění práv nám napište na <a href="mailto:info@thinkhome.org" style={{ color: BLUE }}>info@thinkhome.org</a> nebo do datové schránky hujt7i5. Stížnost můžete podat u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" style={{ color: BLUE }}>www.uoou.cz</a>.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 7. Cookies */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>7. Formuláře, chat a cookies</p>
                    <div>
                        <p style={pStyle}>
                            Kontaktní formulář údaje neukládá na server webu. Po dokončení kroků se otevře váš e-mailový program s předvyplněnou zprávou na <a href="mailto:info@thinkhome.org" style={{ color: BLUE }}>info@thinkhome.org</a>. K nám se údaje dostanou až ve chvíli, kdy e-mail skutečně odešlete. U formuláře je odkaz na tuto stránku.
                        </p>
                        <p style={pStyle}>
                            Chat je na všech stránkách. Když do něj napíšete, zpráva se uloží v systému na servis.thinkhome.org, abychom mohli odpovědět. Prohlížeč si může pamatovat technický identifikátor této relace, aby konverzace pokračovala. Není to reklamní cookie a chat neslouží k cílení reklamy.
                        </p>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Web nepoužívá reklamní ani remarketingové cookies a nezobrazuje lištu se souhlasem, protože volitelné sledovací cookies nenasazujeme. Vercel Web Analytics a Speed Insights běží bez cookies. Provozovatel hostingu může krátkodobě zpracovat IP adresu v provozních záznamech kvůli doručení stránky a zabezpečení. Tyto záznamy nespojujeme s formulářem ani s chatem.
                        </p>
                    </div>
                </div>

                <div style={dividerStyle} />

                {/* 8. Zabezpečení */}
                <div className="gdpr-section" style={{ display: "grid", gridTemplateColumns: "clamp(8rem, 18%, 14rem) 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
                    <p style={labelStyle}>8. Zabezpečení osobních údajů</p>
                    <div>
                        <p style={{ ...pStyle, marginBottom: 0 }}>
                            Web běží přes HTTPS. K e-mailu a k záznamům chatu mají přístup jen lidé, kteří komunikaci vyřizují.
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

            <Footer />
        </div>
    );
}
