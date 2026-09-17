# 🦷 Khellaf Orthodontics — Site Vitrine & Prise de Rendez-vous

Site web vitrine moderne, interactif et haut de gamme développé pour **Khellaf Orthodontics**, cabinet spécialisé en orthodontie et aligneurs invisibles situé à **Draria, Alger**.

![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Private-lightgrey)

---

## 📸 Aperçu & Fonctionnalités Clés

- **Bannière d'Accueil & Identité Médicale** : Présentation du cabinet, proposition de valeur et statistiques de confiance (*+1200 sourires transformés, Scanner 3D intra-oral, Approche sans extraction*).
- **Bandeau d'Accès Rapide** : Téléphone direct, localisation centrale à Draria, horaires d'ouverture et raccourci WhatsApp.
- **Section Protocole Pitts 21** : Focus dédié sur le protocole d'avant-garde mondial (Smile Arc Protection, sourire 12 dents élargi, forces douces) et tableau comparatif face aux bagues traditionnelles.
- **Grille des Soins & Traitements** : Filtres par catégorie (*Spécialité, Aligneurs, Interception Enfant, Orthodontie Adulte, Contention*), modale médicale détaillée et pré-sélection automatique du motif de consultation.
- **Parcours Patient en 4 Étapes** : Consultation & écoute ➔ Bilan & scanner 3D ➔ Plan de traitement personnalisé ➔ Pose & contention.
- **Cas Cliniques Documentés** : Présentation des résultats avant/après et explications des démarches thérapeutiques.
- **À Propos du Dr. Khellaf** : Biographie, certifications internationales et charte des 4 engagements cliniques (asepsie, écoute, non-invasif, technologie 3D).
- **Avis & Témoignages Vérifiés** : Retours d'expérience de patients de Draria, Cheraga, Baba Hassen et Alger.
- **Foire Aux Questions (FAQ)** : Accordéon interactif traitant de l'âge de consultation, des aligneurs, de la douleur, etc.
- **Localisation & Horaires** : Carte Google Maps intégrée, repères de stationnement et tableau des horaires adapté à l'Algérie (Samedi au Jeudi) avec détection du jour actuel.
- **Module de Prise de RDV en 3 Étapes** :
  1. Choix de l'acte médical
  2. Date souhaitée & créneau (Matinée / Après-midi)
  3. Coordonnées patient & confirmation instantanée avec message pré-rempli pour WhatsApp.
- **Bouton Flottant WhatsApp** : Prise de contact instantanée sur mobile et desktop.

---

## 🛠️ Stack Technique

- **Frontend** : [React 18](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Outillage** : [Vite 6](https://vitejs.dev/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Styling** : Design System Vanilla CSS sur-mesure (variables CSS, Glassmorphism, animations fluides, responsive mobile).

---

## 📂 Structure du Projet

```text
khellaf/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── AppointmentModal.tsx    # Formulaire de RDV en 3 étapes & WhatsApp
│   │   │   ├── DoctorAbout.tsx         # Présentation du praticien & valeurs
│   │   │   ├── FaqSection.tsx          # Accordéon FAQ interactif
│   │   │   ├── Hero.tsx                # Bannière principale & badges
│   │   │   ├── LocationSection.tsx     # Google Maps & horaires
│   │   │   ├── PatientExperience.tsx   # Parcours en 4 étapes
│   │   │   ├── PittsFocus.tsx          # Focus sur le protocole Pitts 21
│   │   │   ├── QuickInfoStrip.tsx      # Bandeau d'infos clés rapides
│   │   │   ├── ResultsShowcase.tsx     # Cas cliniques & transformations
│   │   │   ├── ServicesSection.tsx     # Grille des soins avec filtres & modale
│   │   │   └── TestimonialsSection.tsx # Avis patients vérifiés
│   │   └── layout/
│   │       ├── Footer.tsx              # Pied de page & liens
│   │       └── Navbar.tsx              # Navigation fixe, contact & responsive
│   ├── data/
│   │   └── clinicData.ts               # 🔴 FICHIER CENTRAL DE CONFIGURATION
│   ├── types/
│   │   └── index.ts                    # Interfaces TypeScript
│   ├── App.tsx                         # Assemblage de la page & modales
│   ├── index.css                       # Charte graphique & Design System
│   └── main.tsx                        # Point d'entrée de l'application
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Installation & Démarrage Local

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- `npm` ou `yarn`

### 1. Cloner le dépôt
```bash
git clone https://github.com/<VOTRE-COMPTE>/khellaf-orthodontics.git
cd khellaf-orthodontics
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez votre navigateur à l'adresse indiquée (par défaut : `http://localhost:5173/`).

### 4. Compiler pour la production
```bash
npm run build
```
Les fichiers statiques optimisés seront générés dans le dossier `dist/`.

---

## ⚙️ Personnalisation Facile

Toutes les données du cabinet (nom du praticien, adresses, numéros de téléphone, horaires, tarifs/soins, liens réseaux sociaux) sont centralisées dans :
👉 `src/data/clinicData.ts`

Pour mettre à jour une information, modifiez ce seul fichier sans avoir à toucher aux composants graphiques !

---

## 🌐 Déploiement

Le projet peut être déployé en 1 clic sur :
- **Vercel** : Importer le dépôt GitHub, commande de build : `npm run build`, dossier de sortie : `dist`.
- **Netlify** : Glisser-déposer le dossier `dist` ou connecter le dépôt GitHub.
- **Cloudflare Pages** : Framework preset `Vite`.

---

## 📄 Licence

Projet sous licence propriétaire — Réservé pour le cabinet Khellaf Orthodontics, Draria, Alger.
