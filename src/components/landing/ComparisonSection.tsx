import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const commonAgency = [
    "Copia trends sem estratégia",
    "Foca apenas em likes vazios",
    "Posta por postar, sem roteiro",
    "Não entende o mercado country",
    "Suporte lento e padrão",
  ];

  const metodoBah = [
    "Estratégia personalizada de nicho",
    "Foco em seguidores qualificados",
    "Roteiros validados com BahGPT",
    "Expertise real no agro/country",
    "Acompanhamento semanal ao vivo",
  ];

  return (
    <section className="bg-section-light py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="label-caps text-section-light-text/50 mb-4">Diferencial</p>
          <h2 className="font-body font-semibold text-[clamp(2.2rem,7vw,4.8rem)] leading-[0.92] text-section-light-text">
            Por que somos a
            <br />
            <span className="headline-serif-italic">escolha certa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Connector Decoration (Desktop only) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-section-light-text/5 hidden md:block" />

          {/* Common Agency Block */}
          <motion.div 
            className="rounded-[2.5rem] p-8 md:p-12 bg-section-light-text/[0.02] border border-section-light-text/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-body font-semibold text-2xl text-section-light-text/40 mb-8 lowercase italic opacity-60">agências comuns...</h3>
            <ul className="space-y-6">
              {commonAgency.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <p className="font-body text-section-light-text/50 text-lg">{text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Metodo Bah Block */}
          <motion.div 
            className="rounded-[2.5rem] p-8 md:p-12 bg-white shadow-2xl shadow-section-light-text/5 border border-section-light-text/5 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glossy highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full" />
            
            <h3 className="font-body font-semibold text-2xl text-section-light-text mb-8">Método Bah</h3>
            <ul className="space-y-6">
              {metodoBah.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <p className="font-body text-section-light-text text-lg font-medium">{text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-10 border-t border-section-light-text/10">
              <p className="text-section-light-text/70 italic font-body">"O único método feito por quem vive e respira o mercado country todos os dias."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
