import Container from "@/app/components/ui/Container";
import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/sections/Hero";
import Companies from "@/app/components/sections/Companies";
import Services from "@/app/components/sections/Services";
import Features from "@/app/components/sections/Features";
import Portfolio from "@/app/components/sections/Portfolio";
import Process from "@/app/components/sections/Process";
import Testimonials from "@/app/components/sections/Testimonials";
import Pricing from "@/app/components/sections/Pricing";
import FAQ from "@/app/components/sections/FAQ";
import CTA from "@/app/components/sections/CTA";
import Footer from "@/app/components/layout/Footer";

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