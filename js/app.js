/* ══════════════════════════════════════════════
   SAKHI COLLECTIVE — App Logic
   ══════════════════════════════════════════════ */

const WA_BASE = 'https://wa.me/917799311055';
const IG_URL  = 'https://instagram.com/sakhi.collective';

let wishlist = new Set();

/* ══════ WHATSAPP ICON SVG ══════ */
const WA_ICON = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png" alt="WhatsApp" width="14" height="14" style="flex-shrink:0;">`;

/* ══════════════════════════════════════════════
   PAGE NAVIGATION
   ══════════════════════════════════════════════ */
function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function openMobile() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════
   TOAST NOTIFICATION
   ══════════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ══════════════════════════════════════════════
   WISHLIST
   ══════════════════════════════════════════════ */
function toggleWishlist(e, id) {
  if (e) e.stopPropagation();
  if (wishlist.has(id)) {
    wishlist.delete(id);
    showToast('Removed from wishlist');
  } else {
    wishlist.add(id);
    showToast('♥ Added to wishlist!');
  }
  document.querySelectorAll('.wl-' + id).forEach(btn => {
    btn.textContent = wishlist.has(id) ? '❤️' : '🤍';
  });
}

/* ══════════════════════════════════════════════
   PRODUCT CARD RENDERER
   ══════════════════════════════════════════════ */
function renderCard(p) {
  const waMsg = encodeURIComponent(`Hi Sakhi Collective! I'm interested in the "${p.name}". Could you share details and availability?`);
  const isWished = wishlist.has(p.id);
  return `
<div class="product-card" onclick="openProduct(${p.id})">
  <div class="pc-img-wrap">
    ${p.badge ? `<div class="pc-badge">${p.badge}</div>` : ''}
    <button class="pc-wl wl-${p.id}" onclick="toggleWishlist(event,${p.id})" aria-label="Wishlist">${isWished ? '❤️' : '🤍'}</button>
    <img
      class="pc-img"
      src="${p.img}"
      alt="${p.name}"
      loading="lazy"
      onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80&fit=crop'"
    >
    <div class="pc-img-grad"></div>
    <div class="pc-cta">
      <a href="${WA_BASE}?text=${waMsg}" target="_blank" rel="noopener" class="btn-wa-sm" onclick="event.stopPropagation()">
        ${WA_ICON} Enquire Now
      </a>
    </div>
  </div>
  <div class="pc-body">
    <div class="pc-cat">${p.cat}</div>
    <div class="pc-name">${p.name}</div>
    <div class="pc-desc">${p.desc.slice(0, 90)}…</div>
    <div class="pc-footer">
      <span class="pc-occ">${p.occ}</span>
      <a href="${WA_BASE}?text=${waMsg}" target="_blank" rel="noopener" class="btn-wa-sm" onclick="event.stopPropagation()" style="padding:7px 14px;font-size:0.64rem;">
        ${WA_ICON} Order
      </a>
    </div>
  </div>
</div>`;
}

/* ══════════════════════════════════════════════
   PRODUCT DETAIL PAGE
   ══════════════════════════════════════════════ */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const waMsg = encodeURIComponent(`Hi Sakhi Collective! I'm interested in the "${p.name}". Please share details, availability, and pricing.`);
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  const allImgs = p.imgs || [p.img, p.img, p.img];

  document.getElementById('pdContent').innerHTML = `
<div class="pd-grid">
  <div class="pd-left">
    <img class="pd-main-img" id="pdMainImg" src="${allImgs[0]}" alt="${p.name}"
      onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=85&fit=crop'">
    <div class="pd-thumbs">
      ${allImgs.map((src, i) => `
        <img class="pd-thumb ${i === 0 ? 'active' : ''}" src="${src}" alt="${p.name} view ${i + 1}"
          onclick="switchThumb(this, '${src}')"
          onerror="this.style.display='none'"
          loading="lazy">
      `).join('')}
    </div>
  </div>
  <div class="pd-right">
    <div class="pd-breadcrumb">
      <a onclick="go('home')">Home</a> &rsaquo;
      <a onclick="go('shop')">${p.cat}</a> &rsaquo;
      ${p.name}
    </div>
    <div class="pd-cat">${p.cat} &nbsp;·&nbsp; ${p.occ}</div>
    <h1 class="pd-name">${p.name}</h1>
    <div class="pd-rating">
      <span class="pd-stars">${stars}</span>
      <span class="pd-rating-score">${p.rating}</span>
      <span class="pd-rating-count">(${p.rev} reviews)</span>
    </div>
    <div class="pd-divider"></div>
    <div class="pd-inc-title">What's Included</div>
    <div class="include-tags">
      ${p.inc.map(i => `<span class="include-tag">✓ ${i}</span>`).join('')}
    </div>
    <div class="pd-divider"></div>
    <p class="pd-desc">${p.desc}</p>
    <div class="pd-note">
      <strong>How to enquire:</strong> We don't display prices online so we can offer you personalised pricing and check real-time availability. Simply message us on WhatsApp or Instagram with the product name — we'll respond within minutes.
    </div>
    <div class="pd-btns">
      <a href="${WA_BASE}?text=${waMsg}" target="_blank" rel="noopener" class="btn-wa-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png" alt="WhatsApp" width="18" height="18">
        Enquire on WhatsApp
      </a>
      <a href="${IG_URL}" target="_blank" rel="noopener" class="btn-insta-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/120px-Instagram_icon.png" alt="Instagram" width="18" height="18">
        DM on Instagram
      </a>
      <button class="btn-ghost" onclick="toggleWishlist(event,${p.id})" style="padding:13px 22px;font-size:0.76rem;">🤍 Wishlist</button>
    </div>
  </div>
</div>`;

  // Suggested products
  const suggested = PRODUCTS
    .filter(x => x.id !== id && (x.cat === p.cat || x.occ === p.occ))
    .slice(0, 4);
  document.getElementById('suggestedProducts').innerHTML = suggested.map(renderCard).join('');

  go('product');
}

