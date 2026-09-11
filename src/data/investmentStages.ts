export interface InvestmentStage {
  en: string;
  desc: string;
}

export const investmentStages: InvestmentStage[] = [
  {
    en: "LATE STAGE",
    desc: "기술력과 사업모델이 검증되고 매출 및 사업규모가 본격적으로 성장하는 기업",
  },
  {
    en: "PRE-IPO",
    desc: "IPO를 준비하며 기업가치 상승 가능성이 본격적으로 나타나는 기업",
  },
  {
    en: "IPO PIPELINE",
    desc: "주관사 선정, 기술성평가, 상장예비심사 청구 등 IPO 절차가 구체적으로 진행되고 있는 기업",
  },
  {
    en: "SECONDARY",
    desc: "기존 주주의 구주 등 기업의 성장 가능성과 기업가치 대비 투자매력이 존재하는 투자기회",
  },
];
