const CTA_URL = "https://hotm.art/7GmUn4q";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-section-light/80 backdrop-blur-lg border-b border-section-light-text/8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-body font-semibold text-lg text-section-light-text">
          <span className="w-6 h-6 rounded-md bg-section-light-text text-section-light flex items-center justify-center text-[0.6rem]">✷</span>
          Bah
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "O Método", href: "#solution" },
            { label: "Entregáveis", href: "#deliverables" },
            { label: "Preços", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm text-section-light-text/55 hover:text-section-light-text transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-semibold text-sm bg-section-light-text text-section-light px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Garantir Vaga
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
