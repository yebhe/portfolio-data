# Portfolio — Mamadou Lamarana Diallo

Portfolio Data Analyst (React + Vite), déployable sur GitHub Pages.

## Développement

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
```

## Déploiement sur GitHub Pages

1. Créer un dépôt sur GitHub (ex : `portfolio`), puis :

   ```bash
   git remote add origin https://github.com/yebhe/portfolio.git
   git push -u origin main
   ```

2. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.

3. Le workflow `.github/workflows/deploy.yml` build et déploie
   automatiquement à chaque push sur `main`.

   Le site sera accessible sur `https://yebhe.github.io/portfolio/`

> `vite.config.js` utilise `base: './'` : le site fonctionne quel que
> soit le nom du dépôt, y compris `yebhe.github.io` (site racine).

## Structure

```
src/
├── data/portfolio.js   # ← tout le contenu (projets, skills, XP…) est ici
├── components/         # Navbar, Hero, About, Skills, Projects,
│                       # Experience, Education, Contact, Reveal, BrandIcons
├── App.jsx
└── index.css           # design system (couleurs, cartes, timeline…)
public/cv.pdf           # CV téléchargeable depuis le hero
```

Pour modifier le contenu du site, éditer uniquement `src/data/portfolio.js`.
