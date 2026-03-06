import { motion } from "framer-motion";

const StorySection = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="max-w-[700px] mx-auto px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
        style={{ lineHeight: 1.9 }}
      >
        <p className="text-foreground">
          Há 6 anos eu estava no mesmo lugar que você. Criador country querendo
          crescer, mas sem estrutura.
        </p>

        <div className="bg-primary/10 border-l-4 border-l-primary rounded-r-lg p-6">
          <p className="text-foreground font-medium">
            Até que percebi: O problema não era o Instagram. Era que eu não tinha
            um posicionamento claro, não sabia falar a língua do meu público, e
            estava fazendo conteúdo aleatório.
          </p>
        </div>

        <p className="text-foreground">
          Quando comecei a estudar psicologia de vendas, copywriting e estratégia
          de marca, tudo mudou.
        </p>

        <p className="text-foreground">
          Em 90 dias, multipliquei minha audiência, fechei parcerias com marcas
          maiores e comecei a gerar{" "}
          <strong className="text-primary">R$50K+/mês</strong> consistentemente.
        </p>

        <p className="text-foreground font-semibold text-lg">
          Agora você tem acesso ao método completo que levei ANOS para
          desenvolver.
        </p>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
