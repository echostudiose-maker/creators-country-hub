import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pillars = [
  { title: "Posicionamento", desc: "Você sabe exatamente quem é, qual é seu diferencial e por que o seu público DEVE te seguir e comprar de você." },
  { title: "Copy que Vende", desc: "Cada post, story e comentário convertem. Você domina a psicologia por trás das palavras que vendem." },
  { title: "Máquina de Conteúdo", desc: "Nunca mais fica travado. Ideias infinitas, legendas prontas, estratégia clara. Só gravar e postar." },
  { title: "Parcerias que Vendem", desc: "Acesso a uma comunidade onde marcas e criadores se conectam para fechar deals reais que geram lucro." },
  { title: "Mentor ao Seu Lado", desc: "Mentorias ao vivo toda semana. Você não fica sozinho. Eu estou aqui pra corrigir o rumo quando precisa." },
  { title: "IA Especializada", desc: "Um agente de IA que entende seu nicho e gera ideias, roteiros e legendas em segundos." },
];

const SolutionSection = () => (
  <section className="py-16 md:py-28 bg-background relative">
    <div className="absolute inset-0 gradient-bg-subtle" />
    <div className="relative max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10 md:mb-14"
      >
        O Que Você Vai Conquistar
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-xl p-5 md:p-6 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-foreground" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground">{p.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
