import { motion } from "framer-motion";
import bahHorse from "@/assets/bah-horse.png";

const stats = [
  { number: "6+", label: "Anos no Mercado" },
  { number: "R$1.2M+", label: "Faturamento dos Alunos" },
  { number: "127+", label: "Alunos Ativos" },
  { number: "98%", label: "Taxa de Aprovação" },
];

const AuthoritySection = () => (
  <section className="section-dark py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-bg-subtle opacity-50 pointer-events-none" />

    <div className="relative max-w-5xl mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
        {/* Left: photo + name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto md:mx-0 border-2 border-primary/30 mb-6"
            style={{ boxShadow: "0 0 60px -15px hsl(265 80% 60% / 0.4)" }}
          >
            <img src={bahHorse} alt="Bah Storani" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-1">Bah Storani</h2>
          <p className="label-caps text-accent">Fundadora do MCC</p>
        </motion.div>

        {/* Right: bio + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <motion.p
            className="label-caps text-muted-foreground mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Quem é Bah Storani?
          </motion.p>

          <p className="font-body text-foreground/70 leading-[1.9] mb-10 text-base md:text-lg">
            Há 6 anos trabalho exclusivamente com criadores e empresários do meio
            country. Nasci no Instagram, entendo como funciona a plataforma, os
            algoritmos, a psicologia do público e — o mais importante — como
            transformar tudo isso em dinheiro de verdade.
            <br /><br />
            Trabalhei com centenas de criadores que saíram do zero e chegaram a ganhar
            5 dígitos por mês. Meu compromisso é: você aprende o que funciona de verdade,
            não teoria vaga.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                className="text-center p-4 rounded-lg border border-border/50 bg-card/30"
              >
                <p className="font-display font-black text-2xl text-gradient">{s.number}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
