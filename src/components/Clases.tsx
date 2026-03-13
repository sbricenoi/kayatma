"use client";

import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const clases = [
  {
    num: "01",
    nombre: "Hatha Kriya Yoga",
    tags: ["Equilibrio", "Respiración", "Base Energética"],
    descripcion:
      "Una práctica que trabaja el cuerpo y la mente a través de posturas (asanas) y técnicas de purificación (kriyas). Ideal para quienes buscan equilibrio y una base energética sólida.",
    beneficios: ["Fortalece el sistema nervioso", "Mejora la flexibilidad", "Estabiliza la energía vital"],
    nivel: "Todos los niveles",
    efecto: "Sensación de calma y estabilidad",
  },
  {
    num: "02",
    nombre: "Yoga Kundalini",
    tags: ["Despertar", "Energía", "Transformación"],
    descripcion:
      "Una tecnología espiritual completa que combina movimiento, respiración, meditación y mantra. Trabaja con la energía dormida en la base de la columna para expandir la conciencia.",
    beneficios: ["Equilibra el sistema glandular", "Expande la conciencia", "Reduce el estrés profundo"],
    nivel: "Abierto a todos",
    efecto: "Despertar y expansión interior",
  },
  {
    num: "03",
    nombre: "Yoga Restaurativo",
    tags: ["Descanso", "Sanación", "Integración"],
    descripcion:
      "Una práctica pasiva y profundamente reparadora. Con apoyo de accesorios, el cuerpo se relaja por completo, activando el proceso de regeneración y sanación natural.",
    beneficios: ["Alivia la tensión crónica", "Mejora el sueño", "Restaura el sistema nervioso"],
    nivel: "Principiantes bienvenidos",
    efecto: "Regeneración y paz profunda",
  },
  {
    num: "04",
    nombre: "Meditación y Pranayama",
    tags: ["Silencio", "Respiración", "Presencia"],
    descripcion:
      "Control de la energía vital a través de la respiración (pranayama) combinado con meditación guiada. Un viaje hacia la quietud interior y la claridad mental.",
    beneficios: ["Calma la mente", "Aumenta la claridad", "Conecta con el presente"],
    nivel: "Todos los niveles",
    efecto: "Quietud y claridad mental",
  },
];

export default function Clases() {
  const header = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible, getDelay } = useStaggerReveal(4, 130);

  return (
    <section
      id="clases"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #131f0c 0%, #1a2d10 30%, #263B16 65%, #344F63 100%)" }}
    >
      {/* Texto gigante de fondo */}
      <div className="absolute bottom-0 left-0 font-['Cormorant_Garamond'] text-[22vw] font-light text-[#F2F0EB]/[0.025] select-none leading-none pointer-events-none">
        YOGA
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* ── Encabezado ── */}
        <div
          ref={header.ref}
          className={`mb-24 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[#B2B89A] text-[10px] tracking-[0.55em] uppercase font-['Jost'] mb-7">
                Tu práctica
              </p>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.8rem,7vw,5rem)] font-light text-[#F2F0EB] leading-tight">
                Nuestras Clases
              </h2>
            </div>
            <p className="text-[#F2F0EB]/45 text-[0.85rem] font-['Jost'] font-light max-w-xs leading-[1.9] md:text-right">
              En Kay Atma puedes practicar yoga de distintas formas, según lo que hoy necesites.
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-[#B2B89A]/25 to-transparent mt-12" />
        </div>

        {/* ── Pregunta ── */}
        <div className={`text-center mb-18 reveal ${header.isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          <p className="font-['Cormorant_Garamond'] text-[clamp(1.6rem,4vw,2.8rem)] italic text-[#F2F0EB] font-light">
            ¿Qué tipo de yoga es ideal para ti?
          </p>
          <div className="w-8 h-px bg-[#B2B89A]/40 mx-auto mt-5 mb-3" />
          <p className="text-[#B2B89A] text-[10px] tracking-[0.45em] uppercase font-['Jost']">
            ¡Descubre tu camino!
          </p>
        </div>

        {/* ── Cards ── */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-5">
          {clases.map((clase, i) => (
            <div
              key={clase.num}
              className={`group relative border border-[#F2F0EB]/8 hover:border-[#B2B89A]/35 p-8 md:p-10 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden reveal ${isVisible ? "visible" : ""}`}
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(4px)",
                ...getDelay(i),
              }}
            >
              {/* Número grande decorativo */}
              <div className="absolute -top-2 -right-1 font-['Cormorant_Garamond'] text-8xl font-light text-[#F2F0EB]/[0.04] select-none leading-none">
                {clase.num}
              </div>

              {/* Nivel badge */}
              <div className="flex items-center justify-between mb-7">
                <span className="inline-block border border-[#B2B89A]/25 text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase px-3 py-1.5 font-['Jost']">
                  {clase.nivel}
                </span>
                <span className="text-[#B2B89A]/40 text-xs font-['Cormorant_Garamond'] italic font-light">
                  {clase.efecto}
                </span>
              </div>

              {/* Nombre */}
              <h3 className="font-['Cormorant_Garamond'] text-[clamp(1.6rem,3vw,2.2rem)] font-light text-[#F2F0EB] mb-3 group-hover:text-gradient transition-all duration-300">
                {clase.nombre}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-x-3 mb-6">
                {clase.tags.map((tag, ti) => (
                  <span key={tag} className="text-[#B2B89A] text-[10px] tracking-[0.25em] uppercase font-['Jost']">
                    {tag}{ti < clase.tags.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>

              {/* Separador */}
              <div className="w-full h-px bg-gradient-to-r from-[#B2B89A]/20 to-transparent mb-6" />

              {/* Descripción */}
              <p className="text-[#F2F0EB]/55 text-sm leading-[1.9] font-['Jost'] font-light mb-8">
                {clase.descripcion}
              </p>

              {/* Beneficios */}
              <ul className="space-y-3">
                {clase.beneficios.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-4 h-px bg-[#B2B89A]/50" />
                    <span className="text-[#B2B89A] text-xs font-['Jost'] tracking-wide">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(178,184,154,0.05) 0%, transparent 60%)" }}
              />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="inline-flex items-center gap-4 border border-[#B2B89A]/35 hover:border-[#F2F0EB]/60 text-[#B2B89A] hover:text-[#F2F0EB] text-[10px] tracking-[0.4em] uppercase px-10 py-4 font-['Jost'] transition-all duration-400"
          >
            <span>Consultar Horarios</span>
            <span className="w-6 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
