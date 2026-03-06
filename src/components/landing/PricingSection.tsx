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
    price: "12x de R$ 103",
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
  <section id="pricing" className="py-20 md:py-28 bg-background relative">
    <div className="absolute inset-0 gradient-bg-subtle" />
    <div className="relative max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Escolha Seu Plano
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className={`relative rounded-xl p-8 text-center transition-all duration-300 ${
              p.featured
                ? "border-2 border-primary bg-card/80 scale-[1.05] glow-purple"
                : "border border-border bg-card/50"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-purple text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                🔥 {p.badge}
              </span>
            )}
            <h3 className="text-lg font-semibold text-muted-foreground mb-4">{p.title}</h3>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{p.price}</p>
            <p className="text-muted-foreground text-sm mb-6">{p.sub}</p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full gradient-purple text-primary-foreground font-bold py-3.5 rounded-xl hover:-translate-y-1 hover:shadow-[0_8px_30px_-6px_hsl(265_80%_60%_/_0.5)] transition-all duration-300"
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
