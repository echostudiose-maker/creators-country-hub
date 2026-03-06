import { motion } from "framer-motion";

const stats = [
  { number: "127+", label: "Alunos Ativos na Comunidade" },
  { number: "R$1.2M+", label: "Vendas Geradas em 2024" },
  { number: "30 dias", label: "Tempo Médio para 1º Resultado" },
];

const SocialProofSection = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="max-w-[900px] mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-lg p-8 text-center shadow-sm border border-border"
          >
            <p className="text-[2.8rem] font-bold text-primary leading-none mb-2">
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
