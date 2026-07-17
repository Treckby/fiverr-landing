import Container from "./components/ui/Container";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Companies from "./components/sections/Companies";
import Services from "./components/sections/Services";
import Features from "./components/sections/Features";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Features />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
    <Footer />
    </>
  );
}