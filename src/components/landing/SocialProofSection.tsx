import { motion } from "framer-motion";

const stats = [
  { number: "127+", label: "Alunos Ativos na Comunidade", icon: "👥" },
  { number: "R$1.2M+", label: "Vendas Geradas em 2024", icon: "💰" },
  { number: "30 dias", label: "Tempo Médio para 1º Resultado", icon: "⚡" },
];

const strips = [
  "Método MCC", "127+ Alunos", "Resultados Reais", "Mercado Country",
  "Instagram", "Engajamento", "Autoridade", "Vendas", "Comunidade",
  "Método MCC", "127+ Alunos", "Resultados Reais", "Mercado Country",
  "Instagram", "Engajamento", "Autoridade", "Vendas", "Comunidade",
];

const SocialProofSection = () => (
  <section className="section-light py-0 overflow-hidden">
    {/* ── Marquee strip ── */}
    <div className="bg-primary/90 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {strips.map((item, i) => (
          <span key={i} className="font-body font-medium text-primary-foreground/90 text-xs md:text-sm mx-6 md:mx-8 shrink-0">
            {item} <span className="text-accent mx-3 md:mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>

    {/* ── Stats ── */}
    <div className="max-w-5xl mx-auto px-5 md:px-10 py-12 md:py-20">
      <motion.p
        className="label-caps text-center text-section-light-text/50 mb-8 md:mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Resultados comprovados
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-section-light-text/10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-section-light p-8 md:p-12 text-center"
          >
            <p className="text-3xl md:text-4xl mb-2">{s.icon}</p>
            <p className="font-display font-black text-[2.6rem] md:text-[3.2rem] leading-none mb-2 md:mb-3 text-gradient">
              {s.number}
            </p>
            <p className="font-body text-xs md:text-sm text-section-light-text/60 leading-snug max-w-[160px] mx-auto">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
