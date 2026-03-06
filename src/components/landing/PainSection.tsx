import { motion } from "framer-motion";

const pains = [
  {
    emoji: "📱",
    title: "Posta e ninguém responde",
    desc: "Investe horas em conteúdo, mas o Instagram não traz clientes. Parece que você fala sozinho.",
  },
  {
    emoji: "💭",
    title: "Trava na hora de criar",
    desc: "Sente aquele branco quando abre o app para gravar. Não sabe o que postar e perde dias travado.",
  },
  {
    emoji: "🏆",
    title: "Vê concorrente pior ganhando",
    desc: "Tem gente menos qualificada que você com 10x mais seguidores e vendendo mais. Isso dói.",
  },
  {
    emoji: "🔄",
    title: "Tentou de tudo e nada funciona",
    desc: "Hackezinhos, dancinhas, follow/unfollow… nada te coloca em prateleira. Você tá cansado.",
  },
];

const PainSection = () => (
  <section className="py-16 md:py-20 bg-muted">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
      >
        Você se identifica com alguma dessas situações?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pains.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-lg p-6 border-l-4 border-l-primary shadow-sm hover-lift"
          >
            <h3 className="text-lg font-bold text-foreground mb-2">
              <span className="mr-2">{p.emoji}</span>
              {p.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
