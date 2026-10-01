import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, Award, Sparkles } from "lucide-react";
import { useState } from "react";
import { EMAIL_ADDRESS, MAILTO_URL, openEmailWithFallback } from "@/lib/email";

const focus = [
  ["Data Analytics", "From raw data to clear insight", "Use SQL, Python, and statistical analysis to find patterns, explain performance, and answer business questions."],
  ["Business Intelligence", "Dashboards that support decisions", "Build useful Tableau, Excel, and Power BI views for tracking retention, conversion, campaigns, and operations."],
  ["Data Science", "Models for practical problems", "Apply forecasting, classification, NLP, and anomaly detection, with careful evaluation of model performance."],
  ["Experimentation", "Measure what changes outcomes", "Use cohorts, A/B tests, and product analytics to quantify user behavior and validate improvements."],
];
const achievements = [
  { title: "FinTechPM", subtitle: "Runner-up · General Championship Tech" },
  { title: "Sports leadership", subtitle: "General Secretary, RP Hall" },
  { title: "Sports & Games", subtitle: "7 volleyball gold medals" },
  { title: "Case study", subtitle: "Silver medal" },
  { title: "GC Cultural 2024", subtitle: "Silver · Choreography" },
  { title: "Community", subtitle: "Mentored 5 SWG juniors" },
];

const BentoGrid = () => {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL_ADDRESS); }
    catch { const field = document.createElement("textarea"); field.value = EMAIL_ADDRESS; document.body.appendChild(field); field.select(); document.execCommand("copy"); field.remove(); }
    setCopied(true); window.setTimeout(() => setCopied(false), 1500);
  };
  return <section className="px-4 md:px-10 py-16"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
    <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-between min-h-[330px]">
      <div><div className="flex justify-between"><span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-secondary text-primary font-semibold border border-border">IIT Kharagpur '27</span><span className="text-xs text-muted-foreground">Integrated Dual Degree</span></div><h2 className="text-3xl font-semibold mt-5">Arun <span className="font-serif-italic font-normal text-muted-foreground">Kethavath</span></h2><p className="text-xs text-muted-foreground mt-2">Data Analytics · Data Science · AI/ML</p><p className="text-sm text-muted-foreground mt-4 leading-relaxed">Metallurgical & Materials Engineering student with a micro-specialization in Artificial Intelligence and Applications.</p></div>
      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between"><div className="flex gap-4"><a href="https://github.com/a" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-foreground">GitHub ↗</a><a href="https://www.linkedin.com/in/arun-kethavath-a7aa46258" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-foreground">LinkedIn ↗</a></div><span className="text-xs text-muted-foreground">India</span></div>
    </motion.div>
    <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .1 }} className="bg-card rounded-2xl border border-border p-6 min-h-[330px]">
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-primary" /> Areas of focus</p><h3 className="text-2xl font-bold">Curiosity,</h3><p className="font-serif-italic text-2xl text-muted-foreground">with purpose.</p><div className="flex flex-wrap gap-1.5 mt-5">{focus.map(([label], i) => <button key={label} onClick={() => setActive(i)} aria-pressed={active === i} className={`px-3 py-1 rounded-full border text-xs ${active === i ? "border-primary text-foreground bg-secondary/70" : "border-border text-muted-foreground"}`}>{label}</button>)}</div><div className="mt-4 p-3 rounded-xl bg-secondary/30 border border-border/50"><h4 className="text-sm font-semibold">{focus[active][1]}</h4><p className="text-xs text-muted-foreground mt-1 leading-relaxed">{focus[active][2]}</p></div>
    </motion.div>
    <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-between min-h-[330px]"><div className="flex justify-between"><span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex gap-2"><Trophy className="w-3.5 h-3.5 text-primary" /> Open to opportunities</span><span className="flex items-center gap-1.5 text-xs text-primary"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available</span></div><div className="mt-8"><h3 className="font-display text-3xl tracking-wider">LET'S BUILD<br />SOMETHING</h3><p className="font-serif-italic text-xl text-muted-foreground">that makes a difference.</p><button onClick={copyEmail} className="mt-4 text-left text-sm text-foreground hover:text-primary break-all">{EMAIL_ADDRESS}</button><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{copied ? "Email copied" : "Click to copy email"}</p><a href={MAILTO_URL} onClick={(e) => { e.preventDefault(); openEmailWithFallback(); }} className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-foreground text-background font-medium text-sm">GET IN TOUCH <ArrowUpRight className="w-4 h-4" /></a></div></motion.div>
    <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .3 }} className="md:col-span-3 bg-card/60 rounded-2xl border border-border p-6"><div className="flex items-center gap-2 mb-4"><Award className="w-4 h-4 text-primary" /><h4 className="text-xs uppercase tracking-[0.2em] font-semibold">Awards, leadership & community</h4></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">{achievements.map((item) => <div key={item.title} className="p-3 rounded-xl bg-secondary/40 border border-border"><p className="text-xs font-bold">{item.title}</p><p className="text-[11px] text-muted-foreground mt-1">{item.subtitle}</p></div>)}</div></motion.div>
  </div></section>;
};
export default BentoGrid;
