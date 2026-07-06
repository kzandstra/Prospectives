/* ========================================
   AGENTS DATA — Configuration centralisée
   ========================================
   Pour ajouter un agent : ajoutez un objet dans AGENTS_DATA.
   Pour ajouter un lien SharePoint : ajoutez un objet dans SHAREPOINT_LINKS.
   Pour ajouter une démo vidéo : ajoutez un objet dans DEMO_VIDEOS.
   ======================================== */

const AGENTS_DATA = [
  {
    id: "assistant-juridique",
    name: "Assistant Juridique",
    category: "Juridique",
    color: "blue",
    icon: "scales",
    shortDesc: "Consultez la réglementation et obtenez des réponses juridiques adaptées au secteur des travaux publics.",
    longDesc: "L'Assistant Juridique vous accompagne dans vos recherches réglementaires et juridiques. Il peut répondre à vos questions sur le droit du travail, les marchés publics, la responsabilité civile et pénale, et bien plus encore. Basé sur une base de connaissances actualisée, il fournit des réponses précises et sourcées.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Réglementation", "Droit", "Marchés publics"]
  },
  {
    id: "assistant-qse",
    name: "Assistant QSE",
    category: "QSE",
    color: "green",
    icon: "shield",
    shortDesc: "Accédez aux procédures qualité, sécurité et environnement, et gérez vos conformités.",
    longDesc: "L'Assistant QSE centralise l'accès à toutes les procédures et documentations qualité, sécurité et environnement. Il vous guide dans la mise en conformité, le suivi des audits et la gestion des non-conformités.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Qualité", "Sécurité", "Environnement"]
  },
  {
    id: "chatbot-fntp",
    name: "Chatbot FNTP",
    category: "Communication",
    color: "blue",
    icon: "megaphone",
    shortDesc: "Informations et actualités de la Fédération Nationale des Travaux Publics.",
    longDesc: "Le Chatbot FNTP vous donne accès aux dernières actualités, publications et ressources de la Fédération Nationale des Travaux Publics. Restez informé des évolutions du secteur, des événements à venir et des positions de la fédération.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Actualités", "FNTP", "Secteur TP"]
  },
  {
    id: "assistant-travaux",
    name: "Assistant Travaux",
    category: "Travaux",
    color: "blue",
    icon: "hardhat",
    shortDesc: "Suivi de chantier, planification et gestion des opérations terrain.",
    longDesc: "L'Assistant Travaux est votre compagnon pour la gestion quotidienne des chantiers. Il vous aide à planifier les interventions, suivre l'avancement des travaux, gérer les ressources et résoudre les problèmes opérationnels.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Chantier", "Planification", "Suivi"]
  },
  {
    id: "assistant-rh",
    name: "Assistant RH",
    category: "Ressources Humaines",
    color: "orange",
    icon: "users",
    shortDesc: "Congés, paie, formation : toutes vos questions RH en un clic.",
    longDesc: "L'Assistant RH répond à toutes vos questions relatives aux ressources humaines : gestion des congés et absences, informations sur la paie, catalogue de formations, procédures d'embauche, conventions collectives et bien plus.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Congés", "Paie", "Formation"]
  },
  {
    id: "pulseia",
    name: "PulseIA",
    category: "Innovation",
    color: "green",
    icon: "sparkles",
    shortDesc: "Veille technologique et tendances IA pour anticiper les évolutions du secteur.",
    longDesc: "PulseIA est votre radar d'innovation. Il surveille les dernières avancées en intelligence artificielle et technologies émergentes pertinentes pour le secteur des travaux publics, et vous propose des synthèses et recommandations.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Veille", "Tendances", "Technologies"]
  },
  {
    id: "tp-monitor",
    name: "TP_Monitor",
    category: "Monitoring",
    color: "orange",
    icon: "chart",
    shortDesc: "Surveillance en temps réel des indicateurs clés de vos projets.",
    longDesc: "TP_Monitor vous offre une vue d'ensemble en temps réel de vos indicateurs de performance projet. Tableaux de bord, alertes automatiques et analyses de tendances pour une prise de décision éclairée.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "beta",
    tags: ["KPI", "Tableaux de bord", "Alertes"]
  },
  {
    id: "clinovia",
    name: "ClinovIA",
    category: "Innovation",
    color: "green",
    icon: "brain",
    shortDesc: "Analyse prédictive et optimisation des processus métier par l'IA.",
    longDesc: "ClinovIA exploite l'intelligence artificielle pour analyser vos données métier, identifier des patterns et proposer des optimisations. Prédictions, recommandations et automatisations au service de votre efficacité.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "beta",
    tags: ["Prédictif", "Optimisation", "Data"]
  },
  {
    id: "ao-radar",
    name: "AO_Radar",
    category: "Monitoring",
    color: "orange",
    icon: "radar",
    shortDesc: "Détection et analyse automatique des appels d'offres pertinents.",
    longDesc: "AO_Radar scanne en continu les plateformes d'appels d'offres pour détecter les opportunités correspondant à vos critères. Analyse automatique, scoring de pertinence et alertes en temps réel.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Appels d'offres", "Veille", "Scoring"]
  },
  {
    id: "tp-juritravaux",
    name: "TP_JuriTravaux",
    category: "Juridique",
    color: "blue",
    icon: "gavel",
    shortDesc: "Assistant juridique spécialisé droit des marchés publics et travaux.",
    longDesc: "TP_JuriTravaux est spécialisé dans le droit des marchés publics de travaux. Il vous assiste dans la rédaction de mémoires, l'analyse de CCAP/CCTP, la gestion des réclamations et la compréhension des clauses contractuelles.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Marchés publics", "Contrats", "Réclamations"]
  },
  {
    id: "agent-juridique",
    name: "Agent juridique",
    category: "Juridique",
    color: "blue",
    icon: "document",
    shortDesc: "Recherche documentaire juridique et aide à la rédaction de documents légaux.",
    longDesc: "L'Agent juridique vous accompagne dans la recherche documentaire juridique et la rédaction de documents légaux. Il peut analyser des textes de loi, préparer des synthèses et vous aider à rédiger des courriers et notes juridiques.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Documentation", "Rédaction", "Analyse"]
  },
  {
    id: "tp-compagnonqse",
    name: "TP_CompagnonQSE",
    category: "QSE",
    color: "green",
    icon: "clipboard",
    shortDesc: "Compagnon terrain pour les contrôles QSE et le reporting en mobilité.",
    longDesc: "TP_CompagnonQSE est conçu pour une utilisation terrain. Il vous accompagne lors des visites de chantier pour les contrôles qualité, sécurité et environnement, avec un reporting simplifié et des check-lists interactives.",
    embedUrl: "",
    demoVideoUrl: "",
    status: "active",
    tags: ["Terrain", "Contrôles", "Check-lists"]
  }
];

