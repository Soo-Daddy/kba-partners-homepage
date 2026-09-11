import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "PORTFOLIO | KBA Partners",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
