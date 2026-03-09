import React from "react";
import { Link } from "react-router-dom";

const CTA_URL = "https://hotm.art/7GmUn4q";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            Bah<span className="text-gradient"> Storani</span>
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "O Método", href: "#solution" },
            { label: "O que você recebe", href: "#deliverables" },
            { label: "Preços", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-primary text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_6px_24px_-6px_hsl(265_80%_60%_/_0.5)] transition-all duration-300"
        >
          Garantir Vaga
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
