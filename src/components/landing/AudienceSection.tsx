import { motion } from "framer-motion";

const audiences = [
  { emoji: "🎬", title: "Criador de Conteúdo", desc: "Quer transformar seu Instagram em fonte de renda consistente, fechar parcerias e virar referência no seu nicho." },
  { emoji: "💼", title: "Empresário / Dono de Negócio", desc: "Precisa dominar o Instagram para vender seus produtos ou serviços e conectar com influenciadores certos." },
  { emoji: "🌟", title: "Influenciador / Artista", desc: "Quer ampliar seu alcance, monetizar melhor sua audiência e fechar parcerias com marcas maiores." },
  { emoji: "🚀", title: "Empreendedor Digital", desc: "Busca uma estratégia completa para crescer do zero e gerar receita consistente via Instagram." },
];

const AudienceSection = () => (
  <section className="py-20 md:py-28 bg-background relative">
    <div className="absolute inset-0 gradient-bg-subtle opacity-50" />
    <div className="relative max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Pra Quem É o Creators Country?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl p-6 text-center border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover-lift"
          >
            <div className="text-[2.5rem] mb-4">{a.emoji}</div>
            <h3 className="text-lg font-bold text-gradient mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
