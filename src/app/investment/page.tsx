import type { Metadata } from "next";
import Investment from "@/components/Investment";

export const metadata: Metadata = {
  title: "INVESTMENT | KBA Partners",
};

export default function InvestmentPage() {
  return <Investment />;
}
