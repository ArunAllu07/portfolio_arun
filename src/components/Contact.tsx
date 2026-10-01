import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MAILTO_URL, openEmailWithFallback } from "@/lib/email";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-10 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">What's Next?</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
          Let's create<br />
          <span className="font-serif-italic text-muted-foreground">something real.</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed">
          Interested in data analytics, data science, and applied AI opportunities. I’d be glad to connect and discuss how data can answer meaningful questions.
        </p>
        <a
          href={MAILTO_URL}
          onClick={(e) => {
            e.preventDefault();
            openEmailWithFallback();
          }}
          className="relative inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-base hover:opacity-90 transition-opacity cursor-pointer z-[99999]"
        >
          CONNECT NOW <ArrowUpRight className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
