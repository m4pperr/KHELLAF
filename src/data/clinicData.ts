import type {
  ClinicInfo,
  ServiceItem,
  PatientStep,
  Testimonial,
  FaqItem,
  BeforeAfterCase,
} from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Khellaf Orthodontics',
  subtitle: 'Cabinet Spécialisé en Orthodontie & Aligneurs Invisibles',
  doctor: 'Dr. Khellaf',
  doctorTitle: 'Chirurgien-Dentiste Spécialiste en Orthodontie & Orthopédie Dento-Faciale',
  doctorBio: `Spécialiste passionné par l'art du sourire et les technologies de pointe, le Dr. Khellaf met son expertise au service d'une orthodontie moderne, douce et résolument esthétique. Formé aux techniques internationales les plus exigeantes, dont le protocole novateur Pitts 21 et les systèmes d'aligneurs invisibles sur mesure, il privilégie une approche globale préservant l'harmonie naturelle du visage, l'amplitude du sourire et la santé de l'articulation temporo-mandibulaire.`,
  address: {
    street: 'Boulevard Principal, Centre Médical',
    neighborhood: 'Centre-Ville',
    city: 'Draria',
    wilaya: 'Alger',
    country: 'Algérie',
    fullFormatted: 'Boulevard Principal (Centre Médical), Draria, Alger, Algérie',
    landmark: 'Situé au cœur de Draria, proche des grands axes et des transports, parking facile d\'accès.',
  },
  phones: ['+213 555 12 34 56', '+213 23 45 67 89'],
  phonesFormatted: ['0555 12 34 56', '023 45 67 89'],
  email: 'contact@khellaf-ortho.com',
  socials: {
    facebook: 'https://facebook.com/khellaf.orthodontics',
    instagram: 'https://instagram.com/khellaf_orthodontics',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Draria+Alger+Algerie',
  coordinates: {
    lat: 36.7186,
    lng: 2.9998,
  },
  schedule: [
    { day: 'Samedi', hours: '09h00 – 17h00', isOpen: true },
    { day: 'Dimanche', hours: '09h00 – 17h00', isOpen: true },
    { day: 'Lundi', hours: '09h00 – 17h00', isOpen: true },
    { day: 'Mardi', hours: '09h00 – 17h00', isOpen: true },
    { day: 'Mercredi', hours: '09h00 – 17h00', isOpen: true },
    { day: 'Jeudi', hours: '09h00 – 14h00', isOpen: true },
    { day: 'Vendredi', hours: 'Fermé (Repos hebdomadaire)', isOpen: false },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'protocole-pitts21',
    title: 'Protocole Pitts 21 (Système Auto-Ligeant)',
    badge: 'Spécialité Phare',
    shortDesc: 'La révolution esthétique en orthodontie : forces légères, arc de sourire élargi et durée de traitement réduite.',
    fullDesc: 'Le protocole Pitts 21 est une avancée majeure de l\'orthodontie mondiale. Grâce à des boîtiers auto-ligeants à gorge carrée de précision et un positionnement vertical individualisé (SAP - Smile Arc Protection), il délivre un contrôle tridimensionnel précoce dès les premières semaines. Vos dents bougent plus vite, avec une friction minimale et des forces physiologiques très douces.',
    category: 'Spécialité',
    benefits: [
      'Sourire 12 dents plus large et plus lumineux',
      'Préservation de la courbure naturelle des lèvres (Smile Arc)',
      'Forces très douces réduisant considérablement la sensibilité',
      'Rendez-vous plus espacés (toutes les 8 à 10 semaines)',
      'Évite fréquemment les extractions dentaires'
    ],
    durationApprox: '12 à 20 mois selon la complexité',
    recommendedFor: 'Adolescents et adultes recherchant le summum de l\'efficacité et un sourire éblouissant.',
    iconName: 'Sparkles',
  },
  {
    id: 'aligneurs-invisibles',
    title: 'Aligneurs Invisibles (Gouttières)',
    badge: 'Discrétion Absolue',
    shortDesc: 'Gouttières thermoformées transparentes, amovibles et discrètes pour réaligner vos dents en toute discrétion.',
    fullDesc: 'Parfaitement adaptées au rythme de vie moderne, les gouttières transparentes sont fabriquées sur mesure après numérisation 3D de vos mâchoires. Vous pouvez les retirer facilement pour manger, vous brosser les dents ou lors d\'événements importants. Grâce à la simulation numérique 3D préalable, vous visualisez le résultat final avant même de commencer.',
    category: 'Aligneurs',
    benefits: [
      'Quasi-invisibles à distance de conversation',
      'Aucune restriction alimentaire (amovibles)',
      'Hygiène bucco-dentaire optimale facilitée',
      'Confort sans fils métalliques ni bagues abrasives',
      'Visualisation du résultat 3D avant de débuter'
    ],
    durationApprox: '6 à 18 mois',
    recommendedFor: 'Adultes et adolescents actifs exigeant discrétion et liberté au quotidien.',
    iconName: 'Glasses',
  },
  {
    id: 'orthodontie-interceptive',
    title: 'Orthodontie Interceptive Enfant',
    badge: 'Dépistage dès 6-8 ans',
    shortDesc: 'Guidage précoce de la croissance des maxillaires pour anticiper et éviter les anomalies complexes.',
    fullDesc: 'L\'interception précoce chez l\'enfant permet de corriger les décalages squelettiques (mâchoire trop étroite, menton en retrait ou trop avancé) pendant la période de croissance active. Elle libère les voies aériennes, favorise une bonne respiration nasale et simplifie grandement tout traitement futur.',
    category: 'Interception',
    benefits: [
      'Élargissement doux du palais (disjonction précoce)',
      'Amélioration de la respiration nasale et de la posture',
      'Correction des habitudes néfastes (succion du pouce, déglutition atypique)',
      'Évite des chirurgies ou extractions plus tard',
      'Améliore la confiance de l\'enfant dès le plus jeune âge'
    ],
    durationApprox: '6 à 12 mois',
    recommendedFor: 'Enfants de 6 à 11 ans présentant des troubles d\'articulé ou de croissance.',
    iconName: 'Baby',
  },
  {
    id: 'orthodontie-adulte',
    title: 'Orthodontie Adulte & Pluridisciplinaire',
    badge: 'Sur Mesure',
    shortDesc: 'Alignement esthétique et réhabilitation occlusale fonctionnelle, sans limite d\'âge.',
    fullDesc: 'Il n\'y a pas d\'âge pour s\'offrir le sourire dont on a toujours rêvé. Que ce soit pour rectifier un chevauchement récidivant, réaligner des dents avant la pose de couronnes ou d\'implants, ou soulager des tensions articulaires, le Dr. Khellaf élabore un plan personnalisé respectant le parodonte adulte.',
    category: 'Esthétique',
    benefits: [
      'Solutions ultra-discrètes adaptées à la vie professionnelle',
      'Facilite le brossage et prévient les déchaussements',
      'Préparation idéale aux soins esthétiques et implantaires',
      'Soulagement des maux de tête liés à la mauvaise occlusion'
    ],
    durationApprox: '9 à 18 mois',
    recommendedFor: 'Adultes de 20 à 70 ans désireux d\'embellir leur sourire et protéger leurs dents.',
    iconName: 'UserCheck',
  },
  {
    id: 'contention-finition',
    title: 'Contention & Stabilisation Longue Durée',
    badge: 'Garantie Résultat',
    shortDesc: 'Dispositifs fixes et amovibles invisibles pour stabiliser le résultat et préserver votre sourire pour la vie.',
    fullDesc: 'La contention est une étape fondamentale de tout traitement orthodontique réussi. Nous appliquons des protocoles rigoureux combinant des fils de contention collés en titane ultra-fins à la face interne des dents et des gouttières de nuit personnalisées.',
    category: 'Esthétique',
    benefits: [
      'Sécurité anti-récidive sur le long terme',
      'Totalement invisible et insensible au quotidien',
      'Contrôles périodiques de vérification inclus'
    ],
    durationApprox: 'Suivi sur 1 à 2 ans post-traitement',
    recommendedFor: 'Tous les patients ayant achevé leur phase active d\'alignement.',
    iconName: 'ShieldCheck',
  },
];

