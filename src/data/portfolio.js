export const profile = {
  name: 'Mamadou Lamarana Diallo',
  role: 'Data Analyst',
  tagline: 'Power BI · SQL · Excel · Python',
  availability: "En recherche d'alternance — Data Analyst",
  bio: "Titulaire d'une Licence en Informatique (Côte d'Ivoire) et d'un BTS SIO option SLAM, je me spécialise en Data Analytics. Je conçois des modèles de données en étoile et en constellation, j'écris des mesures DAX avancées et je transforme des données brutes en tableaux de bord décisionnels.",
  email: '1lamarana.mamadou@gmail.com',
  phone: '+33 7 45 52 33 12',
  location: 'Paris, France',
  github: 'https://github.com/yebhe',
  linkedin: 'https://www.linkedin.com/in/yebhe',
  cv: './cv.pdf',
}

export const stats = [
  { value: '4', label: 'Dashboards Power BI' },
  { value: '470+', label: 'Mesures DAX écrites' },
  { value: '3', label: 'Modèles étoile / constellation' },
  { value: '250k', label: 'Doublons détectés' },
]

export const projects = [
  {
    title: 'Pilotage Supply Chain',
    subtitle: 'Power BI + Excel · End-to-end',
    description:
      "Tableau de bord de pilotage d'une chaîne d'approvisionnement complète : ventes, production, stock, achats et livraisons. Double implémentation Power BI et Excel.",
    highlights: [
      'Modèle en constellation multi-faits',
      '~150 mesures DAX, drill-through',
      'Version Excel : Power Query + Power Pivot',
    ],
    tags: ['Power BI', 'DAX', 'Power Query', 'Power Pivot', 'Modélisation'],
    repo: 'https://github.com/yebhe/supply-chain-powerbi',
    featured: true,
  },
  {
    title: 'Portefeuille de Prêts Bancaires',
    subtitle: 'Power BI · Analyse financière',
    description:
      "Pilotage d'un portefeuille de prêts bancaires avec comparaison N-1, suivi des encours et contrôles qualité documentés.",
    highlights: [
      'Constellation : 3 faits, 7 dimensions',
      '123 mesures DAX, comparaison N-1',
      'Détection de 250 000 doublons',
    ],
    tags: ['Power BI', 'DAX', 'Data Quality', 'Finance'],
    repo: 'https://github.com/yebhe/pret-bancaire-powerbi',
    featured: true,
  },
  {
    title: 'Analyse E-commerce',
    subtitle: 'Power BI · Ventes & clients',
    description:
      "Tableau de bord e-commerce couvrant ventes, profit, clients (rétention/churn), produits et moyens de paiement.",
    highlights: [
      'Modèle en étoile',
      '98 mesures DAX',
      'Analyse rétention & churn clients',
    ],
    tags: ['Power BI', 'DAX', 'Star Schema', 'KPI'],
    repo: 'https://github.com/yebhe/ecommerce-powerbi',
    featured: true,
  },
  {
    title: 'Dashboard Ressources Humaines',
    subtitle: 'Power BI · People Analytics',
    description:
      'Dashboard RH : effectifs, attrition, recrutement, rémunération et performance avec contrôles qualité intégrés.',
    highlights: [
      'Modélisation en étoile',
      'DAX avancé',
      'Contrôles qualité des données',
    ],
    tags: ['Power BI', 'DAX', 'RH', 'Data Quality'],
    repo: 'https://github.com/yebhe/ressource-humaine-powerbi',
    featured: false,
  },
  {
    title: 'Gestion Commerciale — SaaS Multi-tenant',
    subtitle: 'Django REST · React · Docker',
    description:
      'SaaS de gestion de magasins : POS, stock, clients, fournisseurs, rapports. PWA offline-first avec IndexedDB et file de synchronisation.',
    highlights: [
      'Architecture multi-tenant',
      'PWA offline-first (IndexedDB)',
      'API REST Django + React + Docker',
    ],
    tags: ['Django REST', 'React', 'Docker', 'PostgreSQL', 'PWA'],
    repo: 'https://github.com/yebhe/gestion_commerciale',
    featured: false,
  },
  {
    title: 'Web Film',
    subtitle: 'JavaScript · Front-end',
    description:
      'Application web de découverte de films avec recherche et affichage dynamique des informations.',
    highlights: ['JavaScript vanilla', 'UI responsive', 'Intégration API'],
    tags: ['JavaScript', 'HTML/CSS', 'API'],
    repo: 'https://github.com/yebhe/web-film',
    featured: false,
  },
]

