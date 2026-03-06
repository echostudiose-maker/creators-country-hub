import { motion } from "framer-motion";

const pains = [
  "Postou todos os dias e nenhum vídeo viralizou",
  "Foi criar o seu roteiro e travou na hora de escrever",
  "Viu pessoas com menos seguidores crescendo mais rápido que você",
  "Fez Dancinha. Participou de Trend. Usou música em alta. E nada funcionou",
];

const PainSection = () => (
  <section className="py-20 md:py-28 bg-background relative">
    <div className="absolute inset-0 gradient-bg-subtle opacity-50" />
    <div className="relative max-w-[700px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Levanta um dedo se você já:
      </motion.h2>
      <div className="space-y-5">
        {pains.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="flex items-start gap-4 group"
          >
            <span className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-primary group-hover:shadow-[0_0_12px_hsl(265_80%_60%)] transition-shadow" />
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
              {p}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
