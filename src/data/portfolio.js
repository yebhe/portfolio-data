export const profile = {
  name: 'Mamadou Lamarana Diallo',
  role: 'Data Analyst',
  tagline: 'Power BI · SQL · Excel · Python',
  availability: 'Alternance ou stage alterné — Data Analyst',
  bio: "En Bachelor 3 à l'IPSSI Lyon, je recherche une alternance ou un stage alterné (3 semaines entreprise / 1 semaine école) à partir d'octobre 2026, mobile sur toute la France. Je conçois des modèles en étoile et en constellation, j'écris des mesures DAX avancées et je transforme des données brutes en tableaux de bord décisionnels.",
  email: '1lamarana.mamadou@gmail.com',
  phone: '+33 7 45 52 33 12',
  location: 'Lyon, France — mobile France entière',
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
    title: 'Digital Car — Plateforme interne',
    subtitle: 'Django · Vue.js · Projet client en production',
    description:
      "Site développé pour Digital Car (secteur automobile) afin d'optimiser la gestion de leurs procédures internes — déployé et utilisé en production.",
    highlights: [
      "Dashboard admin avec workflow d'approbation (approuvé / rejeté / en attente)",
      'Authentification JWT, mots de passe temporaires, emails OVH',
      'Déploiement VPS OVH : PostgreSQL, Nginx, Gunicorn',
    ],
    tags: ['Django', 'Vue.js', 'PostgreSQL', 'Nginx', 'JWT'],
    link: 'https://digitalcartech.fr/',
    badge: 'En production',
    featured: true,
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
]

export const skills = [
  {
    group: 'Data & BI',
    items: [
      'Power BI — DAX, Power Query, dashboards',
      'SQL — jointures, CTE, agrégations',
      'Excel — Power Pivot, tableaux de bord',
      'Python — bases de programmation',
    ],
  },
  {
    group: 'Modélisation & Analyse',
    items: [
      'Schémas en étoile / constellation',
      'KPI, segmentation, analyse N-1',
      'Data quality & déduplication',
      'Bases de données relationnelles',
    ],
  },
  {
    group: 'Développement',
    items: [
      'Python · Django · DRF',
      'React · JavaScript',
      'API REST · JWT',
      'PostgreSQL · Docker · Git',
    ],
  },
]

export const experience = [
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
    period: '2025',
    title: 'Développeur Fullstack — Stage',
    company: 'Digital Car · 2 mois · digitalcartech.fr',
    points: [
      "Application d'optimisation de la gestion des procédures internes (PDF) d'une entreprise du secteur automobile",
      "Dashboard admin Django / Vue.js avec workflow d'approbation (approuvé / rejeté / en attente)",
      'Authentification JWT, mots de passe temporaires, envoi d’emails OVH',
      'Déploiement VPS OVH : PostgreSQL, Nginx, Gunicorn — site en production',
    ],
  },
  {
    period: '2025 — 2026',
    title: 'Gestion Commerciale — SaaS multi-tenant',
    company: 'Projet personnel · Django REST / React',
    points: [
      'SaaS de gestion de magasins : point de vente (POS), stock, clients, fournisseurs et rapports',
      'PWA offline-first : IndexedDB + file de synchronisation',
      'API REST Django, front React, conteneurisation Docker',
    ],
  },
]

export const education = [
  {
    period: 'Oct. 2026 — Oct. 2027',
    title: 'Bachelor 3 — Développement d’applications & Full Stack',
    school: 'École IPSSI, Lyon — rythme : 3 sem. entreprise / 1 sem. école',
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
  { name: 'AWS Academy Cloud Foundations', issuer: 'AWS', year: '2024' },
  { name: 'Python Essentials 1 & 2', issuer: 'Cisco', year: '2024' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', year: '2024' },
]

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Intermédiaire' },
]
