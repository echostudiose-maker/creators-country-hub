import { motion } from "framer-motion";

const deliverables = [
  {
    num: 1,
    title: "Rota 66 para Instagram (40+ Aulas)",
    items: ["Módulo 1: Posicionamento e Marca Pessoal", "Módulo 2: Copy e Gatilhos Psicológicos", "Módulo 3: Funil de Conteúdo", "Módulo 4: Parcerias e Negociações"],
  },
  {
    num: 2,
    title: "Mentorias Semanais Ao Vivo",
    items: ["Eu estou em chamada ao vivo com você. Você traz suas dúvidas, eu ajudo.", "Todas as quartas-feiras", "Gravadas para assistir depois"],
  },
  {
    num: 3,
    title: "Comunidade Exclusiva (Criadores + Empresários)",
    items: ["Um espaço fechado onde criadores conhecem empresários de verdade.", "Networking que gera lucro"],
  },
  {
    num: 4,
    title: "BahGPT (IA Especializada no Seu Nicho)",
    items: ["Você pede: 'Preciso de 5 ideias de posts para segunda' e recebe prontas em segundos.", "Legendas, roteiros, tudo mastigadinho"],
  },
  {
    num: 5,
    title: "O Pódio (Masterclasses com Especialistas)",
    items: ["Aulas gravadas com pessoas que já conquistaram o sucesso", "Você aprende com quem realmente vive isso"],
  },
];

const DeliverablesSection = () => (
  <section className="py-16 md:py-28 bg-secondary relative">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-[100px]" />
    </div>
    <div className="relative max-w-[800px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10 md:mb-14"
      >
        O Que Você Recebe
      </motion.h2>
      <div className="space-y-5 md:space-y-6">
        {deliverables.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-4 md:gap-5 group"
          >
            <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl gradient-primary flex items-center justify-center font-bold text-base md:text-lg text-primary-foreground">
              {d.num}
            </div>
            <div className="border-b border-border/50 pb-5 md:pb-6 flex-1">
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{d.title}</h3>
              <ul className="space-y-1.5">
                {d.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-primary/60 mt-1 shrink-0">•</span>
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
