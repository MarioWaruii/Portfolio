export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div className="reveal">
          <p className="eyebrow">05 / A little about me</p>
          <h2 id="about-title" className="serif">
            Systems rigor.
            <br />
            Human feeling.
          </h2>
        </div>

        <div className="reveal" style={{ '--delay': '100ms' }}>
          <p className="about-lead">
            I’m Chukwuma Mario, a developer and designer bridging the gap between
            computational systems and interactive user experiences.
          </p>
          <p className="about-body">
            I thrive at the intersection of solid backend logic and thoughtful, high-fidelity design. Whether I’m building collaborative full-stack tools, shaping academic decision-support and AI systems, or designing mission-critical workflows, I care deeply about resilient architecture, clear communication, and interfaces that feel genuinely good and easy to use
          </p>
          <p className="about-end">
            Computer Science student at Nnamdi Azikiwe University (2022–2026), based in Abuja and working with teams across the globe.
          </p>
        </div>
      </div>
    </section>
  )
}
