import { experience } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal>
          <p className="section-label">Expérience</p>
          <h2 className="section-title">Parcours professionnel</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((xp, i) => (
            <Reveal key={xp.title} className="timeline-item" delay={i * 100}>
              <p className="timeline-period">{xp.period}</p>
              <h3>{xp.title}</h3>
              <p className="timeline-company">{xp.company}</p>
              <ul>
                {xp.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
