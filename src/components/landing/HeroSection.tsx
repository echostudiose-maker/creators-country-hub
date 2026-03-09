import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import bahHeroCropped from "@/assets/bah-hero-cropped.png";
import bahStoryClean from "@/assets/bah-story-clean.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-section-light text-section-light-text overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-8 md:py-12 flex flex-col justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-body font-semibold text-xl">
            <span className="w-7 h-7 rounded-md bg-section-light-text text-section-light flex items-center justify-center text-xs">✷</span>
            Bah
          </div>

          {/* Main Content */}
          <div className="max-w-[540px] py-8 md:py-12">
            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-section-light-text/20 flex items-center justify-center text-section-light-text/70 hover:text-section-light-text hover:border-section-light-text/40 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-section-light-text/20 flex items-center justify-center text-section-light-text/70 hover:text-section-light-text hover:border-section-light-text/40 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-section-light-text/20 flex items-center justify-center text-section-light-text/70 hover:text-section-light-text hover:border-section-light-text/40 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-body font-semibold tracking-tight text-[clamp(2.4rem,6.5vw,4.8rem)] leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              Cresça de 5 a 10 mil
              <br />
              seguidores qualificados{" "}
              <span className="headline-serif-italic">por mês.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-section-light-text/60 text-lg md:text-xl leading-relaxed max-w-[480px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              O método que mais de 100 criadores e empresários usaram para virar referência no mercado country — e transformar o Instagram em uma máquina de engajamento, autoridade e vendas.
            </motion.p>
          </div>

          {/* Bottom Stats */}
          <motion.div
            className="text-section-light-text/50 font-body text-sm flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>100+ criadores ativos</span>
            <span>R$ 1.2M+ em vendas</span>
          </motion.div>
        </div>

        {/* Right Side - Instagram Story Frame */}
        <div className="relative min-h-[60vh] lg:min-h-screen flex items-center justify-center lg:justify-start px-6 lg:px-0">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Story Card */}
            <div className="relative w-[280px] md:w-[340px] lg:w-[380px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-section-light-text/10">
              {/* Story Image */}
              <img
                src={bahStoryClean}
                alt="Bah Storani"
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
