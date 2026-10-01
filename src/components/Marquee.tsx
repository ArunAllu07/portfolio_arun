const words = [
  "DATA-DRIVEN", "INSIGHT-LED", "ANALYTICAL", "EXPERIMENTAL", "MEASURABLE", "PYTHON & SQL", "APPLIED AI", "IMPACTFUL"
];

const Marquee = () => {
  return (
    <div className="relative py-6 overflow-hidden bg-accent rotate-[-2deg] scale-105 my-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words].map((word, i) => (
          <span key={i} className="mx-6 text-sm md:text-base font-bold uppercase tracking-widest text-accent-foreground flex items-center gap-4">
            ✦ {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
