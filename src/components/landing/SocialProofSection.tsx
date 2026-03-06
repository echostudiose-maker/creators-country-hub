import { motion } from "framer-motion";

const stats = [
  { number: "127+", label: "Alunos Ativos na Comunidade" },
  { number: "R$1.2M+", label: "Vendas Geradas em 2024" },
  { number: "30 dias", label: "Tempo Médio para 1º Resultado" },
];

const SocialProofSection = () => (
  <section className="py-16 md:py-20 bg-secondary relative">
    <div className="absolute inset-0 gradient-bg-subtle opacity-30" />
    <div className="relative max-w-[900px] mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-xl p-8 text-center border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors"
          >
            <p className="text-[2.8rem] font-bold text-gradient leading-none mb-3">
              {s.number}
            </p>
            <p className="text-[0.95rem] text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
