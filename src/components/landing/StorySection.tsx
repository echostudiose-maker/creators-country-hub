import { motion } from "framer-motion";

const StorySection = () => (
  <section className="section-light py-20 md:py-32 overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 md:px-10">
      {/* ── Section label ── */}
      <motion.p
        className="label-caps text-section-light-text/40 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        A história por trás do método
      </motion.p>

      {/* ── Two-column layout ── */}
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-start">
        {/* Left: big editorial headline */}
        <div>
          <motion.h2
            className="headline-editorial text-[clamp(2.5rem,5.5vw,4.5rem)] text-section-light-text leading-[0.92]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            6 anos.
            <br />
            <span className="headline-serif-italic text-primary/80">Uma virada</span>
            <br />
            que mudou tudo.
          </motion.h2>

          <motion.div
            className="mt-8 w-10 h-px bg-primary/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </div>

        {/* Right: narrative */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{ lineHeight: 1.85 }}
        >
          <p className="font-body text-[1.05rem] text-section-light-text/75">
            Há 6 anos eu estava no mesmo lugar que você. Frustrada, sem direção e tentando de tudo.
          </p>

          {/* Highlight box — Darling-style pull quote */}
          <div className="relative pl-6 py-1">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-full" />
            <p className="font-body text-[1.05rem] text-section-light-text font-medium leading-[1.75]">
              Até que percebi: O problema não era o Instagram. Era que eu não tinha um método claro, não sabia falar a língua do meu público, e estava fazendo conteúdo aleatório.
            </p>
          </div>

          <p className="font-body text-[1.05rem] text-section-light-text/75">
            E quando comecei a entender os princípios do conteúdo, tudo mudou.
          </p>

          <p className="font-body text-[1.05rem] text-section-light-text/75">
            Em 90 dias, eu cresci mais de{" "}
            <strong className="font-display italic text-primary font-bold">90 mil seguidores</strong>.
            {" "}Cobrei os maiores eventos country do Brasil e multipliquei o meu faturamento em{" "}
            <strong className="font-display italic text-primary font-bold">5x</strong>.
          </p>

          <p className="font-body text-[1.1rem] text-section-light-text font-semibold">
            E agora você vai ter acesso ao MCC que levei meses para desenvolver.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
