import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Estratégia",
    desc: "Analisamos seu perfil, definimos seu diferencial e traçamos a rota de conteúdo.",
    icon: "🎯",
  },
  {
    num: "02",
    title: "Criação",
    desc: "Uso do BahGPT e roteiros validados para produzir vídeos que retêm e convertem.",
    icon: "🎬",
  },
  {
    num: "03",
    title: "Escala",
    desc: "Ajuste fino semanal e impulsionamento estratégico para multiplicar seus resultados.",
    icon: "🚀",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="label-caps text-muted-foreground mb-4">Metodologia</p>
          <h2 className="font-body font-semibold text-[clamp(2.2rem,7vw,4.8rem)] leading-[0.92] text-foreground">
            Como funciona o
            <br />
            <span className="headline-serif-italic">nosso processo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector Arrows (Desktop) */}
          <div className="absolute top-1/4 left-[30%] w-[15%] h-12 hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
              <path d="M0 20C25 5 75 35 100 20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-foreground/10" />
              <path d="M95 15L100 20L95 25" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-[64%] w-[15%] h-12 hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
              <path d="M0 20C25 5 75 35 100 20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-foreground/10" />
              <path d="M95 15L100 20L95 25" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative text-center md:text-left group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-[2rem] bg-card border border-border/50 flex items-center justify-center text-3xl mb-8 mx-auto md:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-section-light text-section-light-text text-sm font-bold flex items-center justify-center border-4 border-background">
                  {step.num}
                </div>
              </div>
              
              <h3 className="font-body font-semibold text-2xl text-foreground mb-4">{step.title}</h3>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Step Card (optional callout) */}
        <motion.div 
          className="mt-20 md:mt-32 p-8 md:p-12 rounded-[2.5rem] bg-accent/5 border border-accent/10 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 blur-[80px] rounded-full" />
          <p className="font-body text-foreground text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            "Não é sobre postar mais, é sobre postar <span className="italic underline underline-offset-4 decoration-accent/30 font-bold">o que importa</span> para as pessoas certas."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
