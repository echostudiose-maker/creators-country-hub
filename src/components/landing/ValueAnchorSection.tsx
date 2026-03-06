import { motion } from "framer-motion";

const items = [
  { label: "Mentoria Individual com Bah", price: "R$ 2.000" },
  { label: "Curso de Copywriting", price: "R$ 1.500" },
  { label: "Masterclass com Especialista", price: "R$ 1.000" },
  { label: "Acesso Comunidade de Negócios", price: "R$ 500/mês" },
  { label: "IA Especializada", price: "R$ 300+/mês" },
];

const ValueAnchorSection = () => (
  <section className="py-20 md:py-28 bg-secondary relative">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
    </div>
    <div className="relative max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Quanto Custaria Tudo Isso Separado?
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-3 w-full"
        >
          {items.map((item, i) => (
            <div key={i} className="flex justify-between items-center rounded-xl p-4 border border-border bg-card/30">
              <span className="text-foreground/80 text-sm">{item.label}</span>
              <span className="text-muted-foreground line-through font-semibold">{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center rounded-xl p-4 border-2 border-border bg-card/50">
            <span className="font-bold text-foreground">TOTAL SEPARADO</span>
            <span className="font-bold text-foreground text-xl line-through">R$ 5.300+</span>
          </div>
        </motion.div>

        <div className="text-3xl text-primary font-bold hidden lg:block">→</div>
        <div className="text-3xl text-primary font-bold lg:hidden">↓</div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="rounded-xl p-8 text-center border-2 border-success/50 bg-success/5 glow-purple" style={{ boxShadow: '0 0 60px -12px hsl(145 63% 49% / 0.2)' }}>
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
