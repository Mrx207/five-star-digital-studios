
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutFounder } from "@/components/AboutFounder";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-studio-charcoal">
      <Navbar />
      <Hero />
      <AboutFounder />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