export const PATIENT_STEPS: PatientStep[] = [
  {
    number: '01',
    title: 'Première Consultation & Écoute',
    description: 'Rencontre avec le Dr. Khellaf pour comprendre vos attentes, analyser l\'esthétique de votre visage et réaliser un premier examen clinique complet.',
    badge: 'Bilan Personnalisé',
  },
  {
    number: '02',
    title: 'Diagnostic 3D Numérique & Empreinte Optique',
    description: 'Photos haute résolution, radiographies numériques et scanner 3D intra-oral sans pâte désagréable. Création de votre jumeau numérique.',
    badge: 'Sans Pâte Désagréable',
  },
  {
    number: '03',
    title: 'Plan de Traitement & Choix de la Solution',
    description: 'Présentation de la simulation 3D de votre futur sourire. Discussion du dispositif idéal (Pitts 21 ou Aligneurs Invisibles) avec devis transparent.',
    badge: 'Simulation Avant Début',
  },
  {
    number: '04',
    title: 'Mise en Place, Suivi & Révélation',
    description: 'Pose minutieuse et sans douleur, rendez-vous de contrôle réguliers toutes les 6 à 10 semaines, puis retrait et pose de la contention protectrice.',
    badge: 'Sourire pour la Vie',
  },
];

export const PITTS_HIGHLIGHTS = [
  {
    title: 'Protection de l\'Arc du Sourire (SAP)',
    description: 'Contrairement aux techniques classiques qui aplatissent le sourire, le positionnement Pitts 21 suit la courbe naturelle de la lèvre inférieure pour un éclat jeune et dynamique.',
    icon: 'Smile',
  },
  {
    title: 'Sourire 12 Dents (Large & Lumineux)',
    description: 'Élargissement harmonieux des arcades qui comble les couloirs noirs latéraux des joues, illuminant immédiatement le visage.',
    icon: 'SunMedium',
  },
  {
    title: 'Forces Biologiques Légères',
    description: 'Bagues auto-ligeantes passives à friction ultra-basse permettant aux dents de glisser avec un confort remarquable sans douleur intense.',
    icon: 'Feather',
  },
  {
    title: 'Durée Optimisée & Moins de RDV',
    description: 'L\'engagement précoce des arcs rectangulaires accélère la correction des rotations et des inclinaisons, espaçant les visites au cabinet.',
    icon: 'Clock',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'cas-1',
    title: 'Encombrement Sévère & Sourire Étroit',
    patientAge: 'Adulte (26 ans)',
    treatment: 'Protocole Pitts 21 sans extraction',
    duration: '14 mois',
    description: 'Chevauchement incisif important et arcades étroites créant des couloirs sombres sur les côtés.',
    results: ['Arc de sourire élargi', 'Alignement millimétré', 'Aucune dent saine extraite'],
    badge: 'Pitts 21',
  },
  {
    id: 'cas-2',
    title: 'Béance Antérieure & Malocclusion',
    patientAge: 'Adolescente (15 ans)',
    treatment: 'Orthodontie Pitts 21 + Élastiques inter-maxillaires',
    duration: '16 mois',
    description: 'Impossibilité de couper avec les incisives en raison d\'un décalage vertical marqué.',
    results: ['Fermeture complète de la béance', 'Mastication équilibrée', 'Visage harmonisé'],
    badge: 'Occlusion Fonctionnelle',
  },
  {
    id: 'cas-3',
    title: 'Diastèmes & Rotation des Dents de Devant',
    patientAge: 'Adulte (32 ans)',
    treatment: 'Gouttières Aligneurs Invisibles',
    duration: '9 mois',
    description: 'Multiples espaces entre les dents et complexe esthétique lors des prises de parole professionnelles.',
    results: ['Fermeture totale des espaces', 'Traitement 100% discret', 'Port confortable au bureau'],
    badge: 'Aligneurs',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Amina K.',
    role: 'Patiente Adulte (Draria)',
    rating: 5,
    comment: 'Après avoir hésité pendant des années à cause de mon âge, j\'ai sauté le pas avec le Dr. Khellaf pour un traitement Pitts 21. Le résultat après 14 mois a dépassé toutes mes attentes ! Mes proches n\'en reviennent pas du changement.',
    tag: 'Protocole Pitts 21',
    date: 'Il y a 1 mois',
  },
  {
    name: 'Karim B.',
    role: 'Parent d\'adolescent (Cheraga)',
    rating: 5,
    comment: 'Un accueil chaleureux, des explications d\'une clarté exemplaire et un équipement à la pointe. Mon fils de 14 ans n\'a presque pas eu mal grâce aux bagues légères. On se sent en confiance dès la première minute.',
    tag: 'Orthodontie Ado',
    date: 'Il y a 2 mois',
  },
  {
    name: 'Yasmine L.',
    role: 'Patiente Gouttières (Baba Hassen)',
    rating: 5,
    comment: 'J\'ai opté pour les aligneurs invisibles pour mon travail de relation client. Personne ne s\'en est aperçu ! Le cabinet est d\'une propreté impeccable et le Dr. Khellaf est d\'une gentillesse rare.',
    tag: 'Aligneurs Invisibles',
    date: 'Il y a 3 semaines',
  },
  {
    name: 'Mehdi S.',
    role: 'Patient (Saoula)',
    rating: 5,
    comment: 'L\'équipe est aux petits soins et le suivi est remarquable. Très ponctuel sur les horaires de rendez-vous, ce qui est très appréciable. Je recommande les yeux fermés à tous ceux qui cherchent un vrai spécialiste.',
    tag: 'Suivi Personnalisé',
    date: 'Il y a 1 mois',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'À quel âge doit-on consulter un orthodontiste pour la première fois ?',
    answer: 'La première consultation de dépistage est recommandée dès l\'âge de 6 à 7 ans. Même si toutes les dents de lait ne sont pas tombées, cette visite permet de vérifier la croissance des mâchoires, la déglutition et la respiration, et d\'intercepter précocement les anomalies avant qu\'elles ne s\'aggravent.',
    category: 'Général',
  },
  {
    question: 'En quoi le protocole Pitts 21 est-il différent des bagues traditionnelles ?',
    answer: 'Le protocole Pitts 21 utilise des boîtiers auto-ligeants miniaturisés à très faible friction et un positionnement spécifique (Smile Arc Protection). Cela permet d\'élargir le sourire ("sourire 12 dents"), de préserver la convexité jeune des lèvres, d\'utiliser des forces beaucoup plus douces et de réduire la durée totale du traitement.',
    category: 'Pitts 21',
  },
  {
    question: 'Les aligneurs invisibles sont-ils aussi efficaces que les bagues ?',
    answer: 'Oui, aujourd\'hui les aligneurs de dernière génération corrigent la grande majorité des malpositions chez l\'adulte et l\'adolescent. L\'efficacité repose toutefois sur votre assiduité : ils doivent être portés 20 à 22 heures par jour, et retirés uniquement pour les repas et le brossage.',
    category: 'Aligneurs',
  },
  {
    question: 'Le traitement d\'orthodontie est-il douloureux ?',
    answer: 'La pose des appareils est entièrement indolore. Durant les 2 à 3 premiers jours suivant l\'activation, une sensibilité passagère à la mastication peut survenir. Avec les forces ultra-légères du système Pitts 21 et des aligneurs, cet inconfort est minime et disparaît très vite.',
    category: 'Confort',
  },
  {
    question: 'Comment se passe la prise de rendez-vous chez Khellaf Orthodontics ?',
    answer: 'Vous pouvez réserver directement en ligne sur ce site en choisissant votre motif et votre créneau souhaité, ou en contactant notre secrétariat au 0555 12 34 56. Notre équipe vous rappelle pour confirmer votre heure précise.',
    category: 'Pratique',
  },
  {
    question: 'Faut-il arracher des dents définitives pour aligner le sourire ?',
    answer: 'Grâce aux protocoles modernes comme le Pitts 21 et l\'expansion tridimensionnelle précoce, nous évitons les extractions dentaires de convenance dans l\'immense majorité des cas, privilégiant toujours la plénitude du sourire et le soutien du visage.',
    category: 'Traitements',
  },
];

export const CLINIC_STATS = [
  { label: 'Sourires Révélés', value: '+1 200' },
  { label: 'Satisfaction Patients', value: '99%' },
  { label: 'Technologie & Scanner 3D', value: '100%' },
  { label: 'Années d\'Excellence Dédiée', value: '10+' },
];
