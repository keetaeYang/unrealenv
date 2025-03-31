
document.getElementById('lang-toggle').addEventListener('click', () => {
    const elements = document.querySelectorAll('[data-kr]');
    const isKR = document.documentElement.lang === 'ko';
    document.documentElement.lang = isKR ? 'en' : 'ko';
    elements.forEach(el => {
        el.textContent = isKR ? el.dataset.en : el.dataset.kr;
    });
    document.getElementById('lang-toggle').textContent = isKR ? 'KR' : 'EN';
});

function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("show");
}

