import CleanGridImg from '../assets/CleanGrid.png'
import dunTaskImg from '../assets/DunTask.png'
import aaessImg from '../assets/aaessf1.png'
import petconnectImg from '../assets/petco.jpg'
import admissionImg from '../assets/admission-preview.svg'
import designSystemImg from '../assets/design-system-preview.svg'

const designs = [
  {
    title: 'CleanGrid Proposal',
    desc: 'A proposal for CleanGrid system design and development.',
    tags: ['Canva', 'System Design', 'Proposal'],
    image: CleanGridImg,
    link: 'https://canva.link/cleangrid',
  },
  {
    title: 'DUN Circles Surfaces',
    desc: 'Collaborative task surfaces, shared lists, and real-time presence indicators.',
    tags: ['Figma', 'Components', 'React'],
    image: dunTaskImg,
    link: 'https://dun-topaz.vercel.app/',
  },
  {
    title: 'AAESS Student Dashboard',
    desc: 'Performance analytics, study planner, and AI advisor conversation patterns.',
    tags: ['Dashboard', 'Charts', 'UX'],
    image: aaessImg,
    link: 'https://aaess.site.je/?i=1',
  },
  {
    title: 'Pet Connect App',
    desc: 'Pet Connect App flows for pet owners and pet lovers.',
    tags: ['Figma', 'Interconnectivity', 'Workflow'],
    image: petconnectImg,
    link: 'https://www.figma.com/design/tIQU1FULe1d7PFwpDYYsUl/PET.CO?node-id=4-229&t=nw1Y2dnzu6LJAyOh-1',
  },
  {
    title: 'Admission Decision UI',
    desc: 'Rule-engine review screens with clear eligibility outcomes and audit trails.',
    tags: ['Decision UI', 'Forms', 'Admin'],
    image: admissionImg,
    link: '#',
  },
  {
    title: 'Portfolio Design System',
    desc: 'Lavender / acid / ink tokens, type scale, and interactive patterns for this site.',
    tags: ['Design System', 'Tokens', 'Motion'],
    image: designSystemImg,
    link: '#',
  },
]

export default function Designs() {
  return (
    <section id="designs" className="designs wrap section-dark" aria-labelledby="designs-title">
      <p className="eyebrow reveal">02 / Selected Designs</p>

      <div className="section-header reveal">
        <h2 id="designs-title" className="serif">
          Interfaces &amp;
          <br />
          visual systems.
        </h2>
        <p>UI explorations · product surfaces</p>
      </div>

      <div className="designs-grid">
        {designs.map((d, i) => (
          <article
            key={d.title}
            className="design-card reveal"
            style={{ '--delay': `${i * 40}ms` }}
          >
            <div className="design-thumb">
              <span className="design-badge">{d.tags[0]}</span>
              <img
                src={d.image}
                alt={`${d.title} UI preview`}
                className="design-img"
                loading="lazy"
              />
            </div>
            <div className="design-info">
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <div className="design-tags">
                {d.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                href={d.link || '#'}
                className="design-link"
                target={d.link && d.link.startsWith('http') ? '_blank' : undefined}
                rel={d.link && d.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                Visit project <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div >
    </section >
  )
}
