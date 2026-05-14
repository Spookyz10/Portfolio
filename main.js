/**
 * swapMain – atualiza a imagem principal com base na thumbnail clicada.
 * As thumbnails NUNCA mudam; cada uma tem seu src fixo salvo em data-src.
 * Só a imagem principal (gallery-main img) é atualizada.
 */
function swapMain(gameId, thumbEl) {
  const mainEl = document.getElementById(gameId + '-main');
  if (!mainEl) return;

  const mainImg = mainEl.querySelector('img');
  if (!mainImg) return;

  // Lê o src fixo guardado em data-src
  const newSrc = thumbEl.dataset.src;
  if (!newSrc) return;

  // Atualiza só a imagem principal
  mainImg.src = newSrc;
  mainImg.alt = thumbEl.querySelector('img').alt;

  // Move o highlight amarelo para a thumb clicada
  const allThumbs = thumbEl.closest('.gallery-thumbs').querySelectorAll('.gallery-thumb');
  allThumbs.forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}