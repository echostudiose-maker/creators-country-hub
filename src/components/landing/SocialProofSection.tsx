import { motion, useMotionValue, useTransform, animate, useInView, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

const marqueeItems = [
  "Instagram", "✦", "Engajamento", "✦", "Autoridade", "✦", "Vendas", "✦",
  "Comunidade", "✦", "Método MCC", "✦", "127+ Alunos", "✦", "Resultados Reais", "✦", "Mercado Country", "✦",
];

const stats = [
  { number: 127, suffix: "+", label: "Alunos ativos" },
  { number: 90, suffix: "k", label: "Seguidores em 90 dias" },
  { number: 5, suffix: "x", label: "Aumento de faturamento" },
];

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, value, { duration: 1.5, ease: [0.16, 1, 0.3, 1] });
      return animation.stop;
    }
  }, [inView, count, value]);

  useMotionValueEvent(rounded, "change", (latest) => {
    if (ref.current) {
      ref.current.textContent = latest.toLocaleString() + suffix;
    }
  });

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

const SocialProofSection = () => (
  <section className="section-light overflow-hidden">
    {/* Marquee with deep 3D fade mask */}
    <div className="py-8 overflow-hidden relative">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max px-6">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className={`font-body text-xl md:text-2xl flex items-center gap-12 ${
              item === "✦"
                ? "text-section-light-text/60"
                : "text-section-light-text/40"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      {/* 3D Deep Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-section-light via-section-light/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-section-light via-section-light/80 to-transparent z-10 pointer-events-none" />
    </div>

    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-3 gap-8 md:gap-10">
      {stats.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-section-light-text/5 rounded-[2rem] p-10 bg-section-light-text/[0.01] hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-section-light-text/5 group"
        >
          <p className="font-body font-semibold text-[clamp(2.5rem,8vw,4.5rem)] leading-none text-section-light-text mb-4">
            <CountUp value={item.number} suffix={item.suffix} />
          </p>
          <p className="font-body text-section-light-text/40 text-lg md:text-xl group-hover:text-section-light-text/60 transition-colors uppercase tracking-widest font-medium text-xs">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SocialProofSection;
