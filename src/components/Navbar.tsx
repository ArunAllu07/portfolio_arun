import { useState } from "react";
import { motion } from "framer-motion";
import { MAILTO_URL, openEmailWithFallback } from "@/lib/email";

const navItems = ["Home", "About", "Work", "Entrepreneurship", "Projects", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-2xl tracking-wider text-foreground">AK</span>
        <div className="hidden sm:block">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Data & Analytics</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary">Turning insight into action</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-1 bg-secondary/60 backdrop-blur-md rounded-full px-2 py-1 border border-border">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
              active === item
                ? "bg-background text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <a
        href={MAILTO_URL}
        onClick={(e) => {
          e.preventDefault();
          openEmailWithFallback();
        }}
        className="hidden md:flex items-center gap-2 border border-border rounded-full px-5 py-1.5 text-sm text-foreground hover:bg-secondary transition-colors"
      >
        Get in Touch
      </a>
    </motion.header>
  );
};

export default Navbar;
