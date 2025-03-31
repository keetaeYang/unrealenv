// 데이터
const portfolioData = [
  { title: "안개 낀 숲", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", desc: "후처리와 분위기 연출" },
  { title: "사막 폐허", img: "https://images.unsplash.com/photo-1618221571354-57b5f2f7a4d8", desc: "루멘과 나나이트 환경 구성" },
  { title: "도시 야경", img: "https://images.unsplash.com/photo-1610878180933-d2c6f8e4d4ec", desc: "빛과 그림자, 색감 조절" }
];

const blogPosts = [
  { title: "언리얼 엔진 조명 전략", desc: "Lumen과 GI를 활용한 조명 구성 팁", link: "#" },
  { title: "Megascan 배경 제작", desc: "고퀄리티 환경 구현 팁", link: "#" },
  { title: "효율적인 포트폴리오 구성", desc: "이미지 배열과 설명 작성 요령", link: "#" },
{
  title: "테스트",
  desc: "테스트",
  link: "blog-lighting.html"
}
];

// 렌더링
function renderPortfolio() {
  const container = document.querySelector("#portfolio-container");
  if (!container) return;
  portfolioData.forEach(item => {
    const card = document.create
