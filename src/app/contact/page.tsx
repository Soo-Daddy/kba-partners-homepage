import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "CONTACT",
  description:
    "KBA파트너스에 투자문의 및 새로운 투자기회를 제안해 주세요. 주소, 대표자 정보와 온라인 문의 양식을 확인할 수 있습니다.",
};

export default function ContactPage() {
  return <Contact />;
}
