import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Quanto tempo preciso investir por dia?", a: "Recomendamos 30-60 minutos diários, mas o método funciona com qualquer tempo que você dedicar. O BahGPT economiza horas de criação." },
  { q: "Funciona para iniciantes?", a: "Sim. Vários alunos começaram do zero e alcançaram 1k seguidores em poucas semanas com o Rota 66." },
  { q: "Serve para empresários também?", a: "100%. Criadores aprendem a monetizar audiência, empresários aprendem a vender via Instagram. A comunidade tem os dois lados." },
  { q: "Quanto tempo para ver resultados?", a: "Primeiros sinais em 14 dias. Primeiras vendas em 30 dias. Crescimento consistente em 90 dias." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias para pedir reembolso sem perguntas. Processado automaticamente pela Hotmart." },
  { q: "Posso acessar no celular?", a: "Sim. Tudo funciona em desktop, tablet e celular. As mentorias ficam gravadas." },
];

const FAQSection = () => (
  <section id="faq" className="bg-background py-16 md:py-24 border-t border-border/40">
    <div className="max-w-3xl mx-auto px-6 md:px-10">
      <p className="label-caps text-muted-foreground text-center mb-4">FAQ</p>
      <h2 className="font-body font-semibold text-[clamp(2rem,6vw,4rem)] text-foreground text-center leading-[0.95] mb-10">
        Dúvidas
        <br />
        <span className="headline-serif-italic text-gradient">frequentes</span>
      </h2>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-2xl overflow-hidden bg-card/30">
            <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:text-primary transition-colors px-6 py-5 [&[data-state=open]]:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-muted-foreground leading-[1.7]">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
