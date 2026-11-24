export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero wrap">
        <div className="availability-bar reveal">
          <p className="eyebrow availability">
            Frontend Developer · UI/UX Designer · Power Platform Engineer
          </p>
          <span className="hero-status-tag">Available for Hire &amp; Collaboration</span>
        </div>

        <div className="hero-stage">
          <h1 id="hero-title" className="reveal">
            <span className="thoughtful">Engineered</span>
            <span className="design serif">with craft.</span>
          </h1>

          <a
            href="#contact"
            className="edition edition-interactive"
            title="Get in touch"
          >
            <span className="edition-label">OPEN TO WORK</span>
            <span className="edition-date">DOSSIER 2026 ↗</span>
          </a>

          <div
            className="art-print"
            role="img"
            aria-label="Chrome-inspired intertwined violet rings on a dark art print"
          >
            <div className="sculpture" aria-hidden="true">
              <div className="ring" />
              <div className="ring" />
              <div className="ring" />
            </div>
            <span className="art-caption" aria-hidden="true">
              SYSTEMS / DESIGNs / POWER PLATFORM
            </span>
          </div>

          <p className="hero-intro reveal" style={{ '--delay': '120ms' }}>
            Hello there, I’m <strong>Chukwuma Mario</strong>,  a frontend developer, UI/UX
            designer, and Power Platform Developer that turns complex architectural
            requirements into high-performance web applications and interactive human
            experiences.
          </p>

          <a className="circle-link" href="#work">
            <span aria-hidden="true">↘</span>
            <span>
              Explore
              <br />
              my work
            </span>
          </a>
        </div>

        <p className="impact reveal">High-performance code. Considered design.</p>

        <div className="hero-meta">
          <p className="eyebrow">
            Based in Abuja, Nigeria · Available Worldwide
          </p>
          <p className="eyebrow">
            React · Next.js · Power Apps · Dataverse · UI/UX Design
          </p>
        </div>
      </div>
    </section>
  )
}
