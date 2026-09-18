import type { Metadata } from "next";
import Insurance from "@/components/Insurance";

export const metadata: Metadata = {
  title: "INSURANCE",
  description:
    "케이비에이파트너스는 인카금융서비스 소속 케이비에이본부를 통해 보험 컨설팅 서비스를 함께 운영하고 있습니다.",
};

export default function InsurancePage() {
  return <Insurance />;
}
