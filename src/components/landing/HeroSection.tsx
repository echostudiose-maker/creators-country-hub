import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(265 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(265 80% 60%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-5 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.15] text-foreground mb-8"
        >
          Cresça de 5 a 10 mil seguidores qualificados por mês e transforme o seu Instagram em uma máquina de{" "}
          <span className="text-gradient">engajamento, autoridade e vendas</span>{" "}
          com o MCC.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-[700px] mx-auto"
        >
          O método que 127+ criadores e empresários usaram para virar referência
          no mercado country
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary">
              <path d="M7 2v10m0 0l4-4m-4 4L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
