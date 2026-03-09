import { motion } from "framer-motion";

const CTA_URL = "https://hotm.art/7GmUn4q";

const PricingSection = () => (
  <section id="pricing" className="section-light py-16 md:py-24 border-t border-section-light-text/10">
    <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-section-light-text/15 p-10 md:p-14"
      >
        <p className="label-caps text-section-light-text/50 mb-4">Acesso completo</p>
        <p className="font-body font-semibold text-[clamp(3rem,10vw,5rem)] text-section-light-text leading-none mb-2">
          R$ 997
        </p>
        <p className="text-section-light-text/50 mb-8">ou 12x de R$ 103</p>
        
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-section-light-text text-section-light px-10 py-4 font-body font-medium text-base hover:opacity-90 transition-opacity"
        >
          Garantir minha vaga
        </a>
        
        <p className="text-section-light-text/40 text-sm mt-6">
          Pagamento seguro via Hotmart • Acesso imediato
        </p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;