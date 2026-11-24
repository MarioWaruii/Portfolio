const projects = [
  {
    id: 'dun',
    index: '01',
    track: 'FULL-STACK + UI/UX',
    title: 'DUN — Collaborative Task Manager',
    github: 'https://github.com/MarioWaruii/dun-app',
    description:
      'Web-based task management platform built for modern teams. Features full task CRUD and "Circles" — a connectivity architecture enabling collective to-do lists shared across multiple users.',
    tech: [
      'React 19',
      'TanStack Start/Router/Query',
      'Tailwind CSS v4',
      'shadcn/ui',
      'Zustand',
      'Better Auth',
      'PostgreSQL (PGLite/Neon)',
      'Vite',
    ],
    wide: false,
    orbit: false,
    visual: 'dun',
  },
  {
    id: 'aaess',
    index: '02',
    track: 'FULL-STACK + UI/UX',
    title: 'AI-Powered Academic Support System (AAESS)',
    github: 'https://github.com/MarioWaruii/AAESS',
    description:
      'Web-based university student support platform bridging academic gaps. Delivers student performance tracking, personalized study planning, Groq AI-powered interactive chat, and comprehensive administrative analytics.',
    tech: ['PHP 8', 'JavaScript', 'Groq AI', 'MariaDB', 'Chart.js', 'Bootstrap', 'HTML5/CSS3'],
    wide: false,
    orbit: true,
    visual: 'aaess',
  },
  {
    id: 'expert',
    index: '03',
    track: 'FULL-STACK + UI/UX',
    title: 'Admission Expert System',
    github: 'https://github.com/MarioWaruii/admission-expert-system',
    description:
      'Automated decision-support system evaluating candidate records against complex university admission rules. Reduces evaluation latency from days to seconds while maintaining consistency, eligibility rules management, and applicant validation.',
    tech: ['PHP 8', 'HTML5/CSS3', 'JavaScript', 'Apache', 'MariaDB', 'Rule Engine'],
    wide: true,
    orbit: false,
    visual: 'expert',
  },
]

