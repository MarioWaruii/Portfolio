const strengths = [
  {
    num: '01',
    title: 'Frontend Engineering',
    body: 'Deep fluency in React, Next.js, modern JavaScript, and component systems. I build performant, accessible interfaces that scale from prototypes to production.',
  },
  {
    num: '02',
    title: 'UI / UX Design',
    body: 'I design in Figma and ship the same systems in code. Clear hierarchy, thoughtful interaction, and interfaces that feel intentional on every screen size.',
  },
  {
    num: '03',
    title: 'Power Platform',
    body: 'Canvas Apps, Model-driven Apps, Power Automate, and Dataverse architecture. I turn enterprise process requirements into reliable low-code solutions.',
  },
  {
    num: '04',
    title: 'Full-Stack Delivery',
    body: 'Comfortable across the stack: Node/Express, PHP, PostgreSQL, MariaDB, Firebase, Supabase. I own features end-to-end when the product needs it.',
  },
  {
    num: '05',
    title: 'Systems Thinking',
    body: 'I map rules, data, and user flows before writing code. Decision engines, collaborative features, and academic tools all start from clear models.',
  },
  {
    num: '06',
    title: 'Communication',
    body: 'Clear writing, structured demos, and design that respects both the business that made the product and the people that would use the product.',
  },
]

export default function Strengths() {
  return (
    <section id="strengths" className="strengths" aria-labelledby="strengths-title">
      <div className="wrap">
        <p className="eyebrow reveal">03 / Strengths</p>

        <div className="section-header reveal">
          <h2 id="strengths-title" className="serif">
            What I bring
            <br />
            to the table.
          </h2>
          <p>Core capabilities · 2022 — 2026</p>
        </div>

        <div className="strengths-grid">
          {strengths.map((s, i) => (
            <article
              key={s.num}
              className="strength-card reveal"
              style={{ '--delay': `${i * 50}ms` }}
            >
              <span className="strength-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
