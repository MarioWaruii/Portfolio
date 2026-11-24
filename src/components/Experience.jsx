const roles = [
  {
    num: '01',
    company: 'Vigoplace',
    badge: 'Remote · Texas, USA',
    period: 'Power Platform Intern · Sept 2026 – Present',
    desc: 'Developing enterprise Canvas Apps (including an IT Help Desk system) with Microsoft Power Apps; architecting Model-driven Apps and automated Power Automate workflows. Designing Microsoft Dataverse data management schemas and writing custom JavaScript to enhance Power Platform capabilities.',
    tech: [
      'Microsoft Power Apps',
      'Canvas Apps',
      'Model-driven Apps',
      'Power Automate',
      'Dataverse',
      'JavaScript',
    ],
  },
  {
    num: '02',
    company: 'Pixels Solutions',
    badge: 'On-site · Abuja, Nigeria',
    period: 'Frontend & UI/UX Intern · Apr 2025 – Oct 2025',
    desc: 'Contributed to 4 live client projects and delivered 2 production websites, including GradeX. Designed intuitive UI/UX interfaces in Figma, architected frontend systems, and supported business development through client pitches and data-driven problem solving.',
    tech: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Express.js',
      'Python',
      'Figma (UI/UX)',
      'CMS',
    ],
  },
  {
    num: '03',
    company: 'New Horizons',
    badge: 'On-site · Abuja, Nigeria',
    period: 'Frontend Development Intern · Jan 2022 – Mar 2022',
    desc: 'Designed and developed 2 responsive front-end web projects. Built strong foundations in modern web standards, version control workflows, and cross-browser responsive implementation.',
    tech: ['JavaScript', 'HTML5 / CSS3', 'Git & GitHub', 'VS Code'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="expertise wrap section-dark"
      aria-labelledby="experience-title"
    >
      <p className="eyebrow reveal">04 / Professional Experience</p>
      <div className="section-header reveal">
        <h2 id="experience-title" className="serif">
          Hands-on engineering
          <br />
          &amp; production delivery.
        </h2>
        <p>Commercial &amp; Enterprise Track Record</p>
      </div>

      <div className="experience-list">
        {roles.map((r) => (
          <article key={r.num} className="service reveal">
            <span className="service-number">{r.num}</span>
            <div>
              <div className="exp-role-heading">
                <h3>{r.company}</h3>
                <span className="exp-badge">{r.badge}</span>
              </div>
              <p className="exp-period">{r.period}</p>
              <p className="exp-desc">{r.desc}</p>
              <div className="tech-pills">
                {r.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
