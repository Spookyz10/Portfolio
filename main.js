function swapMain(gameId, thumbEl) {
  const mainEl = document.getElementById(gameId + '-main');
  if (!mainEl) return;

  const mainImg = mainEl.querySelector('img');
  if (!mainImg) return;

  const newSrc = thumbEl.dataset.src;
  if (!newSrc) return;

  mainImg.src = newSrc;
  mainImg.alt = thumbEl.querySelector('img').alt;

  const allThumbs = thumbEl.closest('.gallery-thumbs').querySelectorAll('.gallery-thumb');
  allThumbs.forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}