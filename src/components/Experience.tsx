import { motion } from "framer-motion";

const internships = [
  { company: "Vedanta", role: "Data Science Intern", period: "May 2026 – Jun 2026", location: "Raipur, Chhattisgarh", highlights: ["Analyzed 4,400+ SCADA records across 72 pots using Python and Pandas to identify anode-effect patterns and operational risks.", "Engineered 30+ lag, rolling, and trend features for models reaching 86% F1 and 92% ROC-AUC.", "Used SHAP and Isolation Forest to explain predictions and flag 311 anomalous pot-days for operational review.", "Built a bath-temperature forecasting model with 4.81°C MAE and improved RMSE by 4.2%."] },
  { company: "Buyhatke", role: "Product Growth Intern", period: "May 2025 – Aug 2025", location: "Bangalore, India", highlights: ["Contributed to 72% year-over-year growth in site visits and an 11% increase in retention through ideation, bug fixes, and user testing.", "Supported feature improvements associated with 10% month-over-month traffic growth and 0.6 minutes more average browsing time.", "Helped improve price comparison and tracking features, reaching 15% adoption and supporting a 13% revenue lift and 8% lower CAC."] },
  { company: "Mishmash", role: "Product Management Intern", period: "May 2024 – Jul 2024", location: "Raipur, India", highlights: ["Implemented Auto Connect and Chit Chat features with agile methods, increasing user engagement by 36% and retention by 24%.", "Supported roadmap development with market analysis, contributing to a 12% increase in market share.", "Used post-launch feedback to guide improvements to helmet monitoring, reducing monitoring errors by 15%."] },
];

const Experience = () => <section id="work" className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="mb-14">
    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Internships</p>
    <h2 className="font-display text-5xl md:text-7xl tracking-wider">DATA <span className="font-serif-italic text-accent">Experience</span></h2>
  </motion.div>
  <div className="border-t border-border">{internships.map((internship, index) => <motion.article key={internship.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35, delay: index * .08 }} className="group border-b border-border py-8">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4"><div className="flex items-start gap-4"><span className="text-primary font-bold text-lg">0{index + 1}</span><div><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{internship.company}</h3><p className="text-sm text-foreground/80 font-medium mt-1">{internship.role}</p></div></div><div className="text-left md:text-right pl-9 md:pl-0"><p className="text-sm font-medium">{internship.period}</p><p className="text-xs text-muted-foreground">{internship.location}</p></div></div>
    <ul className="mt-4 ml-9 space-y-2">{internship.highlights.map((highlight) => <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed"><span className="text-primary mt-1.5 text-[8px]">✦</span><span>{highlight}</span></li>)}</ul>
  </motion.article>)}</div>
</section>;

export default Experience;
