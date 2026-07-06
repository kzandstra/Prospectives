/* ========================================
   APP.JS — Main application logic
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

/* ---- Bootstrap ---- */
function initApp() {
  renderAgents();
  renderSharePointLinks();
  renderVideos();
  renderNews();
  initFilters();
  initSearch();
  initNavigation();
  initScrollAnimations();
  initBackToTop();
  updateStats();
}

/* ===== RENDERING ===== */

function renderAgents() {
  const grid = document.getElementById("agents-grid");
  if (!grid) return;
  grid.innerHTML = AGENTS_DATA.map(createAgentCard).join("");
}

function renderSharePointLinks() {
  const grid = document.getElementById("sp-grid");
  if (!grid) return;
  grid.innerHTML = SHAREPOINT_LINKS.map(createSharePointCard).join("");
}

function renderVideos() {
  const grid = document.getElementById("videos-grid");
  if (!grid) return;

  if (DEMO_VIDEOS.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-state__icon">🎬</div>
        <div class="empty-state__text">Les démonstrations vidéo seront bientôt disponibles.</div>
      </div>`;
    return;
  }

  grid.innerHTML = DEMO_VIDEOS.map(createVideoCard).join("");
}

function renderNews() {
  const container = document.getElementById("news-content");
  if (!container) return;
  container.innerHTML = createNewsContent();
}

function updateStats() {
  const countEl = document.getElementById("stat-agents");
  const catEl = document.getElementById("stat-categories");
  const activeEl = document.getElementById("stat-active");

  if (countEl) animateCounter(countEl, AGENTS_DATA.length);

  const categories = [...new Set(AGENTS_DATA.map(a => a.category))];
  if (catEl) animateCounter(catEl, categories.length);

  const activeCount = AGENTS_DATA.filter(a => a.status === "active").length;
  if (activeEl) animateCounter(activeEl, activeCount);
}

function animateCounter(el, target) {
  let current = 0;
  const duration = 1500;
  const step = Math.max(1, Math.floor(target / (duration / 30)));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 30);
}

/* ===== FILTERS ===== */

let currentFilter = "Tous";

function initFilters() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;

  const categories = ["Tous", ...new Set(AGENTS_DATA.map(a => a.category))];
  bar.innerHTML = categories.map(cat =>
    createFilterButton(cat, cat === "Tous")
  ).join("");

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    currentFilter = btn.dataset.filter;

    // Update active state
    bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    applyFilters();
  });
}

function applyFilters() {
  const searchTerm = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  const cards = document.querySelectorAll(".agent-card");

  let visibleCount = 0;

  cards.forEach(card => {
    const category = card.dataset.category;
    const id = card.dataset.id;
    const agent = AGENTS_DATA.find(a => a.id === id);
    if (!agent) return;

    const matchesCategory = currentFilter === "Tous" || category === currentFilter;
    const matchesSearch = !searchTerm ||
      agent.name.toLowerCase().includes(searchTerm) ||
      agent.shortDesc.toLowerCase().includes(searchTerm) ||
      agent.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      agent.category.toLowerCase().includes(searchTerm);

    const visible = matchesCategory && matchesSearch;
    card.style.display = visible ? "" : "none";

    if (visible) {
      visibleCount++;
      // Re-trigger fade animation
      card.classList.remove("visible");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.classList.add("visible");
        });
      });
    }
  });

  // Show empty state
  const grid = document.getElementById("agents-grid");
  const existingEmpty = grid?.querySelector(".empty-state");
  if (existingEmpty) existingEmpty.remove();

  if (visibleCount === 0 && grid) {
    grid.insertAdjacentHTML("beforeend", `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-state__icon">🔍</div>
        <div class="empty-state__text">Aucun agent ne correspond à votre recherche.</div>
      </div>
    `);
  }
}

/* ===== SEARCH ===== */

function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;

  let debounceTimer;
  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyFilters, 200);
  });
}

/* ===== NAVIGATION ===== */

function initNavigation() {
  const nav = document.querySelector(".nav");
  const hamburger = document.querySelector(".nav__hamburger");
  const links = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__link");

  // Scroll effect
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
  }

  // Hamburger toggle
  if (hamburger && links) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      links.classList.toggle("open");
      document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (hamburger && links) {
        hamburger.classList.remove("active");
        links.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });

  // Active link highlighting on scroll
  const sections = document.querySelectorAll("section[id]");
  if (sections.length > 0) {
    const observerOptions = {
      rootMargin: "-20% 0px -80% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }
}

/* ===== SCROLL ANIMATIONS ===== */

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".fade-in, .slide-left, .scale-in").forEach(el => {
    observer.observe(el);
  });
}

/* ===== BACK TO TOP ===== */

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===== MODAL ===== */

function openAgentModal(agentId) {
  const agent = AGENTS_DATA.find(a => a.id === agentId);
  if (!agent) return;

  let overlay = document.getElementById("modal-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    overlay.className = "modal-overlay";
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = createAgentModal(agent);

  // Trigger animation
  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  document.body.style.overflow = "hidden";

  // Escape key
  document.addEventListener("keydown", handleEscKey);
}

function openVideoModal(videoUrl, title) {
  if (!videoUrl) {
    // No video URL configured — show placeholder
    let overlay = document.getElementById("modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "modal-overlay";
      overlay.className = "modal-overlay";
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
      });
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="modal">
        <div class="modal__header">
          <div class="modal__title">${title || "Vidéo"}</div>
          <button class="modal__close" onclick="closeModal()" aria-label="Fermer">
            ${getIcon("close")}
          </button>
        </div>
        <div class="modal__body">
          <div class="modal__placeholder">
            <div class="modal__placeholder-icon">🎬</div>
            <div class="modal__placeholder-text">La vidéo de démonstration n'est pas encore disponible.</div>
            <div class="modal__placeholder-hint">Ajoutez l'URL dans le fichier agents-data.js</div>
          </div>
        </div>
      </div>
    `;

    requestAnimationFrame(() => overlay.classList.add("active"));
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscKey);
    return;
  }

  // Open video URL in new tab (or embed if YouTube/Stream)
  window.open(videoUrl, "_blank");
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    setTimeout(() => {
      overlay.innerHTML = "";
    }, 300);
  }
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleEscKey);
}

function handleEscKey(e) {
  if (e.key === "Escape") closeModal();
}
