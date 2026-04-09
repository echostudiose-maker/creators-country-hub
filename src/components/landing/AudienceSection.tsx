import { motion } from "framer-motion";

const audiences = [
  { emoji: "🎬", title: "Criador de Conteúdo", desc: "Transformar seu perfil em fonte de renda e autoridade no nicho." },
  { emoji: "💼", title: "Empresário", desc: "Vender via Instagram conectando com influenciadores certos." },
  { emoji: "🌟", title: "Influenciador / Artista", desc: "Monetizar melhor sua audiência e fechar parcerias grandes." },
  { emoji: "🚀", title: "Empreendedor Digital", desc: "Estratégia para crescer do zero e gerar receita consistente." },
];

const AudienceSection = () => (
  <section className="section-light py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-20">
      <div>
        <p className="label-caps text-section-light-text/45 mb-4">Para quem é</p>
        <h2 className="font-body font-semibold text-[clamp(2.2rem,7vw,4.8rem)] text-section-light-text leading-[0.95]">
          Criadores e
          <br />
          empresários
          <br />
          <span className="headline-serif-italic">do country</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-section-light-text/10 p-5 text-center"
          >
            <span className="text-3xl">{a.emoji}</span>
            <h3 className="font-body font-semibold text-section-light-text mt-2">{a.title}</h3>
            <p className="font-body text-section-light-text/55 text-sm mt-1 leading-snug">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
