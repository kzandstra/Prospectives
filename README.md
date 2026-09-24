# Portail des Agents IA - EVARISTE

Ce projet est une landing page moderne et interactive conçue pour centraliser et présenter le catalogue des **agents d'intelligence artificielle** de l'entreprise **EVARISTE**, développés à l'aide de **Microsoft Copilot Studio** et **Microsoft 365 Copilot**.

Le portail offre une interface utilisateur haut de gamme avec un design sombre (*dark mode*), des effets de flou de texture (*glassmorphism*), des micro-animations fluides, et permet aux collaborateurs d'explorer, de lancer et d'accéder aux détails de chaque agent IA disponible.

---

## 🚀 Fonctionnalités clés

1. **Catalogue Interactif des Agents** : Présentation sous forme de cartes élégantes avec icônes adaptées, catégories de couleur, étiquettes de statut (Actif, Bêta, Bientôt disponible) et tags descriptifs.
2. **Recherche et Filtrage en Temps Réel** : Une barre de recherche dynamique par mot-clé (nom, description, tags, catégorie) combinée à des filtres par catégorie d'agent (`Juridique`, `QSE`, `Ressources Humaines`, `Travaux`, `Études`, `Monitoring`).
3. **Cartes de Lancement Microsoft 365 & Copilot Studio** :
   - Détection automatique du type de lien pour éviter les blocages de sécurité navigateurs (`X-Frame-Options`).
   - **Agents Microsoft 365 & SharePoint** : Génération d'une carte de lancement dynamique interactive (*"Lancer dans Microsoft 365"* / *"Ouvrir sur SharePoint"*).
   - **Canaux Web Copilot Studio** : Affichage d'une fenêtre modale tchat intégrée via `<iframe>`.
4. **Compteurs Statistiques Animés** : Animation dynamique au chargement comptabilisant le nombre d'agents total, le nombre de catégories et le nombre d'agents actifs.
5. **Ressources SharePoint de l'entreprise** : Raccourcis visuels vers les portails et sites SharePoint internes d'EVARISTE.
6. **Vidéos de Démo** : Galerie de démonstrations vidéo pour voir les agents en action (ouverture dans une modale vidéo).
7. **Fil d'actualité IA** : Section dédiée affichant les dernières actualités IA (intégrable avec une liste SharePoint).

---

## 📂 Organisation du Catalogue des Agents

| Catégorie | Couleur | Agents inclus | Description & Focus |
| :--- | :--- | :--- | :--- |
| **Juridique** | Bleu | Assistant Juridique, TP_JuriTravaux, Agent juridique | Réglementation, marchés publics, droit du travail et réclamations. |
| **QSE** | Vert | Assistant QSE, TP_CompagnonQSE | Procédures qualité, sécurité, environnement et contrôles terrain. |
| **Ressources Humaines** | Orange | Assistant RH | Congés, paie, formations et conventions collectives. |
| **Travaux** | Bleu | Assistant Travaux | Suivi de chantier, planification et gestion des opérations. |
| **Études** | Bleu | Chatbot FNTP, AnalyseDCE | Documentation FNTP et analyse automatique des dossiers de consultation (DCE). |
| **Monitoring** | Orange | AO_Radar, PulseIA, ClinovIA, TP_Monitor | Surveillance des appels d'offres, veille technologique, actualités et KPI projet. |

---

## 🛠️ Architecture du projet

Le projet est structuré de façon modulaire et utilise uniquement des technologies web standards (Vanilla HTML, CSS, JavaScript ES6+) afin de garantir des performances optimales et une maintenance simplifiée.

*   [index.html](index.html) : Page d'accueil principale et catalogue du portail.
*   **[css/](css/)** : Styles CSS modulaires.
    *   [css/variables.css](css/variables.css) : Design system tokens (couleurs, thèmes, espacements, typographies).
    *   [css/base.css](css/base.css) : Styles globaux de réinitialisation et configuration de base.
    *   [css/animations.css](css/animations.css) : Animations d'entrée au défilement et transitions micro-interactives.
    *   [css/components.css](css/components.css) : Styles des cartes, boutons, cartes de lancement M365, modales et recherche.
    *   [css/layout.css](css/layout.css) : Structure générale de mise en page (grilles, sections, conteneurs).
*   **[js/](js/)** : Logique JavaScript dynamique.
    *   [js/agents-data.js](js/agents-data.js) : Base de données centrale (configuration des 13 agents, liens SharePoint et vidéos).
    *   [js/components.js](js/components.js) : Générateurs de cartes, modales interactives et bibliothèque d'icônes SVG.
    *   [js/app.js](js/app.js) : Initialisation globale, moteur de recherche, filtres et événements.
*   **[pages/](pages/)** :
    *   [pages/agent-detail.html](pages/agent-detail.html) : Fiche de présentation détaillée de chaque agent.

---

## ⚙️ Personnalisation & Configuration

Toutes les données du portail sont configurées dans un unique fichier central : `js/agents-data.js`.

### 1. Ajouter ou modifier un agent IA

Ajoutez simplement un objet dans le tableau `AGENTS_DATA` de `js/agents-data.js` :
```javascript
{
  id: "mon-nouvel-agent",                 // Identifiant unique
  name: "Mon Nouvel Agent",               // Nom de l'agent
  category: "Études",                     // Catégorie (Juridique, QSE, RH, Travaux, Études, Monitoring)
  color: "blue",                          // Couleur (blue, green, orange)
  icon: "brain",                          // Icône SVG (scales, shield, hardhat, users, sparkles, chart, radar, etc.)
  shortDesc: "Courte description...",     // Affichée sur la carte du catalogue
  longDesc: "Description détaillée...",   // Affichée sur la page de détail
  embedUrl: "https://m365.cloud.microsoft/chat/?titleId=...",  // URL M365 Copilot Chat, SharePoint ou Copilot Studio iframe
  demoVideoUrl: "",                       // Optionnel : lien vers une vidéo démo
  status: "active",                       // Statut : 'active', 'beta' ou 'coming-soon'
  tags: ["Études", "Analyse"]             // Tags pour le moteur de recherche
}
```

---

## 💻 Exécution Locale & Déploiement

### Option 1 : Serveur Web Local (Recommandé)
Pour exécuter le projet en local sur le port 8080 :
```bash
python -m http.server 8080
```
Accédez ensuite à [http://localhost:8080](http://localhost:8080).

### Option 2 : GitHub Repository
Le dépôt officiel du projet est hébergé sur GitHub :
👉 [https://github.com/kzandstra/Prospectives](https://github.com/kzandstra/Prospectives)

---

## 🎨 Spécifications Design

* **Palette de couleurs** : Sombre profond (`#0c1426` à `#162040`) avec accents luminescents pastel (Bleu, Vert, Orange).
* **Typographie** : **Outfit** (titres géométriques) et **Inter** (corps de texte) via Google Fonts.
* **Animations** : Transitions fluides, effets de survol réactifs et détections d'entrée `IntersectionObserver`.
