"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const year = new Date().getFullYear();
  const content = useScrollReveal<HTMLDivElement>();

  return (
    <footer className="bg-[#1A1A1A] relative overflow-hidden">

      {/* Línea superior decorativa */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B2B89A]/20 to-transparent" />

      <div
        ref={content.ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-10 reveal ${content.isVisible ? "visible" : ""}`}
      >

        {/* ── Top: Logo centrado ── */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <svg width="36" height="48" viewBox="0 0 72 96" fill="none" className="opacity-30">
              <circle cx="36" cy="11" r="7.5" stroke="#B2B89A" strokeWidth="1.2" fill="none" />
              <path d="M36 19C36 27 22 31 20 41C18 51 24 57 36 59C48 57 54 51 52 41C50 31 36 27 36 19Z" stroke="#B2B89A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M23 37C15 34 8 37 4 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M49 37C57 34 64 37 68 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M26 59C20 65 15 73 20 80C25 87 31 87 36 85" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M46 59C52 65 57 73 52 80C47 87 41 87 36 85" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="font-['Cormorant_Garamond'] text-[#F2F0EB] text-3xl tracking-[0.3em] uppercase font-light mb-2">
            Kay Atma
          </h3>
          <p className="text-[#B2B89A]/60 text-[10px] tracking-[0.4em] uppercase font-['Jost']">
            Escuela de Yoga y Terapias Ancestrales
          </p>
        </div>

        {/* ── Grid principal ── */}
        <div className="grid sm:grid-cols-3 gap-12 md:gap-16 mb-16">

          {/* Columna 1: Navegación */}
          <div>
            <p className="text-[#B2B89A] text-[9px] tracking-[0.45em] uppercase font-['Jost'] mb-7">
              Navegar
            </p>
            <ul className="space-y-4">
              {[
                { href: "#sobre", label: "Nosotros" },
                { href: "#clases", label: "Clases de Yoga" },
                { href: "#maestro", label: "Maestro Gyan Kay" },
                { href: "#terapias", label: "Terapias Ancestrales" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F2F0EB]/35 hover:text-[#F2F0EB]/80 text-sm font-['Jost'] font-light transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#B2B89A]/50 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Redes */}
          <div>
            <p className="text-[#B2B89A] text-[9px] tracking-[0.45em] uppercase font-['Jost'] mb-7">
              Síguenos
            </p>
            <div className="space-y-5">
              <a
                href="https://instagram.com/kay_atma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 border border-[#F2F0EB]/10 group-hover:border-[#B2B89A]/40 flex items-center justify-center transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#B2B89A]/60 group-hover:text-[#B2B89A] transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-[#F2F0EB]/40 group-hover:text-[#F2F0EB]/80 text-sm font-['Jost'] font-light transition-colors">
                  @kay_atma
                </span>
              </a>
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 border border-[#F2F0EB]/10 group-hover:border-[#B2B89A]/40 flex items-center justify-center transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#B2B89A]/60 group-hover:text-[#B2B89A] transition-colors">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-[#F2F0EB]/40 group-hover:text-[#F2F0EB]/80 text-sm font-['Jost'] font-light transition-colors">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Columna 3: Frase + ubicación */}
          <div>
            <p className="text-[#B2B89A] text-[9px] tracking-[0.45em] uppercase font-['Jost'] mb-7">
              Dónde estamos
            </p>
            <div className="space-y-3 mb-8">
              <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#F2F0EB]/70">La Ligua</p>
              <p className="text-[#F2F0EB]/30 text-sm font-['Jost'] font-light">V Región, Chile</p>
            </div>

            <div className="border-l border-[#B2B89A]/15 pl-5 mt-8">
              <p className="font-['Cormorant_Garamond'] italic font-light text-[#F2F0EB]/30 text-sm leading-relaxed">
                &ldquo;Un espacio para volver a ti, siempre que lo necesites.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-[#F2F0EB]/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F2F0EB]/20 text-[11px] font-['Jost'] tracking-wider">
            © {year} Kay Atma · Todos los derechos reservados
          </p>
          <a
            href="#inicio"
            className="text-[#F2F0EB]/20 hover:text-[#B2B89A]/60 text-[11px] font-['Jost'] tracking-wider transition-colors duration-300 flex items-center gap-2"
          >
            <span className="w-3 h-px bg-current" />
            Volver al inicio
          </a>
        </div>

      </div>
    </footer>
  );
}
