# Génère le CV PDF orienté Data — relancer : python generate_cv.py
import os
from fpdf import FPDF

ICONS = {
    'pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'mail': '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'linkedin': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    'github': '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>',
}
SVG_WRAP = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" '
    'stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
    '{}</svg>'
)
os.makedirs('assets_cv', exist_ok=True)
for name, body in ICONS.items():
    for suffix, color in (('', '#0F76A0'), ('_w', '#a8c8dc')):
        with open(f'assets_cv/{name}{suffix}.svg', 'w') as f:
            f.write(SVG_WRAP.format(body, color=color))

W, H = 210, 297
SIDEBAR_X, SIDEBAR_W = 138, 72
MAIN_X, MAIN_W = 10, 120
ACCENT = (15, 118, 160)      # bleu cyan sobre, lisible à l'impression
DARK = (22, 34, 56)          # sidebar navy
WHITE = (255, 255, 255)
GREY = (90, 100, 115)

pdf = FPDF('P', 'mm', 'A4')
pdf.set_auto_page_break(False)
pdf.add_font('a', '', r'C:\Windows\Fonts\arial.ttf')
pdf.add_font('a', 'B', r'C:\Windows\Fonts\arialbd.ttf')
pdf.add_font('a', 'I', r'C:\Windows\Fonts\ariali.ttf')
pdf.add_page()

# ---------- Sidebar (fond navy, pleine hauteur) ----------
pdf.set_fill_color(*DARK)
pdf.rect(SIDEBAR_X, 0, SIDEBAR_W, H, 'F')

def side_title(y, txt):
    pdf.set_xy(SIDEBAR_X + 8, y)
    pdf.set_font('a', 'B', 10)
    pdf.set_text_color(120, 200, 230)
    pdf.cell(SIDEBAR_W - 16, 6, txt.upper(), new_x='END')
    pdf.set_draw_color(120, 200, 230)
    pdf.line(SIDEBAR_X + 8, y + 7, SIDEBAR_X + 26, y + 7)
    return y + 11

def side_text(y, txt, bold=False, size=8.5):
    pdf.set_xy(SIDEBAR_X + 8, y)
    pdf.set_font('a', 'B' if bold else '', size)
    pdf.set_text_color(*WHITE)
    pdf.multi_cell(SIDEBAR_W - 16, 4.2, txt)
    return pdf.get_y() + 1.5

def side_bullet(y, txt):
    x = SIDEBAR_X + 8
    pdf.set_xy(x, y)
    pdf.set_font('a', '', 8.5)
    pdf.set_text_color(200, 210, 220)
    pdf.cell(3, 4.2, '•')
    pdf.set_xy(x + 3.5, y)
    pdf.multi_cell(SIDEBAR_W - 19.5, 4.2, txt, align='L')
    return pdf.get_y() + 0.8

def side_contact(y, icon, text, url=None):
    x = SIDEBAR_X + 8
    pdf.image(f'assets_cv/{icon}_w.svg', x=x, y=y + 0.1, w=3.3)
    pdf.set_xy(x + 4.8, y)
    pdf.set_font('a', '', 8.2)
    pdf.set_text_color(200, 210, 220)
    content = f'[{text}]({url})' if url else text
    pdf.multi_cell(SIDEBAR_W - 20.8, 4, content, align='L', markdown=True)
    return pdf.get_y() + 1.6

sy = 14
sy = side_title(sy, 'Contact')
for icon, text, url in [
    ('pin', 'Lyon — mobile France', None),
    ('mail', '1lamarana.mamadou@gmail.com', 'mailto:1lamarana.mamadou@gmail.com'),
    ('phone', '+33 7 45 52 33 12', 'tel:+33745523312'),
    ('linkedin', 'linkedin.com/in/yebhe', 'https://www.linkedin.com/in/yebhe'),
    ('github', 'github.com/yebhe', 'https://github.com/yebhe'),
    ('globe', 'yebhe.github.io/portfolio-data', 'https://yebhe.github.io/portfolio-data'),
]:
    sy = side_contact(sy, icon, text, url)
sy += 4

