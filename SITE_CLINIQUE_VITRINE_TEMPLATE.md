# 📋 Spécification & Template de Création : Site Web Vitrine pour Clinique Médicale / Dentaire

Ce document contient l'intégralité du **cahier des charges, de la structure technique, du modèle de données et des composants UI** pour reproduire le site web public (site vitrine + prise de rendez-vous) pour une autre clinique ou cabinet médical/dentaire.

> ⚠️ **Note** : Ce guide concerne **uniquement le site web vitrine public** (présentation, services, informations pratiques, prise de RDV en ligne). Le système d'administration et de gestion interne (Dashboard, dossier patient, paiements) est exclu.

---

## 📐 1. Vue d'Ensemble & Objectifs du Site

### Objectifs principaux :
1. **Véhiculer une image moderne, chaleureuse et professionnelle** du cabinet dentaire/médical.
2. **Présenter clairement les spécialités, les soins et l'équipe médicale**.
3. **Faciliter la prise de rendez-vous en ligne** grâce à un formulaire intuitif en 3 étapes.
4. **Fournir les informations pratiques d'accès** (adresse, géolocalisation Google Maps, téléphone, horaires d'ouverture).
5. **Convertir les visiteurs en patients** grâce à des boutons d'action (CTA) stratégiquement placés.

---

## 🛠️ 2. Stack Technique Recommandée

- **Framework Frontend** : React 18+ (avec Vite) ou Next.js (App Router).
- **Langage** : TypeScript (`.tsx`).
- **Routage** : React Router v6 (`react-router-dom`).
- **Icônes** : `lucide-react` (ex: `Phone`, `MapPin`, `Clock`, `Calendar`, `Sparkles`, `CheckCircle`, etc.).
- **Styling** : CSS Tailwind ou CSS Modules / Vanilla CSS avec variables CSS globales.
- **Animations** : Transitions fluides, hover effects, Glassmorphism moderne.

---

## 📁 3. Arborescence du Projet (Frontend Uniquement)

```text
src/
├── assets/                  # Images, logos, icônes du cabinet
│   ├── logo.svg
│   ├── hero-bg.jpg
│   ├── clinic-ortho.jpg
│   └── doctor-portrait.jpg
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # En-tête avec navigation & CTA rapide
│   │   ├── Footer.tsx       # Pied de page avec liens & contacts
│   │   └── PublicLayout.tsx # Layout enveloppant les pages publiques
│   ├── home/
│   │   ├── Hero.tsx         # Bannière principale d'accueil
│   │   ├── QuickInfoStrip.tsx # Bandeau d'infos clés (Téléphone, Adresse, Horaires, Urgences)
│   │   ├── ServicesSection.tsx # Grille des traitements & spécialités
│   │   ├── OrthodonticFocus.tsx # Section mise en avant d'une spécialité phare
│   │   ├── PatientExperience.tsx # Parcours patient en 4 étapes
│   │   ├── InstagramMoment.tsx   # Présentation réseaux sociaux / équipe
│   │   ├── LocationSection.tsx   # Carte, accès et horaires complets
│   │   └── FinalCta.tsx          # Appel à l'action final avant le footer
│   └── common/
│       ├── ScrollToTop.tsx  # Défilement automatique vers le haut à chaque changement de page
│       └── UIComponents.tsx # Boutons, badges, modales réutilisables
├── data/
│   └── clinicData.ts        # 🔴 FICHIER CENTRAL DE CONFIGURATION DE LA CLINIQUE
├── pages/
│   ├── HomePage.tsx         # Page d'accueil
│   ├── ServicesPage.tsx     # Page détaillée des actes & traitements
│   ├── AboutPage.tsx        # Page "À propos du cabinet & équipe"
│   ├── ContactPage.tsx      # Page de contact & accès
│   └── AppointmentPage.tsx  # Page du formulaire de prise de rendez-vous
├── types/
│   └── index.ts             # Types TypeScript pour les données du cabinet
├── App.tsx                  # Configuration des routes publiques
└── index.css                # Style global & variables de couleurs
```

---

## 📄 4. Détaillé des Pages & Sections

