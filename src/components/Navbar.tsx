"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#sobre", label: "Nosotros" },
  { href: "#clases", label: "Clases" },
  { href: "#maestro", label: "Maestro" },
  { href: "#terapias", label: "Terapias" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Detectar sección activa
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
          scrolled
            ? "py-4 bg-[#1A1A1A]/96 backdrop-blur-md border-b border-[#F2F0EB]/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#inicio"
            className="font-['Cormorant_Garamond'] text-[#F2F0EB] text-lg tracking-[0.3em] uppercase hover:text-[#B2B89A] transition-colors duration-300"
          >
            Kay Atma
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-[10px] tracking-[0.3em] uppercase font-['Jost'] transition-colors duration-300 group ${
                      activeSection === id
                        ? "text-[#F2F0EB]"
                        : "text-[#B2B89A]/70 hover:text-[#F2F0EB]"
                    }`}
                  >
                    {link.label}
                    {/* Underline activo */}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#B2B89A] transition-all duration-300 ${
                        activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA desktop */}
          <a
            href="#contacto"
            className="hidden md:inline-block border border-[#B2B89A]/30 hover:border-[#F2F0EB]/50 text-[#B2B89A] hover:text-[#F2F0EB] text-[9px] tracking-[0.35em] uppercase px-5 py-2.5 font-['Jost'] transition-all duration-300"
          >
            Comenzar
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className={`block w-5 h-px bg-[#F2F0EB] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-[#F2F0EB] transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-5"}`} />
            <span className={`block w-5 h-px bg-[#F2F0EB] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay full screen */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "linear-gradient(150deg, #131f0c 0%, #263B16 50%, #344F63 100%)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">

          {/* Isotipo decorativo */}
          <svg width="36" height="48" viewBox="0 0 72 96" fill="none" className="mb-4 opacity-50">
            <circle cx="36" cy="11" r="7.5" stroke="#B2B89A" strokeWidth="1.2" fill="none" />
            <path d="M36 19C36 27 22 31 20 41 C18 51 24 57 36 59C48 57 54 51 52 41C50 31 36 27 36 19Z" stroke="#B2B89A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M23 37C15 34 8 37 4 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M49 37C57 34 64 37 68 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M26 59C20 65 15 73 20 80 C25 87 31 87 36 85" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M46 59C52 65 57 73 52 80 C47 87 41 87 36 85" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>

          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-['Cormorant_Garamond'] text-[#F2F0EB] text-4xl font-light tracking-[0.1em] hover:text-[#B2B89A] transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms, color 0.3s`,
              }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-gradient-to-b from-[#B2B89A]/40 to-transparent" />
            <p className="text-[#B2B89A]/50 text-[9px] tracking-[0.4em] uppercase font-['Jost']">La Ligua · Chile</p>
          </div>
        </div>
      </div>
    </>
  );
}
