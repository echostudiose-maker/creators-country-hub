import { motion } from "framer-motion";

const items = [
  { label: "Mentoria Individual", price: "R$ 2.000" },
  { label: "Curso de Copywriting", price: "R$ 1.500" },
  { label: "Masterclass com Especialista", price: "R$ 1.000" },
  { label: "Comunidade de Negócios", price: "R$ 500/mês" },
  { label: "IA Especializada", price: "R$ 300+/mês" },
];

const ValueAnchorSection = () => (
  <section className="section-light py-16 md:py-24 border-t border-section-light-text/10">
    <div className="max-w-3xl mx-auto px-6 md:px-10">
      <p className="label-caps text-section-light-text/45 text-center mb-4">Comparativo</p>
      <h2 className="font-body font-semibold text-[clamp(1.9rem,6vw,4rem)] text-section-light-text text-center leading-[0.95] mb-10">
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
            className="flex justify-between rounded-xl border border-section-light-text/10 p-4"
          >
            <span className="text-section-light-text/70">{item.label}</span>
            <span className="text-section-light-text/50 line-through">{item.price}</span>
          </motion.div>
        ))}
        <div className="flex justify-between rounded-xl border-2 border-section-light-text/20 p-4">
          <span className="font-semibold text-section-light-text">TOTAL SEPARADO</span>
          <span className="font-semibold text-section-light-text/70 line-through">R$ 5.300+</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-2xl border-2 border-section-light-text bg-section-light-text/5 p-8 text-center"
      >
        <p className="label-caps text-section-light-text/60 mb-2">✓ Tudo junto</p>
        <p className="font-body font-semibold text-[clamp(2.5rem,8vw,4.5rem)] text-section-light-text leading-none">R$ 997</p>
        <p className="text-section-light-text/50 mt-2">com acesso perpétuo</p>
      </motion.div>
    </div>
  </section>
);

export default ValueAnchorSection;
