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
  <section id="pricing" className="py-16 md:py-20 bg-secondary">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-secondary-foreground text-center mb-12"
      >
        Escolha Seu Plano
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className={`relative rounded-lg p-8 text-center transition-transform duration-200 ${
              p.featured
                ? "bg-secondary border-2 border-primary scale-[1.05] shadow-2xl"
                : "bg-secondary/80 border border-secondary-foreground/10"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                🔥 {p.badge}
              </span>
            )}
            <h3 className="text-lg font-semibold text-secondary-foreground/70 mb-4">{p.title}</h3>
            <p className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">{p.price}</p>
            <p className="text-secondary-foreground/60 text-sm mb-6">{p.sub}</p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/85 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
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
