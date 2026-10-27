import { BarChart3, ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons.jsx'
import { projects } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section id="projets">
      <div className="container">
        <Reveal>
          <p className="section-label">Projets</p>
          <h2 className="section-title">Réalisations data & dev</h2>
        </Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              className="project-card"
              delay={(i % 2) * 100}
            >
              {p.image && (
                <a
                  className="project-thumb"
                  href={p.repo || p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={p.image} alt={`Aperçu du projet ${p.title}`} loading="lazy" />
                </a>
              )}
              <div className="project-head">
                <BarChart3 size={26} className="project-icon" />
                <div className="project-links">
                  {p.badge && <span className="project-badge">{p.badge}</span>}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Site en ligne de ${p.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Dépôt GitHub de ${p.title}`}
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p className="project-sub">{p.subtitle}</p>
              <p>{p.description}</p>
              <ul className="project-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
