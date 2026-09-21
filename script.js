/* ============================================================
   Bansari Premixo — script.js
   Renders products, handles filters, mobile nav, and forms.
   ============================================================ */

// ⚙️ Your WhatsApp number in international format, no "+" or spaces.
const WHATSAPP_NUMBER = "917984686176";

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
// Close the menu after tapping a link (mobile).
nav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

/* ---------- Render product cards ---------- */
const grid = document.getElementById("productGrid");
const filterBar = document.getElementById("filterBar");

// Products shown on the site (skips any marked hidden:true in products.js).
const VISIBLE_PRODUCTS = PRODUCTS.filter(p => !p.hidden);

// Pull the numeric value out of a price string like "₹80" or "From ₹80".
function priceValue(price) {
  const n = parseInt(String(price || "").replace(/[^\d]/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

function cardHTML(p, i = 0) {
  const lang = getLang();
  // In Gujarati mode the Gujarati name becomes the title (English shown beneath).
  const title = lang === "gu" && p.guj ? p.guj : p.name;
  const sub   = lang === "gu" && p.guj ? p.name : p.guj;
  const desc  = lang === "gu" && p.descGu ? p.descGu : p.desc;

  // Use a real photo if provided, otherwise an emoji placeholder.
  const thumb = p.image
    ? `<img class="product-img" src="${p.image}" alt="${p.name} — Bansari Premixo instant premix" loading="lazy">`
    : `<span role="img" aria-label="${p.name} placeholder">${p.emoji || "🍲"}</span>`;
  const tag = p.tag ? `<span class="product-tag">${p.tag}</span>` : "";
  const subEl = sub ? `<p class="product-guj">${sub}</p>` : "";

  return `
    <article class="product-card" data-category="${p.category}" style="animation-delay:${i * 70}ms">
      <div class="product-thumb">${tag}${thumb}</div>
      <div class="product-body">
        <h3>${title}</h3>
        ${subEl}
        <p class="product-desc">${desc}</p>
        <div class="product-foot">
          <span class="product-price">${p.price || ""}</span>
          <button class="product-add" type="button" data-add="${p.name}">${t("products.add")}</button>
        </div>
      </div>
    </article>`;
}

let activeFilter = "all";   // remembered so language switches keep the current filter

function renderProducts(filter = activeFilter) {
  activeFilter = filter;
  const list = filter === "all" ? VISIBLE_PRODUCTS : VISIBLE_PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = list.map((p, i) => cardHTML(p, i)).join("") ||
    `<p style="grid-column:1/-1;text-align:center;color:var(--muted)">${t("products.empty")}</p>`;
}

/* ---------- Build filter chips (only for categories that exist) ---------- */
function renderFilters() {
  const used = new Set(VISIBLE_PRODUCTS.map(p => p.category));
  const keys = ["all", ...Object.keys(CATEGORIES).filter(k => k !== "all" && used.has(k))];
  filterBar.innerHTML = keys.map((k, i) =>
    `<button class="chip ${i === 0 ? "active" : ""}" data-filter="${k}" role="tab">${CATEGORIES[k]}</button>`
  ).join("");

  filterBar.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if (chip.classList.contains("active")) return;   // already showing this filter
      filterBar.querySelector(".chip.active")?.classList.remove("active");
      chip.classList.add("active");

      // Fade the current cards out, swap, then let the new cards animate in.
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { renderProducts(chip.dataset.filter); return; }
      grid.classList.add("is-swapping");
      setTimeout(() => {
        renderProducts(chip.dataset.filter);
        grid.classList.remove("is-swapping");
      }, 200);
    });
  });
}

renderFilters();
renderProducts();

/* ============================================================
   SHOPPING CART
   Cart is stored as { "Product Name": quantity } in localStorage,
   so it survives page reloads. Product details (price, image,
   translated names) are looked up live from PRODUCTS.
   ============================================================ */
const CART_KEY = "bansari-cart";

const cartBtn      = document.getElementById("cartBtn");
const cartCount    = document.getElementById("cartCount");
const cartDrawer   = document.getElementById("cartDrawer");
const cartOverlay  = document.getElementById("cartOverlay");
const cartItemsEl  = document.getElementById("cartItems");
const cartFoot     = document.getElementById("cartFoot");
const cartTotalEl  = document.getElementById("cartTotal");
const cartCustomer = document.getElementById("cartCustomer");
const cartNote     = document.getElementById("cartNote");