sy = side_title(sy, 'Compétences Data')
sy = side_text(sy, 'Power BI', bold=True)
sy = side_bullet(sy, 'Dashboards, KPI, DAX avancé, drill-through')
sy = side_bullet(sy, 'Modélisation étoile / constellation')
sy = side_text(sy, 'SQL', bold=True)
sy = side_bullet(sy, 'Jointures, CTE, sous-requêtes, agrégations')
sy = side_text(sy, 'Excel', bold=True)
sy = side_bullet(sy, 'Power Query, Power Pivot, TCD, indicateurs')
sy = side_text(sy, 'Qualité des données', bold=True)
sy = side_bullet(sy, 'Déduplication, règles de contrôle documentées')
sy += 4

sy = side_title(sy, 'Développement')
for t in [
    'Python · Django · DRF',
    'React · JavaScript',
    'API REST · JWT',
    'PostgreSQL · Docker · Git',
    'Déploiement : Nginx, Gunicorn, VPS OVH',
]:
    sy = side_bullet(sy, t)
sy += 4

sy = side_title(sy, 'Certifications')
for t in [
    'AWS Academy Cloud Foundations (2024)',
    'Python Essentials 1 & 2 — Cisco (2024)',
    'Introduction to Cybersecurity — Cisco (2024)',
]:
    sy = side_bullet(sy, t)
sy += 4

sy = side_title(sy, 'Langues')
sy = side_bullet(sy, 'Français — langue maternelle')
sy = side_bullet(sy, 'Anglais — intermédiaire')
sy += 4

sy = side_title(sy, 'Centres d’intérêt')
for t in ['Dataviz & storytelling', 'Veille BI / IA', 'Sport']:
    sy = side_bullet(sy, t)

# ---------- Colonne principale ----------
def head(txt, y):
    pdf.set_xy(MAIN_X, y)
    pdf.set_font('a', 'B', 11.5)
    pdf.set_text_color(*ACCENT)
    pdf.cell(MAIN_W, 6, txt.upper(), new_x='END')
    pdf.set_draw_color(*ACCENT)
    pdf.line(MAIN_X, y + 7, MAIN_X + MAIN_W, y + 7)
    return y + 10

def para(y, txt, size=9, color=GREY, style=''):
    pdf.set_xy(MAIN_X, y)
    pdf.set_font('a', style, size)
    pdf.set_text_color(*color)
    pdf.multi_cell(MAIN_W, 4.4, txt)
    return pdf.get_y()

def bullet(y, txt, indent=3):
    x = MAIN_X + indent
    pdf.set_xy(x, y)
    pdf.set_font('a', '', 8.8)
    pdf.set_text_color(60, 68, 80)
    pdf.cell(3, 4.2, '•')
    pdf.set_xy(x + 3.5, y)
    pdf.multi_cell(MAIN_W - indent - 3.5, 4.2, txt)
    return pdf.get_y()

def entry(y, period, title, org, bullets, org_link=None):
    pdf.set_xy(MAIN_X, y)
    pdf.set_font('a', 'I', 8)
    pdf.set_text_color(*ACCENT)
    pdf.cell(MAIN_W, 4.5, period, new_x='END')
    y += 5
    pdf.set_xy(MAIN_X, y)
    pdf.set_font('a', 'B', 10)
    pdf.set_text_color(30, 38, 50)
    pdf.cell(MAIN_W, 5, title, new_x='END')
    y += 5
    pdf.set_xy(MAIN_X, y)
    pdf.set_font('a', 'I', 8.8)
    pdf.set_text_color(*GREY)
    pdf.cell(MAIN_W, 4.5, org, new_x='END', link=org_link or '')
    y += 5.5
    for b in bullets:
        y = bullet(y, b) + 0.6
    return y + 3.5

# En-tête
pdf.set_xy(MAIN_X, 12)
pdf.set_font('a', 'B', 21)
pdf.set_text_color(20, 30, 45)
pdf.cell(MAIN_W, 8, 'MAMADOU LAMARANA DIALLO', new_x='END')
pdf.set_xy(MAIN_X, 22)
pdf.set_font('a', 'B', 11)
pdf.set_text_color(*ACCENT)
pdf.cell(MAIN_W, 5.5, 'Data Analyst  |  Power BI · SQL · Excel · Python', new_x='END')
y = 33

