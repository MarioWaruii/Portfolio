import { useState } from 'react'

const skillsData = [
  {
    category: 'Languages',
    items: ['JavaScript', 'PHP', 'Python', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'PHP', 'Firebase', 'Supabase'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL / MariaDB', 'Firestore', 'Supabase', 'Microsoft Dataverse'],
  },
  {
    category: 'Power Platform',
    items: ['Power Apps (Canvas & Model)', 'Power Automate', 'Dataverse', 'Power Pages'],
  },
  {
    category: 'Tools & Design',
    items: ['Figma (UI/UX)', 'Git / GitHub', 'VS Code', 'REST APIs', 'CMS', 'WordPress'],
  },
]

const educationData = [
  {
    institution: 'Nnamdi Azikiwe University',
    degree: 'Bachelor of Science in Computer Science',
    period: 'May 2022 – Sep 2026',
    detail: 'Relevant coursework: Systems Design, Computer Networking, Data Analysis, Structural Design.',
    status: 'In Progress',
  },
  {
    institution: 'New Horizons Computer Learning Centers',
    degree: 'Web Design Professional Certification',
    period: 'Feb 2022',
    detail: 'Modern front-end engineering, responsive layout systems, and web standards certification.',
    status: 'Certified',
  },
]

const languagesData = [
  {
    lang: 'English',
    level: 'Fluent',
    desc: 'Full professional & technical communication for engineering, docs, and client presentations.',
  },
  {
    lang: 'Igbo',
    level: 'Native',
    desc: 'Mother tongue — fluent spoken and written communication.',
  },
  {
    lang: 'Spanish',
    level: 'Basic',
    desc: 'Elementary comprehension and foundational conversational phrases.',
  },
]

export default function Contact() {
  const [activeTab, setActiveTab] = useState('skills')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else if (type === 'phone') {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    })
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="eyebrow reveal">Have an opportunity, project, or role?</p>
        <h2 id="contact-title" className="reveal">
          Let’s make something
          <span className="serif"> that matters.</span>
        </h2>
        <p className="reveal">
          Open to full-time roles, contracts, and innovative collaborations worldwide.
        </p>

        {/* Primary Contact Channels */}
        <div className="contact-links-grid reveal">
          <div className="contact-card">
            <span className="contact-type">DIRECT EMAIL</span>
            <a className="email-link" href="mailto:mariochuks20@gmail.com">
              mariochuks20@gmail.com
            </a>
            <div className="contact-card-actions">
              <button
                type="button"
                className={`contact-action-btn ${copiedEmail ? 'copied' : ''}`}
                onClick={() => copyToClipboard('mariochuks20@gmail.com', 'email')}
              >
                {copiedEmail ? '✓ Copied!' : 'Copy Email'}
              </button>
              <a
                className="contact-action-btn"
                href="mailto:mariochuks20@gmail.com"
              >
                Open Mail ↗
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-type">PHONE / WHATSAPP</span>
            <a className="email-link" href="tel:+2349043292758">
              +234 904 329 2758
            </a>
            <div className="contact-card-actions">
              <a
                className="contact-action-btn"
                href="https://wa.me/2349043292758"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ↗
              </a>
              <button
                type="button"
                className={`contact-action-btn ${copiedPhone ? 'copied' : ''}`}
                onClick={() => copyToClipboard('+2349043292758', 'phone')}
              >
                {copiedPhone ? '✓ Copied!' : 'Copy Phone'}
              </button>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-type">CODE &amp; RESUME</span>
            <a
              className="email-link"
              href="https://github.com/MarioWaruii"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/MarioWaruii ↗
            </a>
            <div className="contact-card-actions">
              <a
                className="contact-action-btn highlight"
                href="/ChukwumaMarioCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Chukwuma-Mario-CV.pdf"
              >
                Download CV (PDF) ↓
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Credentials & Profile Dossier */}
        <div className="contact-dossier reveal">
          <div className="dossier-top">
            <div className="dossier-title-group">
              <h3>Profile &amp; Credentials Dossier</h3>
              <p>Verified Information from Chukwuma Mario's Curriculum Vitae</p>
            </div>

            <div className="dossier-controls">
              <div className="dossier-tabs" role="tablist" aria-label="Credentials views">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'skills'}
                  className={`dossier-tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Technical Stack
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'education'}
                  className={`dossier-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education &amp; Certs
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'languages'}
                  className={`dossier-tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
                  onClick={() => setActiveTab('languages')}
                >
                  Languages &amp; Availability
                </button>
              </div>

              <a
                href="/ChukwumaMarioCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="dossier-cv-link"
                title="View full resume in new tab"
              >
                View PDF CV ↗
              </a>
            </div>
          </div>

          {/* Dynamic Tab Panel */}
          <div className="dossier-content" role="tabpanel">
            {activeTab === 'skills' && (
              <div className="skills-dossier-grid">
                {skillsData.map((group) => (
                  <div key={group.category} className="skill-group-card">
                    <h4>{group.category}</h4>
                    <div className="skill-pills-wrap">
                      {group.items.map((skill) => (
                        <span key={skill} className="skill-dossier-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="education-dossier-list">
                {educationData.map((edu) => (
                  <article key={edu.institution} className="education-item">
                    <div className="edu-header">
                      <h4>{edu.institution}</h4>
                      <span className="edu-period">{edu.period}</span>
                    </div>
                    <p className="edu-degree">
                      {edu.degree} · <span className="edu-status-badge">{edu.status}</span>
                    </p>
                    <p className="edu-detail">{edu.detail}</p>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'languages' && (
              <div className="languages-dossier-container">
                <div className="languages-dossier-grid">
                  {languagesData.map((lang) => (
                    <div key={lang.lang} className="lang-card">
                      <div className="lang-header">
                        <h4>{lang.lang}</h4>
                        <span className="lang-badge">{lang.level}</span>
                      </div>
                      <p className="lang-desc">{lang.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="availability-dossier-box">
                  <span className="avail-indicator">● LIVE STATUS</span>
                  <strong>Currently Available for Global Opportunities</strong>
                  <p>
                    Based in FCT, Abuja, Nigeria (UTC+1). Seamlessly collaborating
                    with teams in US, UK, and global time zones. Ready for full-time
                    frontend engineering, UI/UX systems, and Power Platform initiatives.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section Bottom bar */}
        <div className="contact-bottom reveal">
          <span className="location-eyebrow">
            FCT, Abuja, Nigeria · +234 904 329 2758 · mariochuks20@gmail.com
          </span>
          <a
            className="contact-arrow"
            href="mailto:mariochuks20@gmail.com"
            aria-label="Send Chukwuma Mario an email"
          >
            ↗
          </a>
        </div>
      </div>
    </section>
  )
}