let cart = loadCart();

/* ---- Saved customer / delivery details (stored once, reused next time) ---- */
const CUST_KEY = "bansari-customer";
let customer = loadCustomer();
let editingCustomer = false;   // are we showing the edit form?

function loadCustomer() {
  try { return JSON.parse(localStorage.getItem(CUST_KEY)) || {}; }
  catch { return {}; }
}
function saveCustomer() { localStorage.setItem(CUST_KEY, JSON.stringify(customer)); }
function customerComplete() {
  return customer.name && customer.phone && customer.address;
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function renderCustomer() {
  // Show a saved summary once details exist; otherwise show the form.
  if (customerComplete() && !editingCustomer) {
    cartCustomer.innerHTML = `
      <div class="cust-summary">
        <div>
          <p class="cust-label">${t("cart.deliverTo")}</p>
          <p class="cust-value">${escapeHtml(customer.name)} · ${escapeHtml(customer.phone)}<br>${escapeHtml(customer.address)}</p>
        </div>
        <button class="cust-edit" id="custEdit" type="button">${t("cart.edit")}</button>
      </div>`;
    document.getElementById("custEdit").addEventListener("click", () => {
      editingCustomer = true; renderCustomer();
    });
  } else {
    cartCustomer.innerHTML = `
      <p class="cust-title">${t("cart.detailsTitle")}</p>
      <div class="cust-field">
        <label for="custName">${t("cart.cName")}</label>
        <input id="custName" type="text" value="${escapeHtml(customer.name || "")}" placeholder="${t("cart.cNamePh")}">
      </div>
      <div class="cust-field">
        <label for="custPhone">${t("cart.cPhone")}</label>
        <input id="custPhone" type="tel" value="${escapeHtml(customer.phone || "")}" placeholder="${t("cart.cPhonePh")}">
      </div>
      <div class="cust-field">
        <label for="custAddress">${t("cart.cAddress")}</label>
        <textarea id="custAddress" rows="2" placeholder="${t("cart.cAddressPh")}">${escapeHtml(customer.address || "")}</textarea>
      </div>
      <button class="cust-save" id="custSave" type="button">${t("cart.save")}</button>`;
    document.getElementById("custSave").addEventListener("click", saveCustomerForm);
  }
}

function saveCustomerForm() {
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  if (!name || !phone || !address) {
    cartNote.textContent = t("cart.detailsNeeded");
    cartNote.style.color = "#b23a2b";
    return false;
  }
  customer = { name, phone, address };
  saveCustomer();
  editingCustomer = false;
  cartNote.textContent = "";
  renderCustomer();
  return true;
}

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}
function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
function findProduct(name) { return PRODUCTS.find(p => p.name === name); }

function addToCart(name) {
  cart[name] = (cart[name] || 0) + 1;
  saveCart();
  updateCartCount();
  renderCart();
}
function setQty(name, qty) {
  if (qty <= 0) delete cart[name];
  else cart[name] = qty;
  saveCart();
  updateCartCount();
  renderCart();
}

function cartCountTotal() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

function updateCartCount() {
  const n = cartCountTotal();
  cartCount.textContent = n;
  cartCount.hidden = n === 0;
}

function renderCart() {
  const lang = getLang();
  const names = Object.keys(cart);

  if (names.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
    cartFoot.hidden = true;
    return;
  }
  cartFoot.hidden = false;

  let total = 0;
  cartItemsEl.innerHTML = names.map(name => {
    const p = findProduct(name);
    if (!p) return "";
    const qty = cart[name];
    const unit = priceValue(p.price);
    const line = unit * qty;
    total += line;
    const title = lang === "gu" && p.guj ? p.guj : p.name;
    const thumb = p.image
      ? `<img src="${p.image}" alt="${p.name}">`
      : `<span class="cart-emoji">${p.emoji || "🍲"}</span>`;
    return `
      <div class="cart-item" data-name="${name}">
        <div class="cart-thumb">${thumb}</div>
        <div class="cart-info">
          <p class="cart-name">${title}</p>
          <p class="cart-price">${p.price || ""}</p>
        </div>
        <div class="cart-qty">
          <button class="qty-btn" data-dec="${name}" aria-label="Decrease">−</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" data-inc="${name}" aria-label="Increase">+</button>
        </div>
        <div class="cart-line">₹${line}</div>
      </div>`;
  }).join("");

  cartTotalEl.textContent = `₹${total}`;
  renderCustomer();
}

