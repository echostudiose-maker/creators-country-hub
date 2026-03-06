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
  <section className="py-16 md:py-20 bg-background">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
      >
        O Que Você Recebe
      </motion.h2>
      <div className="space-y-8">
        {deliverables.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-5"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              {d.num}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
              <ul className="space-y-1">
                {d.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed">
                    • {item}
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
