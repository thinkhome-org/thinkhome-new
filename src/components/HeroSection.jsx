import Navbar from "./Navbar";
import Footer from "./Footer";
import ShapeWaves from "./ShapeWaves";
import { useAppNavigate } from "../context/navigate";

export default function HeroSection() {
  const navigate = useAppNavigate();

  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "560px",
          overflow: "hidden",
          background: "#fff",
          fontFamily: "'Manrope Variable', Manrope, sans-serif",
        }}
        className="hero-section"
      >
        <Navbar light />

        <div className="shape-waves-slot">
          <ShapeWaves
            shapes="mixed"
            cellSize={12}
            dotSize={0.75}
            color="#7d96e4"
            hoverColor="#1533e8"
            backgroundColor="#ffffff"
            speed={0.28}
            scale={2.4}
            contrast={1}
            brightness={0.45}
            flow={0.05}
            direction={18}
            fade={0.05}
            interactive
            splashRadius={40}
            splashStrength={0.4}
            glow={0.35}
            intro
            introDuration={2.6}
          />
        </div>

        {/* Glass panel */}
        <div className="hero-panel">
          {/* Content layer */}
          <div className="hero-content">
            {/* Vertically centred text block */}
            <div className="hero-text-wrapper">
              <div>
                <h1 className="hero-h1">
                  Kompletní IT
                  <br />
                  <span style={{ opacity: 0.65 }}>&lt; &gt;</span> pod jednou střechou.
                </h1>

                <p className="hero-p">
                  Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit
                  několik dodavatelů zároveň. Věnujte se byznysu, IT nechte na nás.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA — pinned to bottom of section */}
        <div className="hero-cta">
          <button
            className="hero-btn-primary"
            onClick={() => navigate('/sluzby')}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(21,51,232,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Zjistit více
          </button>
          <a
            href="/kontakt"
            onClick={(e) => { e.preventDefault(); navigate('/kontakt'); }}
            className="hero-btn-arrow"
          >
            Kontaktujte nás <span>→</span>
          </a>
        </div>

        <style>{`
                /* ── Section — mobile flex column ──────────── */
                @media (max-width: 767px) {
                    .hero-section {
                        display: flex;
                        flex-direction: column;
                        overflow: visible;
                        height: auto;
                        min-height: 100dvh;
                    }
                }

                /* ── Shape waves — wide field, soft edges, quiet under the nav ─ */
                .shape-waves-slot {
                    position: absolute;
                    z-index: 0;
                    pointer-events: none;
                    inset: 0;
                    -webkit-mask-image:
                        linear-gradient(to bottom, transparent 0, transparent 76px, #000 200px),
                        linear-gradient(to right, transparent 0, transparent 10%, rgba(0,0,0,0.18) 28%, rgba(0,0,0,0.4) 46%, #000 66%, #000 94%, transparent 100%);
                    -webkit-mask-composite: source-in;
                    mask-image:
                        linear-gradient(to bottom, transparent 0, transparent 76px, #000 200px),
                        linear-gradient(to right, transparent 0, transparent 10%, rgba(0,0,0,0.18) 28%, rgba(0,0,0,0.4) 46%, #000 66%, #000 94%, transparent 100%);
                    mask-composite: intersect;
                }
                @media (max-width: 767px) {
                    .shape-waves-slot {
                        inset: 50% 0 32% 0;
                        -webkit-mask-image:
                            linear-gradient(to bottom, transparent, #000 24%),
                            linear-gradient(to right, transparent, #000 14%, #000 86%, transparent);
                        mask-image:
                            linear-gradient(to bottom, transparent, #000 24%),
                            linear-gradient(to right, transparent, #000 14%, #000 86%, transparent);
                    }
                }

                /* ── Glass panel ────────────────────────────── */
                .hero-panel {
                    position: absolute;
                    z-index: 1;
                    top: 0;
                    left: 0;
                    width: 66.666%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding: clamp(2rem, 6vw, 7rem);
                }
                @media (max-width: 767px) {
                    .hero-panel {
                        width: 100%;
                        height: auto;
                        top: 0;
                        bottom: auto;
                        padding: clamp(1.5rem, 6vw, 3rem);
                        padding-bottom: 2rem;
                        max-height: 52%;
                    }

                }

                /* ── Inner content layer ────────────────────── */
                .hero-content {
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                }
                @media (max-width: 767px) {
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        padding-top: 40%;
                        height: auto;
                    }
                }

                /* ── Text wrapper — vertically centred ──────── */
                .hero-text-wrapper {
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
                @media (max-width: 767px) {
                    .hero-text-wrapper {
                        height: auto;
                        align-items: flex-start;
                        padding-top: 0;
                    }
                }

                /* ── Headline ───────────────────────────────── */
                .hero-h1 {
                    color: #1533e8;
                    font-family: inherit;
                    font-weight: 800;
                    font-size: clamp(2.2rem, 5.5vw, 4.2rem);
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    margin: 0 0 1.25rem;
                }
                @media (max-width: 767px) {
                    .hero-h1 {
                        font-size: clamp(2rem, 10vw, 3rem);
                    }
                }

                /* ── Body copy ──────────────────────────────── */
                .hero-p {
                    color: rgba(21,51,232,0.88);
                    font-family: inherit;
                    font-weight: 600;
                    font-size: clamp(0.875rem, 1.4vw, 1rem);
                    line-height: 1.65;
                    margin: 0;
                    max-width: 38ch;
                }
                @media (max-width: 767px) {
                    .hero-p {
                        font-size: 1rem;
                        font-weight: 700;
                        color: rgba(21,51,232,0.9);
                        max-width: 100%;
                    }
                }

                /* ── CTA block ──────────────────────────────── */
                .hero-cta {
                    position: absolute;
                    left: clamp(2rem, 6vw, 7rem);
                    bottom: clamp(2rem, 6vw, 7rem);
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1.25rem;
                    z-index: 2;
                }
                @media (max-width: 767px) {
                    .hero-cta {
                        position: absolute;
                        left: clamp(1.5rem, 6vw, 3rem);
                        bottom: 22dvh;
                        flex-wrap: wrap;
                        gap: 1rem;
                    }
                }

                /* ── Primary CTA button ─────────────────────── */
                .hero-btn-primary {
                    all: unset;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #1533e8;
                    color: #fff;
                    font-family: inherit;
                    font-weight: 700;
                    font-size: 0.75rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 0.7em 1.6em;
                    border-radius: 999px;
                    transition: box-shadow 0.15s;
                }
                @media (max-width: 767px) {
                    .hero-btn-primary {
                        font-size: 0.85rem;
                    }
                }

                /* ── Secondary CTA (ghost arrow) ────────────── */
                .hero-btn-arrow {
                    all: unset;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: #1533e8;
                    font-family: inherit;
                    font-weight: 700;
                    font-size: 0.75rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    border-bottom: 1px solid rgba(21,51,232,0.35);
                    padding-bottom: 2px;
                    transition: border-color 0.2s, text-shadow 0.2s;
                }
                @media (hover: hover) {
                    .hero-btn-arrow:hover {
                        border-color: rgba(21,51,232,0.9);
                        text-shadow: 0 0 12px rgba(21,51,232,0.7), 0 0 28px rgba(21,51,232,0.35);
                    }
                }
                @media (max-width: 767px) {
                    .hero-btn-arrow {
                        font-size: 0.85rem;
                    }
                }
            `}</style>
      </section>
      <Footer />
    </>
  );
}
