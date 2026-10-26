import { useEffect, useRef, useState } from 'react'
import { BarChart3, Database, Code2 } from 'lucide-react'
import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

const icons = [BarChart3, Database, Code2]

function SkillBar({ item }) {
  const ref = useRef(null)
  const [w, setW] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setW(item.level)
          obs.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [item.level])

  return (
    <div className="skill-item" ref={ref}>
      <div className="top">
        <span>{item.name}</span>
        <span className="pct">{item.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  )
}

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
                {group.items.map((item) => (
                  <SkillBar key={item.name} item={item} />
                ))}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
