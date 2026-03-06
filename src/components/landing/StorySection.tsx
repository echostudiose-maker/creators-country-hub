import { motion } from "framer-motion";

const StorySection = () => (
  <section className="py-20 md:py-28 bg-secondary relative">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
    </div>
    <div className="relative max-w-[700px] mx-auto px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-7"
        style={{ lineHeight: 1.9 }}
      >
        <p className="text-foreground/80 text-lg">
          Há 6 anos eu estava no mesmo lugar que você. Frustrada, sem direção e tentando de tudo.
        </p>

        <div className="relative rounded-xl p-6 md:p-8 border border-primary/30 bg-primary/5 glow-purple">
          <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full" />
          <p className="text-foreground font-medium text-lg pl-4">
            Até que percebi: O problema não era o Instagram. Era que eu não tinha
            um método claro, não sabia falar a língua do meu público, e estava
            fazendo conteúdo aleatório.
          </p>
        </div>

        <p className="text-foreground/80 text-lg">
          E quando comecei a entender os princípios do conteúdo, tudo mudou.
        </p>

        <p className="text-foreground/80 text-lg">
          Em 90 dias, eu cresci mais de{" "}
          <strong className="text-gradient font-bold">90 mil seguidores</strong>. Cobri os maiores eventos country do Brasil e multipliquei o meu faturamento em{" "}
          <strong className="text-gradient font-bold">5x</strong>.
        </p>

        <p className="text-foreground font-semibold text-xl">
          E agora você vai ter o acesso ao MCC que levei meses para desenvolver.
        </p>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
