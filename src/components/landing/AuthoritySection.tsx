import { motion } from "framer-motion";
import bahHorse from "@/assets/bah-horse.png";

const stats = [
  { number: "6+", label: "Anos no Mercado" },
  { number: "R$1.2M+", label: "Faturamento dos Alunos" },
  { number: "127+", label: "Alunos Ativos" },
  { number: "98%", label: "Taxa de Aprovação" },
];

const AuthoritySection = () => (
  <section className="section-light py-16 md:py-24 border-t border-section-light-text/10">
    <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[260px_1fr] gap-10 md:gap-16">
      <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-center md:text-left">
        <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto md:mx-0 border-2 border-section-light-text/15 mb-5">
          <img src={bahHorse} alt="Bah Storani" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h2 className="font-body font-semibold text-xl text-section-light-text mb-1">Bah Storani</h2>
        <p className="label-caps text-section-light-text/50">Fundadora do MCC</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="label-caps text-section-light-text/45 mb-4">Quem é Bah</p>
        <p className="font-body text-section-light-text/70 leading-[1.85] text-lg mb-10">
          Há 6 anos trabalho com criadores e empresários do mercado country. Entendo algoritmos, psicologia do público e principalmente: como transformar conteúdo em faturamento real.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl border border-section-light-text/10 p-4 text-center">
              <p className="font-body font-bold text-2xl text-section-light-text">{s.number}</p>
              <p className="font-body text-xs text-section-light-text/50 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AuthoritySection;