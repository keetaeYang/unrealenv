
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