export const skills = [
  {
    group: 'Data & BI',
    items: [
      { name: 'Power BI — DAX, Power Query, dashboards', level: 90 },
      { name: 'SQL — jointures, CTE, agrégations', level: 80 },
      { name: 'Excel — Power Pivot, tableaux de bord', level: 85 },
      { name: 'Python — manipulation de données', level: 65 },
    ],
  },
  {
    group: 'Modélisation & Analyse',
    items: [
      { name: 'Schémas en étoile / constellation', level: 85 },
      { name: 'KPI, segmentation, analyse N-1', level: 85 },
      { name: 'Data quality & déduplication', level: 80 },
      { name: 'Bases de données relationnelles', level: 80 },
    ],
  },
  {
    group: 'Développement',
    items: [
      { name: 'Python · Django · DRF', level: 80 },
      { name: 'React · JavaScript', level: 75 },
      { name: 'API REST · JWT', level: 80 },
      { name: 'PostgreSQL · Docker · Git', level: 75 },
    ],
  },
]

export const experience = [
  {
    period: '2025',
    title: 'Développeur Fullstack — Stage',
    company: 'Digital Car · 2 mois',
    points: [
      "Application d'optimisation de la gestion des procédures internes (PDF) d'une entreprise du secteur automobile",
      "Dashboard admin Django / Vue.js avec workflow d'approbation (approuvé / rejeté / en attente)",
      'Authentification JWT, mots de passe temporaires, envoi d’emails OVH',
      'Déploiement VPS OVH : PostgreSQL, Nginx, Gunicorn',
    ],
  },
  {
    period: '2025 — 2026',
    title: 'Projets Data Analytics — Power BI',
    company: 'Projets personnels',
    points: [
      '4 dashboards complets : e-commerce, RH, supply chain, prêts bancaires',
      'Modèles en étoile et en constellation, ~470 mesures DAX au total',
      "Nettoyage et contrôle qualité : détection de 250 000 doublons, règles documentées",
      'Version Excel complète du dashboard supply chain (Power Query, Power Pivot)',
    ],
  },
  {
    period: '2024 — 2025',
    title: 'Application Multi-tenant — Réseau de franchises',
    company: 'Projet personnel · Django / React',
    points: [
      "Gestion hiérarchique d'entités et d'utilisateurs avec droits cloisonnés par rôle",
      'API REST, authentification JWT, tests Pytest',
      'Déploiement Docker / Nginx',
    ],
  },
]

export const education = [
  {
    period: 'Fév. 2026 — Fév. 2027',
    title: 'Bachelor 3 — Développement d’applications & Full Stack',
    school: 'École IPSSI, Paris',
  },
  {
    period: '2023 — 2025',
    title: 'BTS SIO — Option SLAM',
    school: 'Lycée Turgot, Paris',
  },
  {
    period: '2021 — 2023',
    title: 'Licence Informatique',
    school: "Côte d'Ivoire",
  },
]

export const certifications = [
  { name: 'AWS Cloud Foundations', issuer: 'AWS', year: '2023' },
  { name: 'Python Essentials 1 & 2', issuer: 'Cisco', year: '2023' },
  { name: 'Cybersecurity Fundamentals', issuer: 'Cisco', year: '2023' },
]

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Intermédiaire' },
]
