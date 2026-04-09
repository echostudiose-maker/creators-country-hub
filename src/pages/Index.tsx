import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/layout/Preloader";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import PainSection from "@/components/landing/PainSection";
import StorySection from "@/components/landing/StorySection";
import SolutionSection from "@/components/landing/SolutionSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import ProcessSection from "@/components/landing/ProcessSection";
import DeliverablesSection from "@/components/landing/DeliverablesSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ValueAnchorSection from "@/components/landing/ValueAnchorSection";

import GuaranteeSection from "@/components/landing/GuaranteeSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Tela fica "limpa" para o Preloader e depois de 1.2s montamos o site silenciosamente
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1200);

    // Damos a ordem de o Preloader sair. Ele vai disparar a animação de exit da AnimatePresence
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling while the preloader is active by telling Lenis to stop
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
      
      // Let Lenis know layout changed
      window.dispatchEvent(new Event("resize"));
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      {showContent && (
        <main className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
          <HeroSection />
          <SocialProofSection />
          <PainSection />
          <SolutionSection />
          <ComparisonSection />
          <StorySection />
          <DeliverablesSection />
          <AudienceSection />
          <ProcessSection />
          <ValueAnchorSection />
          <GuaranteeSection />
          <AuthoritySection />
          <FAQSection />
          <FooterSection />
        </main>
      )}
    </>
  );
};

export default Index;
