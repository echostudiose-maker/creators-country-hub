import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Linkedin, CircleDot } from "lucide-react";
import { useRef } from "react";
import bahHeroCropped from "@/assets/bah-hero-cropped.png";

const CTA_URL = "https://hotm.art/7GmUn4q";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative min-h-screen bg-section-light text-section-light-text overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="px-6 md:px-12 lg:px-16 py-8 md:py-12 flex flex-col justify-between">
          <div className="flex items-center gap-2 font-body font-semibold text-xl">
            <span className="w-7 h-7 rounded-md bg-section-light-text text-section-light flex items-center justify-center text-xs">✷</span>
            Bah
          </div>

          <div className="max-w-[620px] py-8 md:py-12">
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-section-light-text/15 px-3 py-1.5 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" aria-label="Instagram" className="text-section-light-text/70 hover:text-section-light-text transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn" className="text-section-light-text/70 hover:text-section-light-text transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" aria-label="Comunidade" className="text-section-light-text/70 hover:text-section-light-text transition-colors"><CircleDot className="w-4 h-4" /></a>
            </motion.div>

            <motion.h1
              className="font-body font-semibold tracking-tight text-[clamp(2.8rem,10vw,7.2rem)] leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              Crescimento
              <br />
              que vende
              <br />
              <span className="headline-serif-italic">de verdade</span>
            </motion.h1>

            <motion.p
              className="font-body text-section-light-text/55 text-[clamp(1rem,2.6vw,2rem)] leading-[1.35] max-w-[18ch] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Estratégia, conteúdo e posicionamento para transformar Instagram em autoridade e faturamento.
            </motion.p>

            <motion.a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-section-light-text text-section-light px-8 py-4 font-body font-semibold hover:opacity-90 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Entrar agora
            </motion.a>
          </div>

          <motion.div
            className="text-section-light-text/40 font-body text-sm flex items-center gap-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>127+ criadores ativos</span>
            <span>R$ 1.2M+ em vendas</span>
            <span>90 dias para escala</span>
          </motion.div>
        </div>

        <motion.div className="relative min-h-[52vh] lg:min-h-screen bg-background" style={{ y: imageY }}>
          <img
            src={bahHeroCropped}
            alt="Bah Storani"
            className="absolute inset-0 w-full h-full object-contain object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
