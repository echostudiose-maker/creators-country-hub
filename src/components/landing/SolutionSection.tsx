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
  <section className="py-16 md:py-20 bg-secondary">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-secondary-foreground text-center mb-12"
      >
        O Que Você Vai Conquistar
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-secondary/80 border border-secondary-foreground/10 rounded-lg p-6 hover:scale-[1.03] transition-transform duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              <h3 className="text-lg font-bold text-secondary-foreground">{p.title}</h3>
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