# Profil
y = head('Profil', y)
y = para(y,
    "Data Analyst, en Bachelor 3 à l'IPSSI Lyon — en recherche d'alternance ou de "
    "stage alterné au même rythme (3 semaines entreprise / 1 semaine école) à partir "
    "d'octobre 2026, mobile sur toute la France. "
    "Double compétence data + développement : je conçois des modèles "
    "en étoile et en constellation, j'écris des mesures DAX avancées (470+ mesures sur "
    "4 dashboards complets) et je développe les applications autour (Django, React, "
    "PostgreSQL, Docker).") + 4

# Projets data
y = head('Projets Data — Power BI', y)
y = entry(y, '2025 — 2026',
    'Dashboards décisionnels end-to-end',
    '4 projets complets — github.com/yebhe',
    [
        "Supply Chain : pilotage ventes, production, stock, achats, livraisons — modèle "
        "en constellation, ~150 mesures DAX, drill-through + version Excel (Power Query, Power Pivot)",
        "Prêts bancaires : constellation 3 faits / 7 dimensions, 123 mesures DAX, "
        "comparaison N-1, détection de 250 000 doublons, contrôles qualité documentés",
        "E-commerce : modèle en étoile, 98 mesures DAX, analyse rétention / churn, "
        "produits, pays et moyens de paiement",
        "Ressources Humaines : effectifs, attrition, recrutement, rémunération — "
        "DAX avancé et contrôles qualité intégrés",
    ], org_link='https://github.com/yebhe?tab=repositories')

# Expérience
y = head('Expérience', y)
y = entry(y, '2025 — Stage 2 mois',
    'Développeur Fullstack',
    'Digital Car — digitalcartech.fr',
    [
        "Application de gestion des procédures internes : dashboard admin Django / "
        "Vue.js avec workflow d'approbation (approuvé / rejeté / en attente)",
        "Authentification JWT, mots de passe temporaires, envoi d'emails OVH",
        "Déploiement VPS OVH : PostgreSQL, Nginx, Gunicorn",
    ], org_link='https://digitalcartech.fr/')
y = entry(y, '2025 — 2026',
    'Gestion Commerciale — SaaS multi-tenant',
    'Projet personnel · github.com/yebhe/gestion_commerciale',
    [
        "SaaS de gestion de magasins : point de vente (POS), stock, clients, "
        "fournisseurs et rapports",
        "PWA offline-first : IndexedDB + file de synchronisation",
        "API REST Django, front React, conteneurisation Docker",
    ], org_link='https://github.com/yebhe/gestion_commerciale')

# Formation
y = head('Formation', y)
for period, title, school in [
    ('Oct. 2026 — Oct. 2027', 'Bachelor 3 — Data, IA & Développement', 'École IPSSI, Lyon — rythme : 3 sem. entreprise / 1 sem. école'),
    ('2023 — 2025', 'BTS SIO — option SLAM', 'Lycée Turgot, Paris'),
    ('2021 — 2023', 'Licence Informatique', "Côte d'Ivoire"),
]:
    pdf.set_xy(MAIN_X, y)
    pdf.set_font('a', 'I', 8)
    pdf.set_text_color(*ACCENT)
    pdf.cell(33, 4.5, period)
    pdf.set_font('a', 'B', 9.2)
    pdf.set_text_color(30, 38, 50)
    pdf.cell(MAIN_W - 33, 4.5, title, new_x='END')
    y += 4.5
    pdf.set_xy(MAIN_X + 33, y)
    pdf.set_font('a', '', 8.5)
    pdf.set_text_color(*GREY)
    pdf.cell(MAIN_W - 33, 4, school, new_x='END')
    y += 7.5

pdf.output(os.environ.get('CV_OUT', 'CV_Mamadou_Lamarana_Diallo_Data.pdf'))
print('OK ->', pdf.page_no(), 'page(s) | bas colonne principale :', round(y, 1), 'mm / 297 | bas sidebar :', round(sy, 1))
