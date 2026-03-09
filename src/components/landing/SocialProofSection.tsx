import { motion } from "framer-motion";

const marqueeItems = [
  "Instagram", "✦", "Engajamento", "✦", "Autoridade", "✦", "Vendas", "✦",
  "Comunidade", "✦", "Método MCC", "✦", "127+ Alunos", "✦", "Resultados Reais", "✦", "Mercado Country", "✦",
];

const stats = [
  { number: "127+", label: "Alunos ativos" },
  { number: "90k", label: "Seguidores em 90 dias" },
  { number: "5x", label: "Aumento de faturamento" },
];

const SocialProofSection = () => (
  <section className="section-light border-y border-section-light-text/10 overflow-hidden">
    <div className="py-5 border-b border-section-light-text/10 overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className={`font-body text-lg md:text-xl ${
              item === "✦"
                ? "text-section-light-text/60"
                : "text-section-light-text/40"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-3 gap-8 md:gap-10">
      {stats.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.55 }}
          className="border border-section-light-text/10 rounded-2xl p-8"
        >
          <p className="font-body font-semibold text-[clamp(2.3rem,7vw,4rem)] leading-none text-section-light-text">{item.number}</p>
          <p className="font-body text-section-light-text/55 mt-2">{item.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SocialProofSection;
