import { ArrowRight, FileDown, TrendingUp } from 'lucide-react'
import { profile, stats } from '../data/portfolio.js'

function HeroChart() {
  // Courbe décorative style "dashboard" pour le panneau du hero
  const points = [38, 52, 44, 68, 58, 78, 72, 92, 84, 104, 96, 118]
  const max = Math.max(...points)
  const w = 400
  const h = 160
  const coords = points
    .map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / max) * h}`)
    .join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Graphique décoratif">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((r) => (
        <line
          key={r}
          x1="0"
          y1={h * r}
          x2={w}
          y2={h * r}
          stroke="#232d47"
          strokeDasharray="4 4"
        />
      ))}
      <polygon points={`0,${h} ${coords} ${w},${h}`} fill="url(#areaFill)" />
      <polyline
        points={coords}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle
        cx={w}
        cy={h - (points[points.length - 1] / max) * h}
        r="4"
        fill="#22d3ee"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <>
      <header className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div>
            <div className="hero-badge">
              <span className="dot" />
              {profile.availability}
            </div>
            <h1>
              {profile.name.split(' ').slice(0, 1)}{' '}
              <span className="accent">
                {profile.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="hero-role">
              {profile.role} — {profile.tagline}
            </p>
            <p className="hero-bio">{profile.bio}</p>
            <div className="hero-actions">
              <a href="#projets" className="btn btn-primary">
                Voir mes projets <ArrowRight size={18} />
              </a>
              <a
                href={profile.cv}
                className="btn btn-outline"
                download="CV_Mamadou_Lamarana_Diallo.pdf"
              >
                <FileDown size={18} /> Télécharger le CV
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-header">
              <span>
                <TrendingUp size={14} style={{ verticalAlign: '-2px' }} />{' '}
                data_portfolio.pbix
              </span>
              <span className="live">
                <span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
                LIVE
              </span>
            </div>
            <HeroChart />
            <div className="hero-panel-footer">
              <div className="mini-kpi">
                <div className="v">430+</div>
                <div className="l">Mesures DAX</div>
              </div>
              <div className="mini-kpi">
                <div className="v">★</div>
                <div className="l">4 modèles</div>
              </div>
              <div className="mini-kpi">
                <div className="v">N-1</div>
                <div className="l">Comparaisons</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