function switchThumb(el, src) {
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const main = document.getElementById('pdMainImg');
  if (main) { main.style.opacity = 0; main.src = src; main.onload = () => { main.style.opacity = 1; }; }
}

/* ══════════════════════════════════════════════
   FILTERS
   ══════════════════════════════════════════════ */
function setF(value, btn, type = 'cat') {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let list = value === 'all' ? PRODUCTS
    : type === 'occ' ? PRODUCTS.filter(p => p.occ === value)
    : PRODUCTS.filter(p => p.cat === value);
  document.getElementById('shopGrid').innerHTML = list.length
    ? list.map(renderCard).join('')
    : `<div style="padding:4rem;text-align:center;color:rgba(245,237,227,0.35);font-size:0.9rem;grid-column:1/-1;">No products found for this filter.</div>`;
}

function occFilter(occ) {
  go('shop');
  requestAnimationFrame(() => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('shopGrid').innerHTML = PRODUCTS
      .filter(p => p.occ === occ)
      .map(renderCard).join('');
  });
}

function catFilter(cat) {
  go('shop');
  requestAnimationFrame(() => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('shopGrid').innerHTML = PRODUCTS
      .filter(p => p.cat === cat)
      .map(renderCard).join('');
  });
}

/* ══════════════════════════════════════════════
   BUILD CATEGORY MASONRY GRID
   ══════════════════════════════════════════════ */
function buildCategoryGrid() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
<div class="cat-item" onclick="catFilter('${c.name}')">
  <img class="cat-img" src="${c.img}" alt="${c.name}" loading="lazy"
    onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80&fit=crop'">
  <div class="cat-overlay-dark"></div>
  <div class="cat-info">
    <span class="cat-name">${c.name}</span>
    <span class="cat-count">${c.count}</span>
  </div>
  <button class="cat-hover-btn">Explore</button>
</div>`).join('');
}

/* ══════════════════════════════════════════════
   BUILD INSTAGRAM GRID
   ══════════════════════════════════════════════ */
function buildInstaGrid() {
  const grid = document.getElementById('instaGrid');
  if (!grid) return;
  grid.innerHTML = INSTA_IMGS.map(item => `
<a href="${IG_URL}" target="_blank" rel="noopener" class="insta-tile">
  <img src="${item.src}" alt="${item.alt}" loading="lazy"
    onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80&fit=crop'">
  <div class="insta-hover">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/120px-Instagram_icon.png" alt="Instagram" width="28" height="28">
    <span>View Post</span>
  </div>
</a>`).join('');
}

/* ══════════════════════════════════════════════
   VENDOR FORM
   ══════════════════════════════════════════════ */
function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.innerText = "");
}

function vendorSubmit() {
  clearErrors();

  const name = document.getElementById("vendorName").value.trim();
  const business = document.getElementById("vendorBusiness").value.trim();
  const phone = document.getElementById("vendorPhone").value.trim();
  const category = document.getElementById("vendorCategory").value;
  const insta = document.getElementById("vendorInsta").value.trim();
  const about = document.getElementById("vendorAbout").value.trim();

  let valid = true;

  if (!name) {
    document.getElementById("errName").innerText = "Please enter your name.";
    valid = false;
  }

  if (!business) {
    document.getElementById("errBusiness").innerText = "Enter your business name.";
    valid = false;
  }

  if (!phone || phone.length < 10) {
    document.getElementById("errPhone").innerText = "Enter a valid phone number.";
    valid = false;
  }

  if (!category) {
    document.getElementById("errCategory").innerText = "Select a product category.";
    valid = false;
  }

  if (!about || about.length < 20) {
    document.getElementById("errAbout").innerText = "Tell us more about your products (min 20 characters).";
    valid = false;
  }

  if (!valid) return;

  const subject = encodeURIComponent("New Vendor Application - Sakhi Collective");

  const body = encodeURIComponent(
`Vendor Application Details

Name: ${name}
Business: ${business}
Phone: ${phone}
Category: ${category}
Instagram/Website: ${insta}

About Products:
${about}`
  );

  window.location.href =
    `mailto:sakhi.unntangle@gmail.com?subject=${subject}&body=${body}`;
}

/* ══════════════════════════════════════════════
   NAVBAR SCROLL EFFECT
   ══════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(6,1,12,0.98)';
  } else {
    navbar.style.background = 'rgba(11,2,20,0.95)';
  }
}, { passive: true });

/* ══════════════════════════════════════════════
   INITIALISE
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Featured products (first 6)
  const fp = document.getElementById('featuredProducts');
  if (fp) fp.innerHTML = PRODUCTS.slice(0, 6).map(renderCard).join('');

  // Shop grid (all)
  const sg = document.getElementById('shopGrid');
  if (sg) sg.innerHTML = PRODUCTS.map(renderCard).join('');

  // Suggested (default, first 4)
  const sp = document.getElementById('suggestedProducts');
  if (sp) sp.innerHTML = PRODUCTS.slice(0, 4).map(renderCard).join('');

  buildCategoryGrid();
  buildInstaGrid();
});
