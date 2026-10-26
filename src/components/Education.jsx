import { Award } from 'lucide-react'
import { education, certifications, languages } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="formation">
      <div className="container">
        <Reveal>
          <p className="section-label">Formation</p>
          <h2 className="section-title">Diplômes & certifications</h2>
        </Reveal>
        <div className="edu-grid">
          <div>
            {education.map((e, i) => (
              <Reveal key={e.title} className="edu-item" delay={i * 100}>
                <span className="period">{e.period}</span>
                <h3>{e.title}</h3>
                <p className="school">{e.school}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="certs-card" delay={150}>
            <h3>
              <Award size={18} /> Certifications
            </h3>
            {certifications.map((c) => (
              <div className="cert-item" key={c.name}>
                <div>
                  <div>{c.name}</div>
                  <div className="issuer">{c.issuer}</div>
                </div>
                <span className="year">{c.year}</span>
              </div>
            ))}
            <div className="langs">
              {languages.map((l) => (
                <span key={l.name} className="lang-chip">
                  <b>{l.name}</b> — {l.level}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
