"use client";

import { useState } from "react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const terapias = [
  {
    num: "01",
    nombre: "Sanación con Cuencos Tibetanos",
    tagline: "Vibración · Armonía · Chakras",
    descripcion:
      "La vibración de los cuencos tibetanos actúa directamente sobre el campo energético del cuerpo. Sus frecuencias profundas inducen estados meditativos, liberan tensiones y promueven la armonización de los chakras. Una experiencia transformadora de sonido y silencio.",
    duracion: "60 min",
    modalidad: "Individual o grupal",
    beneficios: ["Inducción a estados meditativos profundos", "Armonización del campo energético", "Liberación de tensiones físicas y emocionales"],
  },
  {
    num: "02",
    nombre: "Terapia de Respiración Holotrópica",
    tagline: "Conciencia · Liberación · Profundidad",
    descripcion:
      "Una técnica de respiración profunda y acelerada que, combinada con música evocadora, permite acceder a estados no ordinarios de conciencia. Facilita la liberación de bloqueos emocionales y experiencias de profunda sanación interior.",
    duracion: "90 min",
    modalidad: "Individual",
    beneficios: ["Acceso a estados no ordinarios de conciencia", "Liberación de bloqueos emocionales", "Integración de experiencias pasadas"],
  },
  {
    num: "03",
    nombre: "Masaje Ayurvédico",
    tagline: "Doshas · Aceites · Puntos Marma",
    descripcion:
      "El masaje ayurvédico trabaja con los puntos marma del cuerpo, usando aceites medicinales seleccionados según tu dosha. Equilibra las energías vitales, nutre los tejidos y genera un profundo estado de bienestar físico y emocional.",
    duracion: "75 min",
    modalidad: "Individual",
    beneficios: ["Equilibrio de las energías vitales (doshas)", "Nutrición profunda de los tejidos", "Estado de bienestar físico y emocional"],
  },
  {
    num: "04",
    nombre: "Meditación Udasin",
    tagline: "Mantra · Expansión · Silencio",
    descripcion:
      "Proveniente del linaje Udasin, esta meditación trabaja con mantras específicos y visualizaciones guiadas para profundizar la conexión con el ser esencial. Una práctica de quietud y expansión de la conciencia hacia lo infinito.",
    duracion: "45 min",
    modalidad: "Individual o grupal",
    beneficios: ["Conexión profunda con el ser esencial", "Expansión de la conciencia", "Práctica de quietud interior"],
  },
];

export default function Terapias() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const header = useScrollReveal<HTMLDivElement>();
  const { ref, isVisible, getDelay } = useStaggerReveal(4, 120);

  return (
    <section id="terapias" className="py-28 md:py-40 bg-[#F2F0EB] relative overflow-hidden">

      {/* Decoración de fondo */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-[0.04] bg-[#263B16] pointer-events-none" />
      <div className="absolute top-20 -left-10 w-48 h-48 rounded-full opacity-[0.03] bg-[#344F63] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* ── Encabezado ── */}
        <div
          ref={header.ref}
          className={`mb-20 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[#B2B89A] text-[10px] tracking-[0.5em] uppercase font-['Jost'] mb-5">
                Sanación profunda
              </p>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.8rem,7vw,5rem)] font-light text-[#263B16] leading-tight">
                Terapias Ancestrales
              </h2>
            </div>
            <p className="text-[#1A1A1A]/45 text-sm font-['Jost'] font-light max-w-xs leading-loose md:text-right">
              Prácticas milenarias que trabajan en los planos físico, energético y emocional.
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-[#B2B89A]/30 to-transparent mt-10" />
        </div>

        {/* ── Lista expandible ── */}
        <div ref={ref} className="space-y-0">
          {terapias.map((t, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={t.num}
                className={`reveal ${isVisible ? "visible" : ""}`}
                style={getDelay(i)}
              >
                {/* Cabecera — siempre visible */}
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="group w-full border-b border-[#B2B89A]/20 hover:border-[#263B16]/30 py-8 md:py-10 flex items-start gap-6 md:gap-10 text-left transition-all duration-400 hover:bg-white/50 px-0"
                >
                  {/* Número */}
                  <span className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#263B16]/15 group-hover:text-[#263B16]/30 transition-colors duration-300 flex-shrink-0 leading-none mt-1">
                    {t.num}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-['Cormorant_Garamond'] text-[clamp(1.4rem,3.5vw,2.2rem)] font-light text-[#263B16] group-hover:text-[#344F63] leading-snug transition-colors duration-300 mb-2">
                          {t.nombre}
                        </h3>
                        <p className="text-[#B2B89A] text-[10px] tracking-[0.3em] uppercase font-['Jost']">
                          {t.tagline}
                        </p>
                      </div>

                      {/* Datos + toggle */}
                      <div className="flex items-center gap-6 flex-shrink-0">
                        <div className="hidden sm:flex flex-col items-end gap-1">
                          <span className="text-[#1A1A1A]/35 text-xs font-['Jost'] font-light">{t.duracion}</span>
                          <span className="text-[#1A1A1A]/35 text-xs font-['Jost'] font-light">{t.modalidad}</span>
                        </div>
                        {/* Chevron */}
                        <div
                          className={`w-8 h-8 border border-[#B2B89A]/30 flex items-center justify-center flex-shrink-0 transition-all duration-400 ${isOpen ? "bg-[#263B16] border-[#263B16] rotate-45" : "group-hover:border-[#263B16]/50"}`}
                        >
                          <span className={`text-xs transition-colors duration-300 ${isOpen ? "text-[#F2F0EB]" : "text-[#B2B89A]"}`}>
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Contenido expandible */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="py-8 md:py-10 pl-0 md:pl-[calc(3rem+2.5rem)] grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 border-b border-[#B2B89A]/15">
                    <div>
                      {/* Descripción */}
                      <p className="text-[#1A1A1A]/65 text-[0.92rem] leading-[1.95] font-['Jost'] font-light mb-8">
                        {t.descripcion}
                      </p>
                      {/* Beneficios */}
                      <ul className="space-y-3">
                        {t.beneficios.map((b) => (
                          <li key={b} className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-5 h-px bg-[#B2B89A] mt-3" />
                            <span className="text-[#1A1A1A]/60 text-sm font-['Jost'] font-light leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Info lateral */}
                    <div className="flex md:flex-col gap-8 md:gap-6 md:items-end">
                      <div className="sm:hidden">
                        <p className="text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase font-['Jost'] mb-1">Duración</p>
                        <p className="font-['Cormorant_Garamond'] text-2xl font-light text-[#263B16]">{t.duracion}</p>
                      </div>
                      <div>
                        <p className="text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase font-['Jost'] mb-1">Modalidad</p>
                        <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-light text-[#263B16]">{t.modalidad}</p>
                      </div>
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-3 border border-[#263B16]/25 hover:bg-[#263B16] hover:text-[#F2F0EB] text-[#263B16] text-[9px] tracking-[0.35em] uppercase px-6 py-3 font-['Jost'] transition-all duration-400 whitespace-nowrap"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="inline-flex items-center gap-4 bg-[#263B16] hover:bg-[#344F63] text-[#F2F0EB] text-[10px] tracking-[0.4em] uppercase px-10 py-4 font-['Jost'] transition-all duration-500"
          >
            <span>Reservar una Terapia</span>
            <span className="w-5 h-px bg-[#F2F0EB]/50" />
          </a>
        </div>

      </div>
    </section>
  );
}
