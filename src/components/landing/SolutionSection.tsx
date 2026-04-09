import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pillars = [
  { title: "Posicionamento", desc: "Você define linguagem, diferenciação e promessa que seu público entende em segundos." },
  { title: "Copy que converte", desc: "Cada vídeo, story e legenda passa a gerar ação: comentário, DM e venda." },
  { title: "Conteúdo escalável", desc: "Sistema com pauta recorrente para nunca mais depender de ideia aleatória." },
  { title: "Parcerias estratégicas", desc: "Conexões com empresários e criadores para gerar negócios reais." },
  { title: "Mentoria semanal", desc: "Ajuste de rota ao vivo para acelerar resultado e evitar erros caros." },
  { title: "IA especializada", desc: "Roteiros, ganchos e legendas com contexto do seu nicho em segundos." },
];

const SolutionSection = () => (
  <section id="solution" className="section-light py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <motion.p className="label-caps text-section-light-text/45 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Services
      </motion.p>
      <motion.h2
        className="font-body font-semibold text-[clamp(2.2rem,7vw,4.8rem)] text-section-light-text leading-[0.95] mb-10 md:mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Como vamos
        <br />
        acelerar seu
        <br />
        <span className="headline-serif-italic">crescimento</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-section-light-text/10 p-6 bg-background/20"
          >
            <div className="w-8 h-8 rounded-lg bg-section-light-text text-section-light flex items-center justify-center mb-4">
              <Check className="w-4 h-4" />
            </div>
            <h3 className="font-body font-semibold text-section-light-text text-xl mb-2">{p.title}</h3>
            <p className="font-body text-section-light-text/60 leading-[1.65]">{p.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
