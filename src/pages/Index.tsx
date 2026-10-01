import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Entrepreneurship from "@/components/Entrepreneurship";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Skills />
      <Marquee />
      <About />
      <Experience />
      <Entrepreneurship />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