function DunVisual() {
  return (
    <div className="project-visual dun-preview" role="img" aria-label="DUN Task Manager Interface">
      <div className="dun-board" aria-hidden="true">
        <div className="dun-topbar">
          <span className="dun-logo">DUN //</span>
          <span className="dun-pill active">● Circles Active (3)</span>
          <span className="dun-user">MC</span>
        </div>
        <div className="dun-body">
          <div className="dun-column">
            <div className="dun-col-header">
              <span>Engineering Sprint</span>
              <span className="dun-counter">4 tasks</span>
            </div>
            <div className="dun-card">
              <p>Implement Circles Real-Time Sync</p>
              <div className="dun-tags">
                <span className="tag">React 19</span>
                <span className="tag-status">Done</span>
              </div>
            </div>
            <div className="dun-card active-card">
              <p>Zustand state migration &amp; auth session</p>
              <div className="dun-tags">
                <span className="tag">TanStack</span>
                <span className="tag-status live">In Review</span>
              </div>
            </div>
          </div>
          <div className="dun-column">
            <div className="dun-col-header">
              <span>Circles Shared List</span>
              <span className="dun-counter">Live</span>
            </div>
            <div className="dun-circle-box">
              <span className="circle-title">Collective To-Do</span>
              <p>Shared tasks sync across circle members seamlessly.</p>
              <div className="circle-members">
                <span className="avatar">CU</span>
                <span className="avatar">MA</span>
                <span className="avatar">VA</span>
                <span className="avatar-count">+2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AaessVisual() {
  return (
    < div className="project-visual aaess-preview" role="img" aria-label="AAESS Interface Preview" >
      <div className="aaess-board" aria-hidden="true">
        <div className="aaess-header">
          <strong>AAESS // Academic Support</strong>
          <span className="ai-badge">GROQ AI LIVE</span>
        </div>
        <div className="aaess-analytics">
          <div className="aaess-metric">
            <small>GPA PROJECTION</small>
            <strong>4.82</strong>
            <span className="trend">↑ +0.3 this sem</span>
          </div>
          <div className="aaess-metric">
            <small>TASK COMPLETION</small>
            <strong>94%</strong>
            <span className="trend">↑ On track</span>
          </div>
          <div className="aaess-chart" aria-hidden="true">
            {[40, 60, 50, 80, 65, 90, 100].map((h, i) => (
              <span
                key={i}
                className={`chart-bar${i === 6 ? ' highlight' : ''}`}
                style={{ '--h': `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="aaess-chat">
          <div className="chat-bubble user">
            generate_study_plan(target=&quot;CSC401&quot;)
          </div>
          <div className="chat-bubble ai">
            <span className="ai-label">Groq AI · 42ms</span>
            MON/WED — Dynamic Programming &amp; Graphs<br />
            TUE/THU — DB Optimization &amp; Normalization
          </div>
        </div>
      </div>
    </div >
  )
}

function ExpertVisual() {
  return (
    <div className="project-visual expert-preview" role="img" aria-label="Admission Expert System Dashboard">
      <div className="expert-card" aria-hidden="true">
        <div className="expert-header-bar">
          <span>RULE_ENGINE // v2.4</span>
          <span className="expert-chip">● DECISION ACTIVE</span>
        </div>
        <div className="expert-content-grid">
          <div className="expert-rule-list">
            <div className="rule-item">
              <span className="check">✓</span>
              <div>
                <strong>UTME Score &gt;= 250</strong>
                <p>Composite: 285 — PASSED</p>
              </div>
            </div>
            <div className="rule-item">
              <span className="check">✓</span>
              <div>
                <strong>O&apos;Level Requirements</strong>
                <p>5 Credits — VERIFIED</p>
              </div>
            </div>
            <div className="rule-item">
              <span className="check">✓</span>
              <div>
                <strong>Catchment Area Quota</strong>
                <p>Compliance — PASSED</p>
              </div>
            </div>
            <div className="rule-item">
              <span style={{ color: 'var(--acid)' }}>●</span>
              <div>
                <strong>Dept. Capacity Threshold</strong>
                <p>Evaluating...</p>
              </div>
            </div>
          </div>
          <div className="expert-result-box">
            <small>Automated Verdict</small>
            <h3>ADMIT</h3>
            <p className="score">Computer Science · NAU</p>
            <span className="action-status">18ms (was 3–5 days)</span>
          </div>
        </div>
      </div>
    </div >
  )
}

const visuals = {
  dun: DunVisual,
  aaess: AaessVisual,
  expert: ExpertVisual,
}

export default function Projects() {
  return (
    <section id="work" className="work wrap section-dark" aria-labelledby="work-title">
      <p className="eyebrow reveal">01 / Featured Projects</p>

      <div className="section-header reveal">
        <h2 id="work-title" className="serif">
          Production systems &amp;
          <br />
          engineered interfaces.
        </h2>
        <p>Selected Engineering · 2022 — 2026</p>
      </div>

      <div className="gallery">
        {projects.map((p) => {
          const Visual = visuals[p.visual]
          return (
            <article
              key={p.id}
              className={`project reveal ${p.wide ? 'project-wide' : ''} ${p.orbit ? 'project-orbit' : ''}`}
              style={p.orbit ? { '--delay': '100ms' } : undefined}
            >
              <p className="project-index">
                ({p.index}) — {p.track}
              </p>
              <a
                href={p.github || 'https://github.com/MarioWaruii'}
                target="_blank"
                rel="noopener noreferrer"
                className="project-anchor"
                aria-label={`View ${p.title} on GitHub`}
              >
                <Visual />
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
              </a>
              <p className="project-description">{p.description}</p>
              <div className="project-tech-pills">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          )
        })}
      </div>

      <div className="gallery-end reveal">
        <p>High-reliability architecture. User-centric simplicity.</p>
        <p className="eyebrow">Front-End · UI/UX · Power Platform · Full-Stack</p>
      </div>
    </section>
  )
}
