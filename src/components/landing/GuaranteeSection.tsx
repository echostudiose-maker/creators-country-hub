import { motion } from "framer-motion";

const GuaranteeSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="max-w-5xl mx-auto px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-border p-8 md:p-14 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0">
          <span className="font-body font-bold text-[4rem] md:text-[6rem] text-gradient">7</span>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-body font-semibold text-2xl text-foreground mb-4">
            7 dias de garantia incondicional
          </h3>
          <p className="font-body text-muted-foreground leading-[1.8]">
            Se por qualquer motivo você não gostar, o reembolso é automático via Hotmart — sem burocracia, sem perguntas.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
