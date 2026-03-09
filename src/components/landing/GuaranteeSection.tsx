import { motion } from "framer-motion";

const GuaranteeSection = () => (
  <section className="section-light py-16 md:py-24 border-t border-section-light-text/10">
    <div className="max-w-4xl mx-auto px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-section-light-text/15 p-8 md:p-14 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-section-light-text/20 flex items-center justify-center shrink-0">
          <span className="font-body font-bold text-[3.5rem] md:text-[5rem] text-section-light-text">7</span>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-body font-semibold text-2xl text-section-light-text mb-4">
            7 dias de garantia incondicional
          </h3>
          <p className="font-body text-section-light-text/60 leading-[1.8]">
            Se por qualquer motivo você não gostar, o reembolso é automático via Hotmart — sem burocracia, sem perguntas.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;