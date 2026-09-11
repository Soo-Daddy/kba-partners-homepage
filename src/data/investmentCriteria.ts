export interface InvestmentCriterion {
  en: string;
  kr: string;
  question: string;
}

export const investmentCriteria: InvestmentCriterion[] = [
  {
    en: "TECHNOLOGY",
    kr: "차별화된 기술력",
    question:
      "경쟁사가 쉽게 따라올 수 없는 기술적 진입장벽과 독자적인 경쟁력을 보유하고 있는가",
  },
  {
    en: "MARKET",
    kr: "성장하는 시장",
    question: "기업이 속한 산업과 시장이 장기적으로 구조적인 성장이 가능한가",
  },
  {
    en: "COMPETITIVENESS",
    kr: "사업 경쟁력",
    question: "기술력을 실제 사업과 매출로 연결할 수 있는 경쟁력을 갖추고 있는가",
  },
  {
    en: "GROWTH",
    kr: "성장 가능성",
    question: "매출, 고객사, 수주 및 사업규모가 지속적으로 확대될 가능성이 있는가",
  },
  {
    en: "VALUATION",
    kr: "합리적인 기업가치",
    question:
      "기업의 성장 가능성과 예상되는 미래가치 대비 현재 투자 가격이 합리적인가",
  },
  {
    en: "IPO & EXIT",
    kr: "명확한 회수 가능성",
    question: "향후 IPO 또는 다른 방식의 투자금 회수 가능성이 충분한가",
  },
];
