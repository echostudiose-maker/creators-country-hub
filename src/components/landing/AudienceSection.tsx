import { motion } from "framer-motion";

const audiences = [
  { emoji: "🎬", title: "Criador de Conteúdo", desc: "Quer transformar seu Instagram em fonte de renda consistente, fechar parcerias e virar referência no seu nicho." },
  { emoji: "💼", title: "Empresário / Dono de Negócio", desc: "Precisa dominar o Instagram para vender seus produtos ou serviços e conectar com influenciadores certos." },
  { emoji: "🌟", title: "Influenciador / Artista", desc: "Quer ampliar seu alcance, monetizar melhor sua audiência e fechar parcerias com marcas maiores." },
  { emoji: "🚀", title: "Empreendedor Digital", desc: "Busca uma estratégia completa para crescer do zero e gerar receita consistente via Instagram." },
];

const AudienceSection = () => (
  <section className="section-dark py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-bg-subtle opacity-40 pointer-events-none" />

    <div className="relative max-w-5xl mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left */}
        <div>
          <motion.p
            className="label-caps text-accent mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Para quem é
          </motion.p>
          <motion.h2
            className="headline-editorial text-[clamp(2.5rem,5.5vw,4.5rem)] text-foreground leading-[0.92]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Pra quem é o
            <br />
            <span className="headline-serif-italic text-gradient">Creators Country?</span>
          </motion.h2>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="p-6 rounded-lg border border-border/60 bg-card/40 hover:border-primary/30 transition-all duration-300 card-glow text-center"
            >
              <div className="text-3xl mb-4">{a.emoji}</div>
              <h3 className="font-display font-bold text-base text-foreground mb-2">{a.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-[1.7]">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AudienceSection;
