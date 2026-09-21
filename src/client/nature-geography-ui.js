/**
 * 华夏自然地理与世界地理长卷客户端交互
 */

document.addEventListener('DOMContentLoaded', () => {
  initAnchorNav();
  initGeoLightbox();
  initKeyboardNav();
});

function initAnchorNav() {
  const anchorBtns = document.querySelectorAll('.geo-anchor-btn');
  const sections = document.querySelectorAll('.geo-card-section');

  anchorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        anchorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 滚动监听高亮对应锚点
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        anchorBtns.forEach(b => {
          if (b.getAttribute('href') === `#${id}`) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => observer.observe(sec));
}

function initGeoLightbox() {
  const lightbox = document.getElementById('geo-lightbox-modal');
  const lbImg = document.getElementById('geo-lightbox-img');
  const lbCaption = document.getElementById('geo-lightbox-caption');
  const closeBtn = document.getElementById('btn-close-geo-lightbox');

  if (!lightbox) return;

  // 地貌卡片点击
  const lfCards = document.querySelectorAll('.landform-card');
  lfCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.getAttribute('data-img');
      const name = card.getAttribute('data-name');
      const mechanics = card.getAttribute('data-mechanics');
      if (img && lbImg) {
        lbImg.src = img;
        lbImg.alt = name;
        if (lbCaption) lbCaption.innerHTML = `<strong>${name}</strong><br><span style="font-size:0.85rem; color:#cbd5e1;">${mechanics}</span>`;
        lightbox.style.display = 'flex';
      }
    });
  });

  // 世界之最卡片点击
  const exCards = document.querySelectorAll('.extreme-card');
  exCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      const record = card.getAttribute('data-record');
      const desc = card.getAttribute('data-desc');
      if (img && lbImg) {
        lbImg.src = img;
        lbImg.alt = title;
        if (lbCaption) lbCaption.innerHTML = `<strong>${title} (${record})</strong><br><span style="font-size:0.85rem; color:#cbd5e1;">${desc}</span>`;
        lightbox.style.display = 'flex';
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
}

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.getElementById('geo-lightbox-modal');
      if (lightbox && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
      }
    }
  });
}
