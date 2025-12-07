document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slider-track img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (!track || slides.length === 0) return;

  let index = 1; // začneme na první skutečné fotce

  // klonování
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll('.slider-track img');

  // nastavíme počáteční pozici
  track.style.transform = `translateX(-100%)`;

  function update(animate = true) {
    track.style.transition = animate ? 'transform 0.6s ease' : 'none';
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() {
    index++;
    update(true);

    if (index === allSlides.length - 1) {
      setTimeout(() => {
        index = 1;
        update(false); // skok bez animace
      }, 600);
    }
  }

  function prev() {
    index--;
    update(true);

    if (index === 0) {
      setTimeout(() => {
        index = allSlides.length - 2;
        update(false);
      }, 600);
    }
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // auto posuv
  setInterval(next, 4000);
});
