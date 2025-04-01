// 모바일 메뉴 열기/닫기
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("show");
}

// About 섹션 영상 제어
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

// 문의폼 제출 알림
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("의뢰 내용이 성공적으로 접수되었습니다. 실제 메일 서버는 아직 연결되어 있지 않습니다.");
    });
  }
});
