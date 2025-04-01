// 모바일 메뉴 열기/닫기
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("show");
}

// About 영상 제어
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

// 폼 전송 시 알림 (메일은 Formspree로 전송됨)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        alert("의뢰 내용이 성공적으로 접수되었습니다. 감사합니다!");
      }, 500); // 전송 후 사용자에게 피드백
    });
  }
});

// 페이지 로딩 시 body에 loaded 클래스 추가
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        alert("의뢰 내용이 성공적으로 접수되었습니다. 감사합니다!");
      }, 500);
    });
  }

  // fade-in 요소들에 스크롤 트리거 적용
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
