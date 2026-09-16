import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "ABOUT",
  description:
    "KBA파트너스는 성장 잠재력이 높은 기업을 발굴하고 투자하는 투자회사입니다. 기술력과 사업 경쟁력, 산업의 성장 가능성을 종합적으로 분석하여 투자기회를 검토합니다.",
};

export default function AboutPage() {
  return <About />;
}
