import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "ABOUT | KBA Partners",
};

export default function AboutPage() {
  return <About />;
}
