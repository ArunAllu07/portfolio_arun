import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Users, Stethoscope, IndianRupee } from "lucide-react";

const outcomes = [
  { value: "1,900+", label: "users onboarded", icon: Users },
  { value: "400+", label: "users through clinics", icon: Stethoscope },
  { value: "2", label: "paying clinics", icon: BriefcaseBusiness },
  { value: "₹1.8L", label: "pilot revenue", icon: IndianRupee },
];

const Entrepreneurship = () => (
  <section id="entrepreneurship" className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
    <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Entrepreneurship</p>
      <h2 className="font-display text-5xl md:text-7xl tracking-wider">BUILDING <span className="font-serif-italic text-accent">from zero</span></h2>
    </motion.div>

    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-3xl border border-border bg-card">
      <div className="lg:col-span-2 p-7 md:p-10 bg-gradient-to-br from-secondary/80 via-card to-primary/10 flex flex-col justify-between min-h-[300px]">
        <div><span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 text-primary text-[10px] uppercase tracking-[0.2em]"><BriefcaseBusiness className="w-3.5 h-3.5" /> Co-founder</span><h3 className="text-4xl md:text-5xl font-bold mt-6">Paxi<span className="font-serif-italic text-primary">.ai</span></h3><p className="text-sm text-muted-foreground mt-2">AI-powered pet-care platform · Bangalore</p></div>
        <div className="mt-8"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">2-month pilot</p><p className="font-serif-italic text-lg mt-2">Business Development & Operations</p></div>
      </div>

      <div className="lg:col-span-3 p-7 md:p-10">
        <p className="text-muted-foreground leading-relaxed">Co-founded Paxi.ai and helped take the pet-care platform from validation to a live pilot. I led customer acquisition and clinic partnerships, gathered feedback from pet parents and care providers, and supported the rollout of voice-based intake and retrieval-augmented workflows.</p>
        <div className="grid grid-cols-2 gap-3 mt-8">{outcomes.map(({ value, label, icon: Icon }) => <div key={label} className="rounded-2xl border border-border bg-secondary/30 p-4"><Icon className="w-4 h-4 text-primary mb-4" /><p className="text-2xl md:text-3xl font-semibold">{value}</p><p className="text-xs text-muted-foreground mt-1">{label}</p></div>)}</div>
        <p className="text-xs text-muted-foreground mt-5 flex items-center gap-2"><ArrowUpRight className="w-3.5 h-3.5 text-primary" /> Validated with 100+ pet parents, veterinarians, and pet-care businesses.</p>
      </div>
    </motion.article>
  </section>
);

export default Entrepreneurship;
