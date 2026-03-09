import React from "react";

const FooterSection = () => (
  <footer className="bg-background pt-20 pb-10 border-t border-border/30 overflow-hidden relative">
    {/* Very subtle glow at the bottom */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        {/* Logo */}
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-2xl tracking-tight text-foreground">
            Bah<span className="text-gradient"> Storani</span>
          </span>
          <p className="font-body text-sm text-muted-foreground mt-2 max-w-[200px] mx-auto md:mx-0">
            Método MCC para crescimento no Instagram.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-body">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacidade
          </a>
          <a
            href="https://wa.me/5511950296251?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Suporte (WhatsApp)
          </a>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 text-center md:flex md:justify-between md:items-center md:text-left">
        <p className="font-body text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Bah Storani - Creators Country.
        </p>
        <p className="font-body text-xs text-muted-foreground/30 mt-2 md:mt-0">
          Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
