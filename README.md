# Portail des Agents IA - EVARISTE

Ce projet est une landing page moderne et interactive conçue pour centraliser et présenter le catalogue des **agents d'intelligence artificielle** de l'entreprise **EVARISTE**, développés à l'aide de **Microsoft Copilot Studio**.

Le portail offre une interface utilisateur haut de gamme avec un design sombre (*dark mode*), des effets de flou de texture (*glassmorphism*), des micro-animations fluides, et permet aux collaborateurs d'explorer, de tester et d'accéder aux détails de chaque agent IA disponible.

---

## 🚀 Fonctionnalités clés

1. **Catalogue Interactif des Agents** : Présentation sous forme de cartes élégantes avec icônes adaptées, catégories de couleur, étiquettes de statut (Actif, Bêta, Bientôt disponible) et tags descriptifs.
2. **Recherche et Filtrage en Temps Réel** : Une barre de recherche dynamique par mot-clé (nom, description, tags, catégorie) combinée à des filtres par catégorie d'agent pour trouver instantanément l'assistant souhaité.
3. **Compteurs Statistiques Animés** : Animation dynamique au chargement comptabilisant le nombre d'agents total, le nombre de catégories et le nombre d'agents actifs.
4. **Intégration d'iframe Chat / Modal** :
   - Un bouton **"Essayer"** ouvre instantanément une boîte de dialogue modale contenant le chatbot actif intégré via iframe.
   - Un bouton **"Détails"** redirige vers une page dédiée présentant l'agent en grand écran avec des guides d'utilisation.
5. **Ressources SharePoint de l'entreprise** : Raccourcis visuels vers les portails et sites SharePoint internes d'EVARISTE.
6. **Vidéos de Démo** : Galerie de démonstrations vidéo pour voir les agents en action (ouverture dans une modale vidéo).
7. **Fil d'actualité IA** : Section dédiée affichant les dernières actualités IA (intégrable avec une liste SharePoint).

---

## 🛠️ Architecture du projet

Le projet est structuré de façon modulaire et utilise uniquement des technologies web standards (sans framework complexe ni dépendance lourde) afin de garantir des performances optimales et une maintenance simplifiée.

*   [index.html](index.html) : Page d'accueil principale et catalogue du portail.
*   **[css/](css/)** : Styles CSS modulaires.
    *   [css/variables.css](css/variables.css) : Design system tokens (couleurs, thèmes, espacements, typographies).
    *   [css/base.css](css/base.css) : Styles globaux de réinitialisation et configuration de base des éléments HTML.
    *   [css/animations.css](css/animations.css) : Déclarations des animations d'entrée au défilement et transitions.
    *   [css/components.css](css/components.css) : Styles des composants autonomes (cartes, boutons, modales, recherche, filtres, pied de page).
    *   [css/layout.css](css/layout.css) : Structure générale de mise en page (grilles, sections, conteneurs réutilisables).
*   **[js/](js/)** : Logique JavaScript dynamique (Vanilla JS, ES6+).
    *   [js/agents-data.js](js/agents-data.js) : Base de données centrale de l'application (configuration des agents, liens SharePoint, vidéos).
    *   [js/components.js](js/components.js) : Générateurs de composants HTML dynamiques et bibliothèque d'icônes SVG intégrées.
    *   [js/app.js](js/app.js) : Initialisation globale du site, logique de recherche, filtres de catégories, compteurs animés et événements.
*   **[pages/](pages/)** : Pages additionnelles de l'application.
    *   [pages/agent-detail.html](pages/agent-detail.html) : Fiche de présentation détaillée de l'agent avec chat en grand écran intégré via iframe.

---

## ⚙️ Personnalisation & Configuration

Toutes les données du portail sont configurées dans un unique fichier central : `js/agents-data.js`. Pour modifier le contenu, il n'est pas nécessaire de toucher au code HTML ou CSS.

### 1. Ajouter ou modifier un agent IA

Ajoutez simplement un objet dans le tableau `AGENTS_DATA` de `js/agents-data.js` :
```javascript
{
  id: "mon-nouvel-agent",                 // Identifiant unique
  name: "Mon Nouvel Agent",               // Nom de l'agent
  category: "Nom Catégorie",              // Catégorie (sert aussi pour le filtrage)
  color: "blue",                          // Couleur dominante (blue, green, orange)
  icon: "brain",                          // Icône SVG définie dans components.js
  shortDesc: "Courte description...",     // Affichée sur la carte du catalogue
  longDesc: "Description détaillée...",   // Affichée sur la page de détail
  embedUrl: "https://copilot-studio...",  // URL d'intégration iframe Microsoft Copilot Studio
  demoVideoUrl: "",                       // Optionnel : lien vers une vidéo démo
  status: "active",                       // Statut : 'active', 'beta' ou 'coming-soon'
  tags: ["Tag1", "Tag2"]                  // Tags pour le moteur de recherche
}
```

### 2. Ajouter un lien SharePoint

Ajoutez un objet dans le tableau `SHAREPOINT_LINKS` de `js/agents-data.js` :
```javascript
{
  id: "direction-rh",
  name: "Direction RH",
  description: "Direction des Ressources Humaines",
  url: "https://evariste.sharepoint.com/...",
  icon: "users"
}
```

### 3. Modifier la configuration générale du site

Ajustez l'objet `SITE_CONFIG` pour modifier les textes ou intégrer un flux d'actualités externe :
```javascript
const SITE_CONFIG = {
  companyName: "EVARISTE",
  pageTitle: "Agents IA — Copilot Studio",
  heroTitle: "Vos Agents IA",
  heroSubtitle: "Découvrez et accédez...",
  newsIframeUrl: "https://...",           // Ajoutez l'URL de votre liste SharePoint d'actualités
  newsPlaceholderText: "..."
};
```

---

## 💻 Comment exécuter le projet

Puisqu'il s'agit d'un site web statique utilisant du Vanilla HTML/CSS/JS, aucun build ou compilation n'est nécessaire.

### Option 1 : Ouverture Locale Directe
Vous pouvez ouvrir directement le fichier `index.html` dans n'importe quel navigateur web moderne (Chrome, Edge, Firefox, Safari).

### Option 2 : Serveur de Développement Local (Recommandé)
Pour éviter de potentielles restrictions de sécurité du navigateur (notamment pour l'affichage des iframes ou les cookies de session Copilot Studio), il est préférable d'exécuter un petit serveur web local :
*   **VS Code** : Utilisez l'extension **Live Server**.
*   **Node.js** : Exécutez `npx http-server` à la racine du projet.
*   **Python 3** : Exécutez `python -m http.server 8000` à la racine du projet.

---

## 🎨 Spécifications Design & Graphiques

Le portail implémente une charte graphique premium respectant les standards de l'expérience utilisateur moderne :
*   **Palette de couleurs** : Tons sombres profonds (`#0c1426` à `#162040`) contrastant avec des nuances d'accents de couleur pastel (Bleu, Vert et Orange) possédant des reflets luminescents (*glow*).
*   **Typographie** : Combinaison de **Outfit** (pour les titres élégants et géométriques) et de **Inter** (pour le corps de texte clair et lisible), toutes deux chargées depuis Google Fonts.
*   **Micro-interactions** : Effets de survol dynamiques avec transitions fluides sur les boutons et cartes (effet d'échelle et translation), gestion automatique des animations au défilement grâce à l'API performante `IntersectionObserver`.
