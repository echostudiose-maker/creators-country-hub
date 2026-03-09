import { motion } from "framer-motion";
import bahEvent from "@/assets/bah-event.png";
import bahCasual from "@/assets/bah-casual.png";

const StorySection = () => (
  <section className="bg-background py-16 md:py-28 border-t border-border/40 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <motion.p className="label-caps text-muted-foreground mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Nossa missão
      </motion.p>

      <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-20 items-start">
        <div>
          <motion.h2
            className="font-body font-semibold text-[clamp(2.4rem,8vw,5rem)] text-foreground leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Conteúdo sem
            <br />
            caos, com
            <br />
            <span className="headline-serif-italic">direção</span>
          </motion.h2>

          <motion.div className="mt-8 rounded-2xl overflow-hidden aspect-[4/5]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={bahCasual} alt="Bah Storani" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        <motion.div className="space-y-5" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-body text-foreground/70 text-lg leading-[1.75]">
            Eu transformei anos de tentativa e erro em um método com processo, roteiro e posicionamento claro para criadores e empresários do mercado country.
          </p>
          <p className="font-body text-foreground/70 text-lg leading-[1.75]">
            Em 90 dias, cresci mais de <strong className="text-foreground">90 mil seguidores</strong> e multipliquei meu faturamento em <strong className="text-foreground">5x</strong>.
          </p>
          <div className="rounded-2xl overflow-hidden aspect-[16/10]">
            <img src={bahEvent} alt="Bah em cobertura de evento" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <p className="font-body text-foreground font-semibold text-lg">Agora você aplica esse sistema pronto no seu perfil.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;