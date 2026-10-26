import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2>Travaillons ensemble</h2>
          <p>
            Je recherche une <strong style={{ color: 'var(--accent)' }}>alternance
            en Data Analyst</strong>. Disponible pour échanger sur vos besoins en
            reporting, analyse de données ou développement d'outils décisionnels.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn btn-outline">
              <Phone size={18} /> {profile.phone}
            </a>
          </div>
          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