/* ---- Liens vers les sites SharePoint ---- */
const SHAREPOINT_LINKS = [
  {
    id: "direction-rh",
    name: "Direction RH",
    description: "Direction des Ressources Humaines",
    url: "#",
    icon: "users"
  },
  {
    id: "outils-prospectives",
    name: "Outils Prospectives",
    description: "Outils de prospection et développement commercial",
    url: "#",
    icon: "compass"
  },
  {
    id: "agents-ia",
    name: "Agents IA",
    description: "Plateforme des agents IA et documentation",
    url: "#",
    icon: "bot"
  },
  {
    id: "etudes-methodes",
    name: "Études & Méthodes",
    description: "Bureau d'études et méthodes de construction",
    url: "#",
    icon: "blueprint"
  },
  {
    id: "gt-ia",
    name: "GT IA",
    description: "Groupe de travail Intelligence Artificielle",
    url: "#",
    icon: "brain"
  },
  {
    id: "communication",
    name: "Site de communication",
    description: "Communication interne et externe de l'entreprise",
    url: "#",
    icon: "megaphone"
  }
];

/* ---- Démonstrations vidéo ---- */
const DEMO_VIDEOS = [
  {
    id: "demo-assistant-rh",
    title: "Démonstration Assistant RH",
    agentName: "Assistant RH",
    thumbnailColor: "orange",
    videoUrl: "",
    duration: "3:45"
  },
  {
    id: "demo-ao-radar",
    title: "Démonstration AO_Radar",
    agentName: "AO_Radar",
    thumbnailColor: "orange",
    videoUrl: "",
    duration: "5:12"
  },
  {
    id: "demo-assistant-qse",
    title: "Démonstration Assistant QSE",
    agentName: "Assistant QSE",
    thumbnailColor: "green",
    videoUrl: "",
    duration: "4:30"
  }
];

/* ---- Configuration générale ---- */
const SITE_CONFIG = {
  companyName: "EVARISTE",
  pageTitle: "Agents IA — Copilot Studio",
  heroTitle: "Vos Agents IA",
  heroSubtitle: "Découvrez et accédez aux assistants intelligents développés avec Microsoft Copilot Studio pour simplifier votre quotidien.",
  newsIframeUrl: "",
  newsPlaceholderText: "L'intégration de la liste SharePoint des nouvelles IA sera affichée ici. Configurez l'URL dans le fichier agents-data.js."
};

/* ---- Mapping catégories → couleurs ---- */
const CATEGORY_COLORS = {
  "Juridique": "blue",
  "QSE": "green",
  "Ressources Humaines": "orange",
  "Travaux": "blue",
  "Innovation": "green",
  "Monitoring": "orange",
  "Communication": "blue"
};
