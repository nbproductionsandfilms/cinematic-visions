import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