### 🏠 Page 1 : Accueil (`/`)
- **Header / Navbar** : Logo du cabinet, menu de navigation (`Accueil`, `Services`, `À propos`, `Contact`), bouton CTA "Prendre Rendez-vous".
- **Hero Banner** : Titre percutant, sous-titre rassurant, 2 boutons d'action (*Prendre RDV* / *Découvrir nos soins*), badges de confiance (ex: *Équipements modernes*, *Prise en charge douce*).
- **Quick Info Strip** : Bandeau horizontal avec accès direct :
  - 📞 Appeler la clinique
  - 📍 Adresse rapide
  - ⏰ Horaires d'ouverture
  - 🚨 Urgences dentaires / médicales
- **Section Spécialités** : Grille présentant les principaux actes (Orthodontie, Soins conservateurs, Esthétique, Prothèses, etc.).
- **Focus Spécialité Phare** : Bloc visuel détaillant le savoir-faire principal de la clinique (ex: Orthodontie adulte & enfant).
- **Parcours Patient** : 4 étapes illustrées (1. Prise de contact ➔ 2. Bilan ➔ 3. Plan de soins ➔ 4. Suivi).
- **Localisation & Horaires** : Intégration Google Maps, adresse complète, numéros de téléphone et tableau des horaires.
- **CTA Final** : Bannière invitant à réserver une consultation.

---

### 🏥 Page 2 : Nos Services & Traitements (`/services`)
- **En-tête de page** : Titre et présentation globale de l'approche médicale.
- **Filtres par catégories** (Optionnel) : *Tous*, *Spécialités*, *Soins Généraux*, *Esthétique*, *Chirurgie*.
- **Fiches Traitements détaillées** pour chaque acte :
  - Titre de l'acte et catégorie.
  - Description courte et description médicale complète.
  - Liste des bénéfices clés pour le patient.
  - Durée approximative du traitement.
  - Recommandé pour qui / quelles indications.
  - Bouton "Prendre RDV pour ce soin".

---

### 👨‍⚕️ Page 3 : À Propos du Cabinet (`/about`)
- **Présentation du Praticien & de l'Équipe** : Photo professionnelle, biographie, philosophie de soin, diplômes et certifications.
- **Valeurs du Cabinet** : Asepsie stricte, écoute attentive, équipements de pointe, confort du patient.
- **Galerie Photos du Cabinet** : Réception, salle d'attente, fauteuils de soins, bloc opératoire / stérilisation.

---

### 📞 Page 4 : Contact & Accès (`/contact`)
- **Formulaire de Contact rapide** (Nom, E-mail, Téléphone, Message).
- **Bloc Informations Pratiques** :
  - Adresse et repères visuels (stationnement, transports à proximité).
  - Numéros de téléphone directs.
  - Compte Instagram / Réseaux sociaux.
  - Horaires détaillés jour par jour.
- **Carte Google Maps interactive**.

---

### 📅 Page 5 : Prise de Rendez-vous en Ligne (`/appointment`)
Formulaire interactif intuitif sans création de compte obligatoire :
1. **Étape 1 : Choix du Motif / Service** (Sélection parmi la liste des actes).
2. **Étape 2 : Date & Créneau Souhaité** (Sélection du jour et de la période : *Matin* / *Après-midi*).
3. **Étape 3 : Informations Patient** (Nom, Prénom, Téléphone, E-mail, Statut *Nouveau patient / Déjà patient*, Remarques ou urgence).
4. **Confirmation** : Écran de récapitulatif avec envoi d'un e-mail/SMS automatique ou génération d'un message WhatsApp vers la clinique.

---

## ⚙️ 5. Fichier de Configuration Unique : `clinicData.ts`

Pour adapter ce site à n'importe quelle nouvelle clinique, il suffit de modifier ce seul fichier de données TypeScript !

