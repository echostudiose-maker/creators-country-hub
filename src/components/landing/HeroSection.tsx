import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/30 rotate-45" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-accent/30 rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/20 -rotate-12" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 border border-accent/20 rotate-45" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-5 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold leading-tight text-secondary-foreground mb-6"
        >
          Transforme seu Instagram em uma{" "}
          <span className="text-primary">Máquina de Vendas</span> utilizando o
          meu MCC em 30 dias
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-accent mb-10 max-w-[700px] mx-auto"
        >
          O método que 127+ criadores e empresários usaram para virar referência
          no mercado country
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          href="https://hotm.art/7GmUn4q"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg hover:bg-primary/85 hover:scale-105 hover:shadow-xl transition-all duration-200"
        >
          Garantir Minha Vaga Agora
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
