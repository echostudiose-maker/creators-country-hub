const FooterSection = () => (
  <footer className="bg-section-light py-12 border-t border-section-light-text/10">
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="flex items-center gap-2 font-body font-semibold text-xl text-section-light-text">
          <span className="w-7 h-7 rounded-md bg-section-light-text text-section-light flex items-center justify-center text-xs">✷</span>
          Bah
        </div>

        <div className="flex gap-6 text-sm font-body text-section-light-text/60">
          <a href="#" className="hover:text-section-light-text transition-colors">Termos</a>
          <a href="#" className="hover:text-section-light-text transition-colors">Privacidade</a>
          <a href="https://wa.me/5511950296251?text=Olá" target="_blank" rel="noopener noreferrer" className="hover:text-section-light-text transition-colors">Suporte</a>
        </div>
      </div>

      <div className="border-t border-section-light-text/10 pt-6 text-center md:flex md:justify-between md:text-left">
        <p className="text-xs text-section-light-text/40">© {new Date().getFullYear()} Bah Storani — Creators Country.</p>
        <p className="text-xs text-section-light-text/30 mt-1 md:mt-0">Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
