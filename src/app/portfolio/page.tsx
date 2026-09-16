import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description:
    "케이뱅크, 루닛, 보로노이 등 KBA파트너스가 투자하여 함께 성장하고 있는 포트폴리오 기업을 소개합니다.",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
