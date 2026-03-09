import { motion } from "framer-motion";

const items = [
  { label: "Mentoria Individual", price: "R$ 2.000" },
  { label: "Curso de Copywriting", price: "R$ 1.500" },
  { label: "Masterclass com Especialista", price: "R$ 1.000" },
  { label: "Comunidade de Negócios", price: "R$ 500/mês" },
  { label: "IA Especializada", price: "R$ 300+/mês" },
];

const ValueAnchorSection = () => (
  <section className="bg-background py-16 md:py-24 border-t border-border/40">
    <div className="max-w-3xl mx-auto px-6 md:px-10">
      <p className="label-caps text-muted-foreground text-center mb-4">Comparativo</p>
      <h2 className="font-body font-semibold text-[clamp(1.9rem,6vw,4rem)] text-foreground text-center leading-[0.95] mb-10">
        Quanto custaria
        <br />
        <span className="headline-serif-italic">tudo isso</span>
      </h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex justify-between rounded-xl border border-border/50 p-4"
          >
            <span className="text-foreground/70">{item.label}</span>
            <span className="text-muted-foreground line-through">{item.price}</span>
          </motion.div>
        ))}
        <div className="flex justify-between rounded-xl border-2 border-foreground/20 p-4">
          <span className="font-semibold text-foreground">TOTAL SEPARADO</span>
          <span className="font-semibold text-muted-foreground line-through">R$ 5.300+</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-2xl border-2 border-foreground/20 bg-card p-8 text-center"
      >
        <p className="label-caps text-muted-foreground mb-2">✓ Tudo junto</p>
        <p className="font-body font-semibold text-[clamp(2.5rem,8vw,4.5rem)] text-foreground leading-none">R$ 997</p>
        <p className="text-muted-foreground mt-2">com acesso perpétuo</p>
      </motion.div>
    </div>
  </section>
);

export default ValueAnchorSection;