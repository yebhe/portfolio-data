import { Mail, Phone, MapPin, Languages } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile, languages } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="apropos">
      <div className="container">
        <Reveal>
          <p className="section-label">À propos</p>
          <h2 className="section-title">Transformer la donnée en décisions</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text" delay={100}>
            <p>
              Je suis <strong>{profile.name}</strong>, Data Analyst basé à
              Lyon et mobile sur toute la France. Après une Licence en
              Informatique et un BTS SIO SLAM, je me suis spécialisé dans
              l'analyse et la visualisation de données.
            </p>
            <p>
              Ma force : une <strong>double compétence data + développement</strong>.
              Je construis des modèles en étoile et en constellation dans Power BI,
              j'écris des mesures DAX avancées — et je sais aussi développer les
              applications autour (Django, React, PostgreSQL, Docker).
            </p>
            <p>
              J'ai livré <strong>4 dashboards Power BI complets</strong> couvrant
              la supply chain, la finance, l'e-commerce et les RH, avec un souci
              constant de la <strong>qualité des données</strong> : contrôles
              documentés, déduplication, règles métier.
            </p>
          </Reveal>
          <Reveal className="about-card" delay={200}>
            <h3>Informations</h3>
            <div className="info-row">
              <MapPin size={16} /> <span className="k">Localisation</span>
              <span>{profile.location}</span>
            </div>
            <div className="info-row">
              <Mail size={16} /> <span className="k">Email</span>
              <a href={`mailto:${profile.email}`} style={{ wordBreak: 'break-all' }}>{profile.email}</a>
            </div>
            <div className="info-row">
              <Phone size={16} /> <span className="k">Téléphone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </div>
            <div className="info-row">
              <GithubIcon size={16} /> <span className="k">GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">github.com/yebhe</a>
            </div>
            <div className="info-row">
              <LinkedinIcon size={16} /> <span className="k">LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/yebhe</a>
            </div>
            <div className="info-row">
              <Languages size={16} /> <span className="k">Langues</span>
              <span>
                {languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(' · ')}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
