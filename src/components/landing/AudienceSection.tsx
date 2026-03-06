import { motion } from "framer-motion";

const audiences = [
  { emoji: "🎬", title: "Criador de Conteúdo", desc: "Quer transformar seu Instagram em fonte de renda consistente, fechar parcerias e virar referência no seu nicho." },
  { emoji: "💼", title: "Empresário / Dono de Negócio", desc: "Precisa dominar o Instagram para vender seus produtos ou serviços e conectar com influenciadores certos." },
  { emoji: "🌟", title: "Influenciador / Artista", desc: "Quer ampliar seu alcance, monetizar melhor sua audiência e fechar parcerias com marcas maiores." },
  { emoji: "🚀", title: "Empreendedor Digital", desc: "Busca uma estratégia completa para crescer do zero e gerar receita consistente via Instagram." },
];

const AudienceSection = () => (
  <section className="py-16 md:py-20 bg-muted">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
      >
        Pra Quem É o Creators Country?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card border-2 border-primary/30 rounded-lg p-6 text-center hover-lift"
          >
            <div className="text-[2.5rem] mb-3">{a.emoji}</div>
            <h3 className="text-lg font-bold text-primary mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
