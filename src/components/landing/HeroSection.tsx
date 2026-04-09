import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import bahAvatar from "@/assets/bah-avatar.png";
import bahStoryClean from "@/assets/bah-story-clean.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-12 overflow-hidden section-light relative">
      <div className="grid lg:grid-cols-[1.25fr_0.75fr] max-w-[1700px] mx-auto">
        {/* Left Content */}
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-32 flex flex-col justify-between relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-2 font-body font-semibold text-xl">
            <span className="w-7 h-7 rounded-sm bg-section-light-text text-section-light flex items-center justify-center text-[10px]">✷</span>
            Bah
          </div>

          {/* Main Content */}
          <div className="max-w-[720px] py-16 md:py-24">
            {/* Social Badges */}
            <motion.div
              className="flex items-center gap-1.5 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-2.5 py-1 rounded-md border border-section-light-text/5 text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 bg-section-light-text/[0.03]">
                <Instagram className="w-2.5 h-2.5" /> Instagram
              </span>
              <span className="px-2.5 py-1 rounded-md border border-section-light-text/5 text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 bg-section-light-text/[0.03]">
                <Linkedin className="w-2.5 h-2.5" /> LinkedIn
              </span>
              <span className="px-2.5 py-1 rounded-md border border-section-light-text/5 text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 bg-section-light-text/[0.03]">
                <Facebook className="w-2.5 h-2.5" /> Facebook
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-body font-semibold tracking-[-0.05em] text-[clamp(2.8rem,8.5vw,5.8rem)] leading-[0.88] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Cresça de <span className="headline-serif-italic">5 a 10 mil</span>
              <br />
              seguidores qualificados{" "}
              <span className="headline-serif-italic">por mês.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-section-light-text/50 text-lg md:text-xl leading-snug max-w-[540px] mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              O método que mais de 100 criadores e empresários usaram para virar referência no mercado country e transformar o Instagram em uma <span className="italic">máquina de vendas.</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <a 
                href="#solution" 
                className="inline-flex items-center justify-center px-8 py-4.5 bg-black text-white rounded-full font-body font-semibold text-base hover:bg-black/80 transition-all hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-black/5"
              >
                Conhecer o Método
              </a>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            className="text-section-light-text/60 font-body text-[10px] tracking-[0.15em] uppercase flex items-center gap-10 mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="flex items-center gap-2.5">100+ criadores ativos</span>
            <span className="flex items-center gap-2.5">R$ 1.2M+ em faturamento</span>
          </motion.div>
        </div>

        {/* Right Side - Instagram Story Frame */}
        <div className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center lg:justify-end pr-6 lg:pr-24 bg-section-light-text/[0.01]">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Decoration */}
            <div className="absolute -inset-40 bg-accent/5 blur-[120px] rounded-full opacity-30 mt-20" />
            
            {/* Story Card mockup */}
            <div className="relative w-[280px] md:w-[320px] lg:w-[380px] aspect-[9/18] rounded-[3rem] overflow-hidden bg-background shadow-[0_50px_120px_-30px_rgba(0,0,0,0.12)] border-[10px] border-section-light-text/5 ring-1 ring-section-light-text/5">
              {/* Story Image */}
              <img
                src={bahStoryClean}
                alt="Bah Storani — Instagram Story"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />
            </div>

            {/* Floating Metric Badge */}
            <motion.div 
              className="absolute -right-16 top-1/3 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-section-light-text/5 hidden xl:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 absolute top-3 right-3 animate-pulse" />
              <p className="text-[10px] text-section-light-text/40 uppercase tracking-widest font-bold mb-1">Crescimento</p>
              <p className="text-3xl font-bold text-section-light-text tracking-tighter">90k+</p>
              <p className="text-[10px] text-green-600 font-bold mt-1">+245% este mês</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
