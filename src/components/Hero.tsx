import { motion } from "framer-motion";
import { MapPin, Layers } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
    <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display text-[18vw] md:text-[16vw] lg:text-[14vw] leading-[0.85] tracking-wider text-foreground text-center select-none">
      <span className="block">ARUN</span>
      <span className="block text-[0.28em] tracking-[0.32em] text-primary mt-3">KETHAVATH</span>
    </motion.h1>
    <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }} className="mt-6 text-center">
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">I turn complex data into</p>
      <p className="font-serif-italic text-3xl md:text-5xl text-foreground">clear, useful decisions.</p>
    </motion.div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }} className="absolute bottom-10 left-0 right-0 flex justify-between px-8 md:px-16">
      <div className="flex flex-col items-center gap-2 text-center"><MapPin className="w-4 h-4 text-primary" /><div><p className="text-xs uppercase tracking-[0.15em] text-foreground font-medium">Based in India</p><p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Open to opportunities</p></div></div>
      <div className="flex flex-col items-center gap-2 text-center"><Layers className="w-4 h-4 text-primary" /><div><p className="text-xs uppercase tracking-[0.15em] text-foreground font-medium">Product & Data</p><p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">AI/ML · IIT Kharagpur '27</p></div></div>
    </motion.div>
  </section>
);

export default Hero;
