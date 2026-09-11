import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Investment from "@/components/Investment";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Investment />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
