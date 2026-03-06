import { motion } from "framer-motion";

const items = [
  { label: "Mentoria Individual com Bah", price: "R$ 2.000" },
  { label: "Curso de Copywriting", price: "R$ 1.500" },
  { label: "Masterclass com Especialista", price: "R$ 1.000" },
  { label: "Acesso Comunidade de Negócios", price: "R$ 500/mês" },
  { label: "IA Especializada", price: "R$ 300+/mês" },
];

const ValueAnchorSection = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
      >
        Quanto Custaria Tudo Isso Separado?
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left: individual items */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-3 w-full"
        >
          {items.map((item, i) => (
            <div key={i} className="flex justify-between items-center bg-muted rounded-lg p-4">
              <span className="text-foreground text-sm">{item.label}</span>
              <span className="text-muted-foreground line-through font-semibold">{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center bg-muted rounded-lg p-4 border-2 border-border">
            <span className="font-bold text-foreground">TOTAL SEPARADO</span>
            <span className="font-bold text-foreground text-xl line-through">R$ 5.300+</span>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="text-3xl text-accent font-bold hidden lg:block">→</div>
        <div className="text-3xl text-accent font-bold lg:hidden">↓</div>

        {/* Right: the deal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="bg-success/10 border-2 border-success rounded-lg p-8 text-center">
            <p className="text-success font-bold text-sm uppercase tracking-wider mb-2">
              ✅ Tudo junto na Creators Country
            </p>
            <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">R$ 997</p>
            <p className="text-muted-foreground text-sm">com acesso perpétuo</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ValueAnchorSection;
