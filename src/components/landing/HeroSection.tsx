import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import bahHeroReal from "@/assets/bah-hero-real.png";

const CTA_URL = "https://hotm.art/7GmUn4q";

// Word-by-word reveal (Darling-style)
const WordReveal = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="word-mask">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.08,
            }}
          >
            {word}{i < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.55, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Full-bleed parallax background ── */}
      <motion.div
        className="absolute inset-0 z-0 parallax-bg"
        style={{ y: bgY }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center scale-110"
          loading="eager"
        />
        <motion.div
          className="absolute inset-0"
          style={{ opacity: overlayOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* ── Floating photo ── */}
      <motion.div
        className="absolute right-0 bottom-0 md:right-8 lg:right-16 z-10 w-[300px] md:w-[400px] lg:w-[480px] h-[85%]"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        <img
          src={bahHeroReal}
          alt="Bah Storani"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-20 flex flex-col justify-end flex-1 pb-20 md:pb-24 pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

          {/* ── Eyebrow label ── */}
          <motion.p
            className="label-caps text-accent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✦ Creators Country — Método MCC
          </motion.p>

          {/* ── Editorial headline (Darling-style massive type) ── */}
          <h1 className="headline-editorial text-[clamp(2.2rem,6vw,5.5rem)] text-foreground max-w-[14ch] mb-8">
            <span className="block overflow-hidden">
              <WordReveal text="Cresça de 5 a" delay={0.3} />
            </span>
            <span className="block overflow-hidden">
              <WordReveal
                text="10 mil seguidores"
                className="text-gradient"
                delay={0.5}
              />
            </span>
            <span className="block overflow-hidden">
              <WordReveal text="qualificados" delay={0.7} />
            </span>
            <span className="block overflow-hidden headline-serif-italic text-[clamp(2rem,6vw,5.5rem)] text-accent/90">
              <WordReveal text="por mês." delay={0.9} />
            </span>
          </h1>

          {/* ── Subheadline ── */}
          <motion.p
            className="font-body text-base md:text-lg text-foreground/70 max-w-[520px] leading-[1.7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            O método que{" "}
            <strong className="text-foreground font-semibold">127+ criadores e empresários</strong>{" "}
            usaram para virar referência no mercado country — e transformar o Instagram em uma máquina de{" "}
            <em className="font-display italic text-accent/90">engajamento, autoridade e vendas.</em>
          </motion.p>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="label-caps text-foreground/30 text-[0.6rem]">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-foreground/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
