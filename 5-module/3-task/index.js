function initCarousel() {
  const slides = document.querySelectorAll('.carousel__slide'),
        wrapper = document.querySelector('.carousel__inner'),
        prevBtn = document.querySelector('.carousel__arrow_left'),
        nextBtn = document.querySelector('.carousel__arrow_right');
  let step = wrapper.offsetWidth;
  let counter = 1;
  let shift = 0;
  prevBtn.style.display = 'none';
  prevBtn.addEventListener('click', () => {
    counter--;
    shift += step;
    wrapper.style.transform = 'translateX(' + shift + 'px)';
    nextBtn.style.display = '';
    if (counter === 1) {
      prevBtn.style.display = 'none';
    }
  });
  nextBtn.addEventListener('click', () => {
    counter++;
    shift -= step;
    wrapper.style.transform = 'translateX(' + shift + 'px)';
    prevBtn.style.display = '';
    if (slides.length === counter) {
      nextBtn.style.display = 'none';
    }
  });
}