// 연도를 특정하지 않는 그룹에 쓰는 값
export const OTHER_YEAR = 0;

export interface PortfolioCompany {
  name: string;
  investedYear: number;
  // /public/portfolio 안의 파일 경로. 없으면 카드에 회사명 텍스트만 표시됩니다.
  logo?: string;
  // 로고가 흰색 등이라 밝은 카드 배경에서 안 보이는 경우 true
  logoDark?: boolean;
  // 다른 로고보다 크게 강조 표시
  featured?: boolean;
  // 클릭 시 이동할 공식 홈페이지 주소
  url?: string;
}

// 투자연도별로 구분. 최신 연도가 위로 오도록 정렬되어 있습니다.
// 로고는 각 기업 공식 홈페이지에서 가져온 것입니다.
export const portfolio: PortfolioCompany[] = [
  { name: "로보콘", investedYear: 2026, logo: "/portfolio/robocon.png", logoDark: true, url: "https://robocon.ai" },
  { name: "퍼즐AI", investedYear: 2026, logo: "/portfolio/puzzleai.png", url: "https://puzzle-ai.com" },

  { name: "이니스트에스티", investedYear: 2025, logo: "/portfolio/inistst.png", url: "https://inistst.co.kr" },
  { name: "DST", investedYear: 2025, logo: "/portfolio/dst.png", url: "https://www.ds-t.kr" },
  { name: "코스모로보틱스", investedYear: 2025, logo: "/portfolio/cosmorobotics.png", url: "https://www.cosmo-robotics.com" },
  { name: "페리지에어로스페이스", investedYear: 2025, logo: "/portfolio/perigee.svg", url: "https://www.perigee.space" },
  { name: "리센스메디컬", investedYear: 2025, logo: "/portfolio/recensmedical.svg", url: "https://recensmedical.com" },

  { name: "케이뱅크", investedYear: 2024, logo: "/portfolio/kbank.png", featured: true, url: "https://www.kbanknow.com" },
  { name: "채비", investedYear: 2024, logo: "/portfolio/chaevi.png", featured: true, url: "https://chaevi.com" },
  { name: "APR", investedYear: 2024, logo: "/portfolio/apr.png", featured: true, url: "https://apr-in.com" },
  { name: "MIT", investedYear: 2024, logo: "/portfolio/mit.png", url: "https://www.mit21.co.kr" },
  { name: "로킷헬스케어", investedYear: 2024, logo: "/portfolio/rokithealthcare.png", url: "https://rokithealthcare.com" },
  { name: "세미파이브", investedYear: 2024, logo: "/portfolio/semifive.png", url: "https://semifive.com" },
  { name: "인투셀", investedYear: 2024, logo: "/portfolio/intocell.png", url: "https://intocell.com" },

  { name: "카카오게임즈", investedYear: OTHER_YEAR, logo: "/portfolio/kakaogames.png", url: "https://www.kakaogames.com" },
  { name: "루닛", investedYear: OTHER_YEAR, logo: "/portfolio/lunit.svg", url: "https://lunit.io" },
  { name: "코셈", investedYear: OTHER_YEAR, logo: "/portfolio/coxem.png", url: "https://coxem.com" },
  { name: "셀비온", investedYear: OTHER_YEAR, logo: "/portfolio/cellbion.png", url: "http://www.cellbion.co.kr" },
  { name: "샤페론", investedYear: OTHER_YEAR, logo: "/portfolio/shaperon.png", url: "http://shaperon.com" },
  { name: "보로노이", investedYear: OTHER_YEAR, logo: "/portfolio/voronoi.svg", url: "https://voronoi.io" },
  { name: "에어레인", investedYear: OTHER_YEAR, logo: "/portfolio/airrane.png", url: "https://airrane.com" },
  { name: "엔켐", investedYear: OTHER_YEAR, logo: "/portfolio/enchem.png", url: "https://enchem.net" },
  { name: "엑셀세라퓨틱스", investedYear: OTHER_YEAR, logo: "/portfolio/xcell.png", url: "https://xcell.co.kr" },
  { name: "안다르", investedYear: OTHER_YEAR, logo: "/portfolio/andar.svg", url: "https://andar.co.kr" },
  { name: "프로젠", investedYear: OTHER_YEAR, logo: "/portfolio/progen.png", url: "https://progen.co.kr" },
  { name: "럭스로보", investedYear: OTHER_YEAR, logo: "/portfolio/luxrobo.png", logoDark: true, url: "https://luxrobo.com" },
];
