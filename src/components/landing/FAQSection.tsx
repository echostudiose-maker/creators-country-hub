import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo preciso investir por dia?",
    a: "Recomendo 30-60 minutos diários para resultado rápido. Mas o método funciona com qualquer tempo que você disponibilizar. O importante é consistência, não quantidade de horas. Com o BahGPT, você economiza 2-3 horas por dia que normalmente gastaria travado pensando no que postar.",
  },
  {
    q: "Funciona para iniciantes sem seguidores?",
    a: "Sim! Vários alunos começaram do zero. O método Rota 66 é especificamente construído para você sair de 0 seguidores e chegar ao primeiro 1K com estratégia clara. Depois disso, tudo fica mais fácil.",
  },
  {
    q: "Preciso ser criador de conteúdo ou empresário pode aproveitar?",
    a: "Os dois aproveitam 100%. Criadores aprendem a monetizar audiência, empresários aprendem a vender produtos/serviços. A comunidade tem ambos e as parcerias que acontecem lá beneficiam os dois lados.",
  },
  {
    q: "Quanto tempo para ver primeiros resultados?",
    a: "Respostas iniciais (comentários, DMs) costumam vir nos primeiros 14 dias se você aplicar. Primeiras vendas / parcerias geralmente em 30 dias. Crescimento consistente em 90 dias.",
  },
  {
    q: "E se eu não gostar, devolve o dinheiro?",
    a: "Sim. Você tem 7 dias para explorar tudo e pedir reembolso se não achar o valor. Sem perguntas chatas, sem formulário. A gente só quer alunos comprometidos, então tiramos todo risco de você.",
  },
  {
    q: "Posso acessar de qualquer dispositivo?",
    a: "Sim! Acesso na plataforma funciona em desktop, tablet e celular. As mentorias ao vivo são no Zoom. Você assiste aulas quando quiser, tudo fica gravado.",
  },
];

const FAQSection = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="max-w-[800px] mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
      >
        Perguntas Frequentes
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-lg px-5 overflow-hidden"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors [&[data-state=open]]:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-[1.7]">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
