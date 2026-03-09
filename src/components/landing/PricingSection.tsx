import { motion } from "framer-motion";

const CTA_URL = "https://hotm.art/7GmUn4q";

const plans = [
  {
    title: "À Vista",
    price: "R$ 997",
    sub: "Acesso imediato a TUDO",
    cta: "Quero Agora",
    featured: false,
  },
  {
    title: "Parcelado",
    price: "12x R$103",
    sub: "Total R$ 1.236 (parcelado)",
    cta: "Garantir Vaga",
    featured: true,
    badge: "MAIS ESCOLHIDO",
  },
  {
    title: "Plano Anual",
    price: "R$ 1.997",
    sub: "Acesso vitalício + bônus",
    cta: "Conhecer Bônus",
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-dark py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-bg-subtle pointer-events-none" />

    <div className="relative max-w-5xl mx-auto px-6 md:px-10">
      <motion.p
        className="label-caps text-accent text-center mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Investimento
      </motion.p>
      <motion.h2
        className="headline-editorial text-[clamp(2.5rem,5.5vw,4.5rem)] text-foreground text-center leading-[0.92] mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Escolha seu <span className="headline-serif-italic text-gradient">plano</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            className={`relative rounded-xl p-8 md:p-10 text-center transition-all duration-300 ${
              p.featured
                ? "border-2 border-primary bg-card/80 scale-[1.03] md:scale-[1.05]"
                : "border border-border/60 bg-card/30"
            }`}
            style={p.featured ? { boxShadow: "0 0 60px -15px hsl(265 80% 60% / 0.4)" } : undefined}
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground label-caps text-[0.65rem] px-4 py-1 rounded-full">
                🔥 {p.badge}
              </span>
            )}
            <p className="font-body font-medium text-sm text-muted-foreground mb-5">{p.title}</p>
            <p className="font-display font-black text-4xl md:text-5xl text-foreground mb-2">{p.price}</p>
            <p className="font-body text-xs text-muted-foreground mb-8">{p.sub}</p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block w-full font-body font-semibold text-sm py-4 rounded-full transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "gradient-primary text-primary-foreground hover:shadow-[0_12px_40px_-8px_hsl(265_80%_60%_/_0.5)]"
                  : "bg-foreground/10 text-foreground hover:bg-foreground/20"
              }`}
            >
              {p.cta} →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
