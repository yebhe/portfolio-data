# -*- coding: utf-8 -*-
"""Lettre de motivation — Grand Lyon, Stage Ingénieur des Données."""
import os
from fpdf import FPDF

OUT = os.environ.get('LM_OUT', 'LM_Grand_Lyon_Data.pdf')

pdf = FPDF('P', 'mm', 'A4')
pdf.set_auto_page_break(True, 20)
pdf.add_page()
pdf.set_margins(20, 18, 20)

pdf.add_font('a', '', r'C:\Windows\Fonts\arial.ttf')
pdf.add_font('a', 'B', r'C:\Windows\Fonts\arialbd.ttf')
pdf.add_font('a', 'I', r'C:\Windows\Fonts\ariali.ttf')

NAVY = (30, 44, 68)
ACCENT = (15, 123, 132)
GREY = (95, 105, 118)
W = 210 - 40

# --- En-tête ---
pdf.set_font('a', 'B', 20)
pdf.set_text_color(*NAVY)
pdf.cell(W, 9, 'Mamadou Lamarana Diallo', new_x='LMARGIN', new_y='NEXT')
pdf.set_font('a', '', 10)
pdf.set_text_color(*ACCENT)
pdf.cell(W, 5, 'Data Analyst — Power BI · SQL · Excel · Python', new_x='LMARGIN', new_y='NEXT')
pdf.ln(1)
pdf.set_font('a', '', 8.5)
pdf.set_text_color(*GREY)
pdf.cell(W, 4, 'Lyon — mobile France entière  ·  1lamarana.mamadou@gmail.com  ·  +33 7 45 52 33 12', new_x='LMARGIN', new_y='NEXT')
pdf.cell(W, 4, 'linkedin.com/in/yebhe  ·  github.com/yebhe  ·  yebhe.github.io/portfolio-data', new_x='LMARGIN', new_y='NEXT')

pdf.ln(4)
pdf.set_draw_color(*ACCENT)
pdf.set_line_width(0.7)
pdf.line(20, pdf.get_y(), 190, pdf.get_y())
pdf.ln(6)

# --- Destinataire / date ---
pdf.set_font('a', '', 9.5)
pdf.set_text_color(40, 40, 40)
pdf.cell(W, 5, "Métropole de Lyon — Direction de l'innovation numérique", new_x='LMARGIN', new_y='NEXT')
pdf.cell(W, 5, 'Service données métropolitaines', new_x='LMARGIN', new_y='NEXT')
pdf.ln(3)
pdf.cell(W, 5, 'Lyon, le 27 octobre 2026', align='R', new_x='LMARGIN', new_y='NEXT')
pdf.ln(4)

# --- Objet ---
pdf.set_fill_color(*NAVY)
pdf.set_text_color(255, 255, 255)
pdf.set_font('a', 'B', 10)
pdf.multi_cell(W, 7, "  Objet : Candidature au stage d'Ingénieur des Données (H/F)", fill=True)
pdf.ln(5)

# --- Corps ---
pdf.set_font('a', '', 10)
pdf.set_text_color(45, 45, 45)

body = (
    "Madame, Monsieur,\n\n"
    "Actuellement en Bachelor 3 à l'IPSSI Lyon, je recherche un stage ou un stage "
    "alterné à partir de janvier 2027. Votre mission au sein du service données "
    "métropolitaines — construire des workflows de données et des tableaux de bord "
    "au service des directions métiers — correspond exactement à ma double "
    "compétence : data analyst et développeur.\n\n"
    "Côté data, j'ai conçu quatre tableaux de bord Power BI documentés de bout "
    "en bout : modèles en étoile et en constellation, environ 430 mesures DAX, "
    "comparaisons N-1 et contrôles de qualité — dont la détection documentée de "
    "250 000 doublons sur un portefeuille de prêts. Modéliser des données "
    "propres, fiables et traçables est ma méthode de travail.\n\n"
    "Côté développement, je pratique Python (Django, API REST), SQL, PostgreSQL "
    "et Docker : j'ai notamment livré un SaaS de gestion multi-tenant et une "
    "plateforme interne déployée en production pour une entreprise automobile "
    "(digitalcartech.fr). Collecter, nettoyer et automatiser des flux de données "
    "sont des tâches qui me sont familières.\n\n"
    "Formé sur Power BI, je suis prêt à monter rapidement en compétence sur "
    "DigDash : les concepts de reporting et de visualisation décisionnelle se "
    "transposent directement. L'accompagnement des utilisateurs est aussi un "
    "point qui me tient à cœur — chacun de mes projets est documenté pour être "
    "compris et maintenu par d'autres.\n\n"
    "L'ensemble de mes réalisations est public : yebhe.github.io/portfolio-data "
    "et github.com/yebhe. Je me tiens à votre disposition pour un entretien.\n\n"
    "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations "
    "distinguées."
)
pdf.multi_cell(W, 5.4, body)
pdf.ln(6)

pdf.set_font('a', 'B', 11)
pdf.set_text_color(*NAVY)
pdf.set_x(110)
pdf.multi_cell(80, 5, "Mamadou Lamarana Diallo", align='R')

pdf.output(OUT)
print('OK ->', OUT)