```typescript
// src/types/index.ts
export interface ScheduleDay {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface ClinicInfo {
  name: string;
  subtitle: string;
  doctor: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
    landmark: string;
  };
  phones: string[];
  phonesFormatted: string[];
  email: string;
  instagram: {
    handle: string;
    url: string;
  };
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  schedule: ScheduleDay[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  benefits: string[];
  image: string;
  durationApprox: string;
  recommendedFor: string;
}

// src/data/clinicData.ts
import type { ClinicInfo, ServiceItem } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Nom de la Nouvelle Clinique',
  subtitle: 'Cabinet de Chirurgie Dentaire et d\'Implantologie',
  doctor: 'Dr. Prénom Nom',
  address: {
    street: '123 Avenue de la Santé',
    city: 'Nom de la Ville',
    postalCode: '75000',
    country: 'France / Algérie / Maroc...',
    fullFormatted: '123 Avenue de la Santé, 75000 Nom de la Ville',
    landmark: 'Station de métro / Parking gratuit disponible devant le cabinet',
  },
  phones: ['+33123456789', '+33612345678'],
  phonesFormatted: ['01 23 45 67 89', '06 12 34 56 78'],
  email: 'contact@clinique-exemple.com',
  instagram: {
    handle: '@clinique_exemple',
    url: 'https://www.instagram.com/clinique_exemple/',
  },
  googleMapsUrl: 'https://maps.google.com/?q=...',
  coordinates: {
    lat: 48.8566,
    lng: 2.3522,
  },
  schedule: [
    { day: 'Lundi', hours: '09h00 – 19h00', isOpen: true },
    { day: 'Mardi', hours: '09h00 – 19h00', isOpen: true },
    { day: 'Mercredi', hours: '09h00 – 19h00', isOpen: true },
    { day: 'Jeudi', hours: '09h00 – 19h00', isOpen: true },
    { day: 'Vendredi', hours: '09h00 – 18h00', isOpen: true },
    { day: 'Samedi', hours: '09h00 – 14h00', isOpen: true },
    { day: 'Dimanche', hours: 'Fermé', isOpen: false },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'soins-dentaires',
    title: 'Soins Conservateurs & Diagnostic',
    shortDesc: 'Traitements des caries, détartrage et bilans bucco-dentaires complets.',
    fullDesc: 'Une prise en charge douce et préventive pour maintenir une dentition en parfaite santé.',
    category: 'Soins Généraux',
    benefits: [
      'Diagnostic radiologique de précision',
      'Obturations esthétiques en composite',
      'Détartrage et polissage doux',
    ],
    image: '/images/services/soins.jpg',
    durationApprox: '30 à 45 minutes',
    recommendedFor: 'Contrôle annuel, prévention, douleurs légères.',
  },
  {
    id: 'orthodontie',
    title: 'Orthodontie Enfant & Adulte',
    shortDesc: 'Alignement dentaire par bagues ou aligneurs invisibles (gouttières).',
    fullDesc: 'Correction des malpositions dentaires pour retrouver un sourire esthétique et fonctionnel.',
    category: 'Spécialité',
    benefits: [
      'Solutions invisibles et confortables',
      'Amélioration de la mastication',
      'Accompagnement personnalisé à tout âge',
    ],
    image: '/images/services/ortho.jpg',
    durationApprox: 'Traitement sur 6 à 24 mois',
    recommendedFor: 'Chevauchements, espaces dentaires, décalages des mâchoires.',
  },
  {
    id: 'implantologie',
    title: 'Implants & Prothèses Dentaires',
    shortDesc: 'Remplacement durable des dents manquantes avec des matériaux biocompatibles.',
    fullDesc: 'Pose d\'implants en titane et couronnes céramiques sur-mesure pour un rendu naturel.',
    category: 'Chirurgie',
    benefits: [
      'Résultat naturel et durable',
      'Rétablissement de la mastication',
      'Couronnes et bridges sur-mesure',
    ],
    image: '/images/services/implants.jpg',
    durationApprox: 'Plusieurs rendez-vous étalés',
    recommendedFor: 'Dents absentes ou non conservables.',
  }
];

export const PATIENT_STEPS = [
  {
    number: '01',
    title: 'Prise de Rendez-vous',
    description: 'Réservez votre consultation sur notre site en 1 minute ou par téléphone.',
  },
  {
    number: '02',
    title: 'Bilan & Examen Clinique',
    description: 'Bilan bucco-dentaire complet avec radiographie et écoute de vos besoins.',
  },
  {
    number: '03',
    title: 'Plan de Soins Personnalisé',
    description: 'Explication détaillée du traitement proposé, de sa durée et du devis.',
  },
  {
    number: '04',
    title: 'Suivi & Prévention',
    description: 'Accompagnement régulier et conseils d\'hygiène pour pérenniser vos résultats.',
  },
];
```

