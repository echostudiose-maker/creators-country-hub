import { motion } from "framer-motion";

const deliverables = [
  {
    num: "01",
    title: "Rota 66 — Curso completo (40+ aulas)",
    items: ["Posicionamento e marca", "Copy e gatilhos", "Funil de conteúdo", "Parcerias e negociação"],
  },
  {
    num: "02",
    title: "Mentorias semanais ao vivo",
    items: ["Toda quarta com análise de perfil", "Correção de rota imediata", "Gravadas para rever depois"],
  },
  {
    num: "03",
    title: "Comunidade exclusiva",
    items: ["Criadores + Empresários do mercado country", "Networking que gera negócios reais"],
  },
  {
    num: "04",
    title: "BahGPT — IA de conteúdo",
    items: ["Roteiros em segundos", "Legendas e ganchos prontos"],
  },
  {
    num: "05",
    title: "O Pódio — Masterclasses",
    items: ["Convidados que já alcançaram o sucesso", "Casos reais do mercado"],
  },
];

const DeliverablesSection = () => (
  <section id="deliverables" className="section-light py-16 md:py-24 border-t border-section-light-text/10">
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <motion.p className="label-caps text-section-light-text/45 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Entregáveis
      </motion.p>
      <motion.h2
        className="font-body font-semibold text-[clamp(2.2rem,7vw,4.8rem)] text-section-light-text leading-[0.95] mb-10 md:mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        O que você
        <br />
        <span className="headline-serif-italic">recebe</span>
      </motion.h2>

      <div className="space-y-4">
        {deliverables.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-section-light-text/10 p-6 flex flex-col sm:flex-row gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-section-light-text text-section-light flex items-center justify-center font-body font-semibold text-lg shrink-0">
              {d.num}
            </div>
            <div className="flex-1">
              <h3 className="font-body font-semibold text-section-light-text text-xl mb-2">{d.title}</h3>
              <ul className="space-y-1.5">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-section-light-text/60 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-section-light-text/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverablesSection;
