import { motion } from "framer-motion";

const GuaranteeSection = () => (
  <section className="py-16 md:py-28 section-dark relative overflow-hidden">
    <div className="absolute inset-0 gradient-bg-subtle opacity-40 pointer-events-none" />

    <div className="relative max-w-5xl mx-auto px-5 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(265 50% 18% / 0.5) 0%, hsl(232 40% 12% / 0.8) 100%)",
          boxShadow: "0 0 80px -20px hsl(265 80% 60% / 0.25), inset 0 1px 0 0 hsl(265 50% 60% / 0.1)",
        }}
      >
        {/* Glowing top bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />

        {/* Border glow effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: "1px solid hsl(265 50% 50% / 0.2)" }}
        />

        <div className="relative flex flex-col md:flex-row items-center gap-7 md:gap-10 p-8 md:p-14">
          {/* Big number 7 */}
          <div className="relative flex-shrink-0">
            <div
              className="w-32 h-32 md:w-52 md:h-52 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, hsl(265 60% 30% / 0.3) 0%, transparent 70%)",
                boxShadow: "0 0 60px 10px hsl(265 80% 50% / 0.15), inset 0 0 40px 10px hsl(265 60% 40% / 0.1)",
                border: "2px solid hsl(265 50% 50% / 0.2)",
              }}
            >
              <span
                className="font-display font-black text-[5rem] md:text-[8rem] leading-none"
                style={{
                  background: "linear-gradient(180deg, hsl(265 60% 50%) 0%, hsl(265 40% 35%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                7
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-lg md:text-2xl text-primary mb-3 md:mb-4">
              E além de tudo, você tem 7 dias de garantia incondicional
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-[1.8] max-w-lg">
              Se por qualquer motivo possível no planeta terra você não gostar da metodologia ou do produto, nossos pagamentos são processados pela Hotmart, seu reembolso é automático. Sem burocracia, sem letras miúdas.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
