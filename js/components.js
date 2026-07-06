/* ========================================
   COMPONENTS.JS — HTML generators & icons
   ======================================== */

/* ---- SVG Icons (24×24, stroke-based) ---- */
const ICONS = {
  scales: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="m5 7 3-3 3 3"/><path d="m13 7 3-3 3 3"/><path d="M5 7c0 3.5 3 5.5 3 5.5"/><path d="M19 7c0 3.5-3 5.5-3 5.5"/><circle cx="5" cy="17" r="2"/><circle cx="19" cy="17" r="2"/></svg>`,

  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,

  megaphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,

  hardhat: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 15V6.5a3.5 3.5 0 0 1 7 0V15"/><path d="M7 15v-3a7 7 0 0 1 7-7"/></svg>`,

  users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,

  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,

  chart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,

  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,

  radar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/></svg>`,

  gavel: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6 6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>`,

  document: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,

  clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`,

  compass: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,

  bot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,

  blueprint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M2 11h20"/><path d="M7 11v4"/><path d="M12 7v4"/></svg>`,

  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,

  play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,

  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,

  arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,

  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,

  news: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>`,

  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,

  copilot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`
};

/* ---- Get icon by name ---- */
function getIcon(name) {
  return ICONS[name] || ICONS.bot;
}

/* ---- Status label ---- */
function getStatusLabel(status) {
  const labels = {
    active: "Actif",
    beta: "Bêta",
    "coming-soon": "Bientôt"
  };
  return labels[status] || status;
}

/* ---- Create Agent Card HTML ---- */
function createAgentCard(agent) {
  const statusDotClass = agent.status === "active" ? "active" : agent.status === "beta" ? "beta" : "coming";

  return `
    <div class="agent-card fade-in" data-color="${agent.color}" data-category="${agent.category}" data-id="${agent.id}">
      <div class="agent-card__header">
        <div class="agent-card__icon ${agent.color}">
          ${getIcon(agent.icon)}
        </div>
        <div class="agent-card__info">
          <h3 class="agent-card__title">${agent.name}</h3>
          <span class="agent-card__category ${agent.color}">${agent.category}</span>
        </div>
      </div>

      <div class="agent-card__status">
        <span class="agent-card__status-dot ${statusDotClass}"></span>
        ${getStatusLabel(agent.status)}
      </div>

      <p class="agent-card__description">${agent.shortDesc}</p>

      <div class="agent-card__tags">
        ${agent.tags.map(tag => `<span class="agent-card__tag">${tag}</span>`).join("")}
      </div>

      <div class="agent-card__actions">
        <button class="btn btn--primary btn--sm" onclick="openAgentModal('${agent.id}')" aria-label="Essayer ${agent.name}">
          ${getIcon("copilot")} Essayer
        </button>
        <a href="pages/agent-detail.html?agent=${agent.id}" class="btn btn--secondary btn--sm" aria-label="Détails de ${agent.name}">
          Détails ${getIcon("arrowRight")}
        </a>
      </div>
    </div>
  `;
}

/* ---- Create SharePoint Link Card HTML ---- */
function createSharePointCard(link) {
  return `
    <a href="${link.url}" class="sp-card fade-in" target="_blank" rel="noopener noreferrer" id="sp-${link.id}">
      <div class="sp-card__icon">
        ${getIcon(link.icon)}
      </div>
      <div class="sp-card__content">
        <div class="sp-card__title">${link.name}</div>
        <div class="sp-card__description">${link.description}</div>
      </div>
      <span class="sp-card__arrow">${getIcon("arrowRight")}</span>
    </a>
  `;
}

/* ---- Create Video Card HTML ---- */
function createVideoCard(video) {
  return `
    <div class="video-card fade-in" id="video-${video.id}">
      <div class="video-card__thumbnail" onclick="openVideoModal('${video.videoUrl}', '${video.title}')">
        <div class="video-card__thumbnail-bg ${video.thumbnailColor}">
          ${getIcon("copilot")}
        </div>
        <div class="video-card__play">
          <div class="video-card__play-icon">
            ${getIcon("play")}
          </div>
        </div>
        <span class="video-card__duration">${video.duration}</span>
      </div>
      <div class="video-card__info">
        <div class="video-card__title">${video.title}</div>
        <div class="video-card__agent">${video.agentName}</div>
      </div>
    </div>
  `;
}

/* ---- Create Filter Button HTML ---- */
function createFilterButton(category, isActive) {
  return `
    <button class="filter-btn ${isActive ? "active" : ""}" data-filter="${category}" aria-label="Filtrer par ${category}">
      ${category}
    </button>
  `;
}

/* ---- Create News Section Content ---- */
function createNewsContent() {
  if (SITE_CONFIG.newsIframeUrl) {
    return `<iframe class="news-iframe" src="${SITE_CONFIG.newsIframeUrl}" title="Nouvelles IA" loading="lazy"></iframe>`;
  }

  return `
    <div class="news-placeholder">
      <div class="news-placeholder__icon">
        ${getIcon("news")}
      </div>
      <div class="news-placeholder__title">Nouvelles IA</div>
      <p class="news-placeholder__text">${SITE_CONFIG.newsPlaceholderText}</p>
    </div>
  `;
}

/* ---- Create Modal HTML ---- */
function createAgentModal(agent) {
  const hasEmbed = agent && agent.embedUrl;
  const body = hasEmbed
    ? `<iframe src="${agent.embedUrl}" title="Chatbot ${agent.name}" loading="lazy"></iframe>`
    : `<div class="modal__placeholder">
        <div class="modal__placeholder-icon">🤖</div>
        <div class="modal__placeholder-text">L'URL d'intégration de ${agent ? agent.name : "l'agent"} n'est pas encore configurée.</div>
        <div class="modal__placeholder-hint">Ajoutez l'URL iframe dans le fichier agents-data.js</div>
      </div>`;

  return `
    <div class="modal">
      <div class="modal__header">
        <div class="modal__title">
          ${agent ? getIcon(agent.icon) : ""} ${agent ? agent.name : "Agent"}
        </div>
        <button class="modal__close" onclick="closeModal()" aria-label="Fermer">
          ${getIcon("close")}
        </button>
      </div>
      <div class="modal__body">
        ${body}
      </div>
    </div>
  `;
}
