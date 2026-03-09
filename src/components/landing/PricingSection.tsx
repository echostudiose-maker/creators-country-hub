import { motion } from "framer-motion";

const CTA_URL = "https://hotm.art/7GmUn4q";

const plans = [
  { title: "À Vista", price: "R$ 997", sub: "Acesso imediato a tudo", cta: "Quero Agora", featured: false },
  { title: "Parcelado", price: "12x R$ 103", sub: "Total R$ 1.236", cta: "Garantir Vaga", featured: true, badge: "MAIS ESCOLHIDO" },
  { title: "Anual", price: "R$ 1.997", sub: "Acesso vitalício + bônus", cta: "Conhecer Bônus", featured: false },
];

const PricingSection = () => (
  <section id="pricing" className="bg-background py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <p className="label-caps text-muted-foreground text-center mb-4">Investimento</p>
      <h2 className="font-body font-semibold text-[clamp(2.2rem,7vw,4.8rem)] text-foreground text-center leading-[0.95] mb-10 md:mb-14">
        Escolha seu
        <br />
        <span className="headline-serif-italic text-gradient">plano</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 text-center ${p.featured ? "border-2 border-primary bg-card scale-[1.03]" : "border border-border bg-card/40"}`}
            style={p.featured ? { boxShadow: "0 0 60px -20px hsl(265 80% 60% / 0.4)" } : undefined}
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-[0.6rem] font-semibold px-4 py-1 rounded-full">
                🔥 {p.badge}
              </span>
            )}
            <p className="text-muted-foreground font-body mb-4">{p.title}</p>
            <p className="font-body font-semibold text-4xl text-foreground mb-2">{p.price}</p>
            <p className="text-muted-foreground text-sm mb-6">{p.sub}</p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block w-full py-4 rounded-full font-body font-semibold transition-all hover:-translate-y-0.5 ${p.featured ? "gradient-primary text-primary-foreground" : "bg-foreground/10 text-foreground hover:bg-foreground/20"}`}
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
