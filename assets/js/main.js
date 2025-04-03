// 모바일 메뉴 열기/닫기 및 접근성 속성 업데이트
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("show");
  const expanded = mobileNav.classList.contains("show");
  document.querySelector(".hamburger").setAttribute("aria-expanded", expanded);
  mobileNav.setAttribute("aria-hidden", !expanded);
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

// DOMContentLoaded 이벤트 리스너를 통합하여 초기화 코드 실행
document.addEventListener("DOMContentLoaded", function () {
  // 페이지 로딩 완료 후 body에 loaded 클래스 추가 (페이드 인 애니메이션)
  document.body.classList.add("loaded");

  // 폼 전송 이벤트 리스너 (중복 제거)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        alert("의뢰 내용이 성공적으로 접수되었습니다. 감사합니다!");
      }, 500);
    });
  }

  // IntersectionObserver를 활용한 fade-in 애니메이션 적용
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // 모든 앵커 링크에 부드러운 스크롤 이벤트 적용
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