---

## 🎨 6. Charte Graphique & Style CSS (`index.css`)

Palette de couleurs recommandées pour une clinique médicale / dentaire haut de gamme :

```css
:root {
  /* Couleurs Principales */
  --primary-color: #0f766e;      /* Teal Médical / Émeraude Élégant */
  --primary-hover: #0d9488;
  --secondary-color: #0284c7;    /* Bleu Ciel Professionnel */
  --accent-color: #d97706;       /* Doré Chaleureux pour badges/boutons d'attention */
  
  /* Arrière-plans & Neutres */
  --bg-light: #f8fafc;           /* Fond très clair et propre */
  --bg-card: #ffffff;            /* Blanc pur pour les cartes */
  --text-main: #0f172a;          /* Texte foncé lisible */
  --text-muted: #475569;         /* Texte secondaire */
  --border-light: #e2e8f0;       /* Bordures discrètes */

  /* Effets & Glassmorphism */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --radius-card: 16px;
  --radius-btn: 10px;
}
```

---

## 🚀 7. Prompt Prêt à l'Emploi pour une IA / Développeur

Si vous souhaitez faire générer ce site par une IA (Cursor, Antigravity, ChatGPT, Claude) pour une autre clinique, il vous suffit de copier-coller le prompt suivant :

```text
PROMPT DE CRÉATION DE SITE WEB VITRINE POUR CLINIQUE :

Crée un site web vitrine moderne, responsive et élégant en React (Vite + TypeScript + TailwindCSS) pour le cabinet médical suivant :

Nouveau Cabinet : [Nom de la Clinique / du Médecin]
Spécialité : [ex: Chirurgie Dentaire / Ophtalmologie / Pédiatrie]
Ville : [Nom de la ville, Pays]
Téléphone : [Numéro de téléphone]
E-mail : [Adresse e-mail]
Horaires : [ex: Lundi au Samedi 09h00 - 18h00]

EXIGENCES TECHNIQUES :
1. Développe uniquement le site web public vitrine (EXCLURE tout dashboard d'administration ou gestion interne).
2. Utilise une architecture propre avec un fichier central `src/data/clinicData.ts` contenant toutes les informations modifiables de la clinique.
3. Structure les pages suivantes :
   - Accueil (Hero banner avec CTA, Bandeau d'infos rapides, Grille de soins, Focus spécialité, Étapes parcours patient, Carte & Horaires).
   - Nos Services (Présentation détaillée de chaque soin avec bénéfices et durées).
   - À propos (Présentation du praticien, valeurs, équipements).
   - Contact (Formulaire de contact, adresse, téléphone, Google Maps).
   - Prise de Rendez-vous (Formulaire en 3 étapes : 1. Acte / 2. Date & Créneau / 3. Infos patient).
4. Intègre la librairie `lucide-react` pour des icônes médicales élégantes.
5. Soigne particulièrement le design UX/UI (palette émeraude/bleu médical, glassmorphism, animations au survol, cartes bien espacées, responsive mobile parfait).
```

---

## 📝 8. Étapes d'Adaptation & Déploiement

1. **Copier la structure du projet** React / Vite.
2. **Modifier les données** dans `src/data/clinicData.ts` avec le nom, l'adresse, les téléphones et les services de la nouvelle clinique.
3. **Remplacer les images** dans le dossier `public/images/` (Logo, photo du cabinet, photo du médecin).
4. **Remplacer le lien Google Maps** dans `clinicData.ts`.
5. **Tester le formulaire de RDV** et configurer la destination des messages (WhatsApp, service d'e-mail type EmailJS/Formspree, ou API Webhook).
6. **Déployer le site** en 1 clic sur Vercel, Netlify ou Cloudflare Pages (`npm run build`).

---
*Ce document sert de spécification complète et autonome pour le développement du site vitrine.*
