import type { Metadata } from "next";
import Investment from "@/components/Investment";

export const metadata: Metadata = {
  title: "INVESTMENT",
  description:
    "KBA파트너스의 투자전략, 투자분야, 투자단계, 투자기준 및 투자 프로세스를 소개합니다. Late Stage 및 Pre-IPO 성장기업을 주요 투자대상으로 검토합니다.",
};

export default function InvestmentPage() {
  return <Investment />;
}
