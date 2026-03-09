import { motion, type Variants } from "framer-motion";

const pains = [
  { emoji: "📱", text: "Posta todos os dias e ainda sente que ninguém certo te vê." },
  { emoji: "✍️", text: "Trava na hora de criar roteiro e perde horas para publicar algo simples." },
  { emoji: "📉", text: "Tem alcance, mas não converte seguidores em clientes e parcerias." },
  { emoji: "🔁", text: "Repete trends sem estratégia e continua no mesmo nível de faturamento." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const PainSection = () => (
  <section className="section-light py-16 md:py-24 border-t border-section-light-text/10">
    <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-20">
      <div>
        <p className="label-caps text-section-light-text/50 mb-4">Diagnóstico</p>
        <h2 className="font-body font-semibold text-[clamp(2.2rem,7vw,4.8rem)] leading-[0.92] text-section-light-text">
          O que está
          <br />
          travando seu
          <br />
          <span className="headline-serif-italic">crescimento</span>
        </h2>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {pains.map((p, i) => (
          <motion.div key={i} variants={item} className="flex items-start gap-4 py-6 border-b border-section-light-text/12 last:border-0">
            <span className="text-2xl">{p.emoji}</span>
            <p className="font-body text-section-light-text/70 text-lg leading-[1.55]">{p.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PainSection;
