// ============================================================
//  Your photos
//  ------------------------------------------------------------
//  1. Put image files into the  assets/images/  folder.
//  2. Add a line below for each photo: { src, caption }.
//  That's it — they'll show up in the Gallery tab automatically.
// ============================================================
const photos = [
  // { src: "assets/images/photo1.jpg", caption: "A trip I took" },
  // { src: "assets/images/photo2.jpg", caption: "Something I cooked" },
  // { src: "assets/images/photo3.jpg", caption: "A nice sunset" },
];

// ---------- Render the gallery ----------
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  if (photos.length === 0) {
    grid.innerHTML =
      '<div class="empty">No photos yet. Add some to the <code>photos</code> list in <code>main.js</code> 📷</div>';
    return;
  }

  grid.innerHTML = "";
  photos.forEach((p) => {
    const fig = document.createElement("div");
    fig.className = "photo";
    fig.innerHTML = `<img src="${p.src}" alt="${p.caption || "photo"}" loading="lazy" />`;
    fig.addEventListener("click", () => openLightbox(p.src, p.caption || ""));
    grid.appendChild(fig);
  });
}

// ---------- Tabs ----------
function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      panels.forEach((p) => p.classList.toggle("is-active", p.id === target));
    });
  });
}

// ---------- Lightbox ----------
function openLightbox(src, alt) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  img.alt = alt;
  box.hidden = false;
}
function setupLightbox() {
  const box = document.getElementById("lightbox");
  const close = document.getElementById("lightboxClose");
  if (!box) return;
  const hide = () => (box.hidden = true);
  close.addEventListener("click", hide);
  box.addEventListener("click", (e) => {
    if (e.target === box) hide();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  });
}

// ---------- Theme toggle (remembers your choice) ----------
function setupTheme() {
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");
  applyTheme(initial);

  btn.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}
function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = mode === "dark" ? "☀️" : "🌙";
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  setupTheme();
  setupTabs();
  setupLightbox();
  renderGallery();
});
