import { motion } from "framer-motion";

const stats = [
  { number: "6+", label: "Anos no Mercado" },
  { number: "R$1.2M+", label: "Faturamento dos Alunos" },
  { number: "127+", label: "Alunos Ativos" },
  { number: "98%", label: "Taxa de Aprovação" },
];

const AuthoritySection = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-secondary-foreground text-center mb-8"
      >
        Quem É Bah Storani?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-10 mb-12"
      >
        {/* Placeholder for photo */}
        <div className="w-48 h-48 rounded-full bg-secondary-foreground/10 flex items-center justify-center flex-shrink-0">
          <span className="text-6xl">🤠</span>
        </div>

        <p className="text-secondary-foreground/80 leading-[1.9] max-w-[700px] text-center lg:text-left">
          Há 6 anos trabalho exclusivamente com criadores e empresários do meio
          country. Nasci no Instagram, entendo como funciona a plataforma, os
          algoritmos, a psicologia do público e — o mais importante — como
          transformar tudo isso em dinheiro de verdade. Trabalhei com centenas de
          criadores que saíram do zero e chegaram a ganhar 5 dígitos por mês. Meu
          compromisso é: você aprende o que funciona de verdade, não teoria vaga.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="text-center bg-secondary-foreground/5 border border-accent/30 rounded-lg p-5"
          >
            <p className="text-2xl md:text-3xl font-bold text-accent">{s.number}</p>
            <p className="text-secondary-foreground/60 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthoritySection;
