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

function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("show");
}



// 스크롤 시 헤더 배경색 변화
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// 모바일 네비게이션 메뉴 토글
function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("show");
}

// 비디오 음소거 및 재생 컨트롤
function toggleMute() {
  const video = document.getElementById("aboutVideo");
  video.muted = !video.muted;
}

function togglePlay() {
  const video = document.getElementById("aboutVideo");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
