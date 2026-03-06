import { motion } from "framer-motion";
import { Check } from "lucide-react";

const guarantees = [
  { title: "Garantia de 7 Dias", desc: "Se em 7 dias você não achar o valor, devolvemos 100% do seu dinheiro. Sem perguntas, sem questionamentos." },
  { title: "Acesso Vitalício", desc: "Paga uma vez, acessa para sempre. Conteúdo novo é adicionado automaticamente. Sem renovação mensal." },
  { title: "Suporte Direto", desc: "Dúvida? Abre uma chamada no WhatsApp e a equipe responde em até 2 horas. Você não fica pra trás." },
  { title: "Comunidade Ativa", desc: "127+ pessoas já aprovaram. Você aprende não só com o método, mas com os resultados reais de outras pessoas." },
  { title: "Método Testado", desc: "Isso não é teoria. Cada tática aqui foi validada com centenas de alunos. O que funciona está dentro do curso." },
  { title: "Atualizações Grátis", desc: "Instagram muda. Seu método também. Novas aulas e ajustes são adicionados sem custo extra pra você." },
];

const GuaranteeSection = () => (
  <section className="py-20 md:py-28 bg-secondary relative">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-success/5 rounded-full blur-[100px]" />
    </div>
    <div className="relative max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        Sua Segurança é Prioridade
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {guarantees.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl p-6 border border-success/20 bg-card/30 hover:border-success/40 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-success" />
              </div>
              <h3 className="font-bold text-foreground">{g.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
