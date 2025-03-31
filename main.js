
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
});

function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("show");
}

function toggleMute() {
  const video = document.getElementById("aboutVideo");
  video.muted = !video.muted;
}

function togglePlay() {
  const video = document.getElementById("aboutVideo");
  video.paused ? video.play() : video.pause();
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("의뢰 내용이 성공적으로 접수되었습니다.");
});
