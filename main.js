
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function changeSlide(offset) {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + offset + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach((el, idx) => {
    el.style.animationDelay = `${idx * 0.3}s`;
    el.classList.add('fade-in-animate');
  });
});
