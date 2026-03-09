import { motion } from "framer-motion";

const pains = [
  {
    emoji: "📱",
    text: "Postou todos os dias e nenhum vídeo viralizou",
  },
  {
    emoji: "✍️",
    text: "Foi criar o seu roteiro e travou na hora de escrever",
  },
  {
    emoji: "📈",
    text: "Viu pessoas com menos seguidores crescendo mais rápido que você",
  },
  {
    emoji: "🔄",
    text: "Fez Dancinha. Participou de Trend. Usou música em alta. E nada funcionou.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const PainSection = () => (
  <section className="section-dark py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-bg-subtle opacity-60 pointer-events-none" />

    <div className="relative max-w-5xl mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* ── Left: headline ── */}
        <div className="md:sticky md:top-32">
          <motion.p
            className="label-caps text-accent mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Soa familiar?
          </motion.p>
          <motion.h2
            className="headline-editorial text-[clamp(2.8rem,6vw,5rem)] text-foreground leading-[0.92]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Levanta
            <br />
            <span className="headline-serif-italic text-gradient">um dedo</span>
            <br />
            se você já:
          </motion.h2>
          <motion.div
            className="mt-8 w-12 h-px bg-primary/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </div>

        {/* ── Right: pain items ── */}
        <motion.div
          className="space-y-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pains.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group flex items-start gap-5 py-7 border-b border-border/50 last:border-0"
            >
              <span className="text-2xl mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200">
                {p.emoji}
              </span>
              <p className="font-body text-lg md:text-xl text-foreground/70 leading-[1.6] group-hover:text-foreground transition-colors duration-300">
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default PainSection;
