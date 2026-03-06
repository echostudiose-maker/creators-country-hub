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
  <section className="py-16 md:py-20 bg-background">
    <div className="max-w-[900px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
      >
        Sua Segurança é Prioridade
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guarantees.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border-l-4 border-l-success rounded-lg p-6 shadow-sm hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-success flex-shrink-0" />
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
