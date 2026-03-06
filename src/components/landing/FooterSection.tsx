const FooterSection = () => (
  <footer className="py-10 bg-secondary border-t border-secondary-foreground/10">
    <div className="max-w-[900px] mx-auto px-5 text-center">
      <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
        <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
          Política de Privacidade
        </a>
        <a
          href="https://wa.me/5511950296251?text=Olá"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-foreground/60 hover:text-primary transition-colors"
        >
          Suporte via WhatsApp
        </a>
        <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
          Termos de Uso
        </a>
      </div>
      <p className="text-secondary-foreground/40 text-sm">
        © 2024 Bah Storani - Creators Country. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default FooterSection;