function openCart()  { cartDrawer.classList.add("open"); cartOverlay.hidden = false; cartDrawer.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.hidden = true; cartDrawer.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }

// Add-to-cart clicks (event delegation on the grid)
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  addToCart(btn.dataset.add);
  // brief visual confirmation
  const original = btn.textContent;
  btn.textContent = t("products.added");
  btn.classList.add("added");
  setTimeout(() => { btn.textContent = original; btn.classList.remove("added"); }, 900);
});

// Quantity +/- inside the cart (event delegation)
cartItemsEl.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  if (inc) setQty(inc.dataset.inc, cart[inc.dataset.inc] + 1);
  if (dec) setQty(dec.dataset.dec, cart[dec.dataset.dec] - 1);
});

// Open / close cart
cartBtn.addEventListener("click", () => { renderCart(); openCart(); });
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });

// Clear cart
document.getElementById("cartClear").addEventListener("click", () => {
  cart = {};
  saveCart();
  updateCartCount();
  renderCart();
});

// Checkout → build a formatted WhatsApp order message
document.getElementById("cartCheckout").addEventListener("click", () => {
  const names = Object.keys(cart);
  if (names.length === 0) return;

  // Require delivery details at least once. If missing/editing, save from the
  // open form; if that fails validation, reveal the form and stop.
  if (!customerComplete() || editingCustomer) {
    if (!saveCustomerForm()) return;
  }

  const lang = getLang();
  let total = 0;
  const lines = names.map((name, i) => {
    const p = findProduct(name);
    const qty = cart[name];
    const unit = priceValue(p.price);
    const line = unit * qty;
    total += line;
    const title = lang === "gu" && p.guj ? `${p.guj} (${p.name})` : p.name;
    return `${i + 1}. ${title} × ${qty} — ₹${line}`;
  });
  const msg =
    `${t("cart.msgHeading")}\n\n` +
    `${lines.join("\n")}\n\n` +
    `${t("cart.msgTotal")}: ₹${total}\n\n` +
    `${t("cart.msgName")}: ${customer.name}\n` +
    `${t("cart.msgPhone")}: ${customer.phone}\n` +
    `${t("cart.msgAddress")}: ${customer.address}\n\n` +
    `${t("cart.msgFooter")}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
});

updateCartCount();
renderCart();

/* ---------- Language toggle + apply translations ---------- */
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", toggleLang);

// Re-render product cards + cart whenever the language changes (keeps active filter).
document.addEventListener("langchange", () => { renderProducts(); renderCart(); });

// Apply the saved/default language to all static text on first load.
applyI18n();

/* ---------- Contact form → opens WhatsApp with a prefilled order ---------- */
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();
  if (!name || !phone) {
    note.textContent = t("contact.errRequired");
    note.style.color = "#b23a2b";
    return;
  }
  const text = encodeURIComponent(
    `Hi Bansari Premixo!\nName: ${name}\nPhone: ${phone}\nMessage: ${message || "I'd like to order premixes."}`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  note.style.color = "var(--green)";
  note.textContent = t("contact.sending");
  form.reset();
});

/* ---------- Scroll reveal (fade-up as sections enter view) ---------- */
(function scrollReveal() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Elements to gently reveal on scroll.
  const targets = document.querySelectorAll(
    ".section-head, .step, .why-card, .about-visual, .about-copy, .contact-copy, .contact-form, .hero-copy, .hero-visual"
  );
  if (reduce || !("IntersectionObserver" in window)) return;

  targets.forEach((el, i) => {
    el.classList.add("reveal");
    // small stagger for groups of cards/steps
    el.style.setProperty("--reveal-delay", `${(i % 4) * 80}ms`);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  targets.forEach(el => io.observe(el));
})();

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
