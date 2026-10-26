import { BarChart3, Database, Code2 } from 'lucide-react'
import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

const icons = [BarChart3, Database, Code2]

export default function Skills() {
  return (
    <section id="competences" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal>
          <p className="section-label">Compétences</p>
          <h2 className="section-title">Stack technique</h2>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={group.group} className="skill-card" delay={i * 100}>
                <h3>
                  <Icon size={20} /> {group.group}
                </h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
