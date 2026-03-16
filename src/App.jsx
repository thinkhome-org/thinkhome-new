import './App.css'

function App() {
  return (
    <div className="hero-page">
      <iframe
        src="https://www.reactbits.dev/backgrounds/prism"
        className="hero-page__prism-bg"
        title="Prism background"
        tabIndex={-1}
        aria-hidden
      />
      <div className="hero-page__overlay" aria-hidden />

      <header className="hero-header">
        <a href="/" className="hero-header__logo">
          &lt;thinkhome&gt;
        </a>
        <nav className="hero-header__nav">
          <span className="hero-header__squircle" aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <a href="/" className="hero-header__nav-link hero-header__nav-link--active">
            Domů
          </a>
          <a href="/o-nas" className="hero-header__nav-link">
            O nás
          </a>
          <a href="/sluzby" className="hero-header__nav-link">
            Služby
          </a>
        </nav>
        <a href="/kontakt" className="hero-header__contact">
          &lt;Kontakt&gt;
        </a>
      </header>

      <main className="hero-main">
        <h1 className="hero-main__headline">
          <span className="hero-main__headline-line">Kompletní IT</span>
          <span className="hero-main__headline-brackets" aria-hidden>
            &lt;&gt;
          </span>
          <span className="hero-main__headline-line">pod jednou střechou.</span>
        </h1>
        <p className="hero-main__subtext">
          Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit
          několik dodavatelů zároveň. Věnujte se byznysu, IT nechte na nás.
        </p>
        <div className="hero-main__ctas">
          <a href="/sluzby" className="hero-main__cta">
            ZJISTIT VÍCE
          </a>
          <a href="/kontakt" className="hero-main__cta hero-main__cta--primary">
            KONTAKTUJTE NÁS
            <span className="hero-main__cta-arrow" aria-hidden>
              →
            </span>
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
