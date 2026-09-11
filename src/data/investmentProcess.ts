export interface ProcessStep {
  step: string;
  en: string;
  kr: string;
  desc: string;
}

export const investmentProcess: ProcessStep[] = [
  {
    step: "01",
    en: "SOURCING",
    kr: "투자기회 발굴",
    desc: "기업, 증권사, VC, 기관투자자 및 다양한 네트워크를 통해 투자기회를 발굴합니다.",
  },
  {
    step: "02",
    en: "SCREENING",
    kr: "투자대상 검토",
    desc: "산업, 사업모델, 기술력, 시장 경쟁력 및 기업의 성장 가능성을 검토합니다.",
  },
  {
    step: "03",
    en: "DUE DILIGENCE",
    kr: "기업 분석",
    desc: "기업의 사업현황, 재무정보, 투자이력, 경영진 및 주요 리스크를 분석합니다.",
  },
  {
    step: "04",
    en: "VALUATION",
    kr: "기업가치 분석",
    desc: "최근 투자단가, 상장기업 Peer Group 및 예상 IPO 기업가치를 비교하여 투자조건을 검토합니다.",
  },
  {
    step: "05",
    en: "INVESTMENT",
    kr: "투자 의사결정",
    desc: "기업의 성장 가능성과 투자조건, Risk & Return을 종합적으로 분석하여 투자 여부를 결정합니다.",
  },
  {
    step: "06",
    en: "MONITORING",
    kr: "투자 이후 관리",
    desc: "투자 이후 기업의 실적, 사업현황, 투자유치 및 IPO 진행과정을 지속적으로 확인합니다.",
  },
  {
    step: "07",
    en: "EXIT",
    kr: "투자 회수",
    desc: "IPO 및 다양한 Exit Opportunity를 검토하여 투자금 회수를 추진합니다.",
  },
];
