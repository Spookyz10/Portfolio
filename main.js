const lightbox = document.querySelector('.lightbox');
const enlargedImage = lightbox.querySelector('img');

document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const main = gallery.querySelector('.gallery-main');
  const image = main.querySelector('img');
  const count = gallery.querySelector('.gallery-count');
  const thumbs = [...gallery.querySelectorAll('.gallery-thumb')];

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      image.src = thumb.dataset.src;
      image.alt = thumb.dataset.alt;
      main.setAttribute('aria-label', `Enlarge ${thumb.querySelector('span').textContent}`);
      count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(thumbs.length).padStart(2, '0')}`;
      thumbs.forEach(item => {
        item.classList.toggle('active', item === thumb);
        item.setAttribute('aria-pressed', String(item === thumb));
      });
    });
  });

  main.addEventListener('click', () => {
    enlargedImage.src = image.src;
    enlargedImage.alt = image.alt;
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target !== lightbox) return;
  const bounds = lightbox.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
});
lightbox.addEventListener('close', () => enlargedImage.removeAttribute('src'));
