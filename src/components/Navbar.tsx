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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo texto */}
        <a
          href="#inicio"
          className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-xl tracking-[0.25em] uppercase"
        >
          Kay Atma
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#B2B89A] hover:text-[#F2F0EB] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-px bg-[#F2F0EB] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#F2F0EB] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#F2F0EB] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-[#1A1A1A]/98 flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#B2B89A] hover:text-[#F2F0EB] text-sm tracking-[0.25em] uppercase transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
