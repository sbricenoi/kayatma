"use client";

import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const elementos = [
  { simbolo: "◌", nombre: "Agua", lat: "Apas", desc: "Fluidez, adaptabilidad, emoción profunda y purificación.", color: "#344F63" },
  { simbolo: "△", nombre: "Fuego", lat: "Tejas", desc: "Transformación, voluntad, pasión y digestión interna.", color: "#4a3020" },
  { simbolo: "□", nombre: "Tierra", lat: "Prithvi", desc: "Estabilidad, enraizamiento, presencia y manifestación.", color: "#263B16" },
  { simbolo: "◇", nombre: "Viento", lat: "Vayu", desc: "Movimiento, libertad, comunicación y ligereza.", color: "#2d3d4a" },
  { simbolo: "○", nombre: "Akash · Éter", lat: "Akasha", desc: "Expansión, silencio, espacio y conciencia infinita.", color: "#1a1a2e" },
];

const hitos = [
  { año: "2023", lugar: "Chichén Itzá, México", desc: "Encuentro \"Viaje al Corazón de la Selva Maya\" junto al Maestro Yogi Amandeep Singh." },
  { año: "2023-24", lugar: "Ciudad de México", desc: "Maestría en los 5 Elementos Sagrados — tradiciones vivas Udasin y linajes espirituales." },
  { año: "Hoy", lugar: "La Ligua, Chile", desc: "Compartiendo estas enseñanzas ancestrales con la comunidad de Kay Atma." },
];

export default function Maestro() {
  const header = useScrollReveal<HTMLDivElement>();
  const historia = useScrollReveal<HTMLDivElement>();
  const { ref: hitosRef, isVisible: hitosVis, getDelay: hitosDelay } = useStaggerReveal(3, 160);
  const { ref: elemRef, isVisible: elemVis, getDelay: elemDelay } = useStaggerReveal(5, 110);

  return (
    <section
      id="maestro"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #344F63 0%, #2a3d50 40%, #1A1A1A 100%)" }}
    >
      {/* Texto fondo gigante */}
      <div className="absolute top-0 right-0 font-['Cormorant_Garamond'] text-[18vw] font-light text-[#F2F0EB]/[0.025] select-none leading-none pointer-events-none">
        GK
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* ── Encabezado ── */}
        <div
          ref={header.ref}
          className={`text-center mb-24 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <p className="text-[#B2B89A] text-[10px] tracking-[0.55em] uppercase font-['Jost'] mb-7">
            Guía del camino
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.8rem,7vw,5rem)] font-light text-[#F2F0EB] leading-tight">
            Maestro Gyan Kay
          </h2>
          <div className="w-12 h-px bg-[#B2B89A]/60 mx-auto mt-8" />
        </div>

        {/* ── Historia + cita ── */}
        <div
          ref={historia.ref}
          className={`grid md:grid-cols-[1fr_auto] gap-12 items-start mb-20 reveal ${historia.isVisible ? "visible" : ""}`}
        >
          <div className="space-y-7 max-w-2xl">
            <blockquote className="font-['Cormorant_Garamond'] text-[clamp(1.2rem,2.8vw,1.65rem)] italic font-light text-[#F2F0EB]/85 leading-relaxed border-l border-[#B2B89A]/40 pl-7 py-1">
              &ldquo;Hay viajes que transforman y otros que se realizan con un propósito: traer conocimiento vivo.&rdquo;
            </blockquote>
            <p className="text-[#F2F0EB]/55 text-[0.9rem] leading-[2] font-['Jost'] font-light">
              El Maestro Gyan Kay ha dedicado su vida a la búsqueda y transmisión del conocimiento ancestral del yoga. Su formación combina la academia espiritual de las tradiciones <span className="text-[#B2B89A]">Udasin</span> con la práctica vivencial en centros de enseñanza de México y Latinoamérica.
            </p>
            <p className="text-[#F2F0EB]/45 text-[0.9rem] leading-[2] font-['Jost'] font-light">
              Todo este camino tiene un propósito: traer esta sabiduría a nuestra tierra, a La Ligua, Chile, y a la comunidad que se reúne en Kay Atma.
            </p>

            {/* Tags de linaje */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Udasin", "Hatha Kriya", "Kundalini", "Elementos Sagrados"].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#B2B89A]/25 text-[#B2B89A] text-[9px] tracking-[0.3em] uppercase px-4 py-2 font-['Jost'] hover:border-[#B2B89A]/60 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Avatar visual */}
          <div className="hidden md:flex flex-col items-center gap-3">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center border border-[#B2B89A]/25 animate-pulse-glow"
              style={{ background: "linear-gradient(135deg, #263B16, #344F63)" }}
            >
              <svg width="36" height="48" viewBox="0 0 72 96" fill="none">
                <circle cx="36" cy="11" r="7.5" stroke="#B2B89A" strokeWidth="1.2" fill="none" />
                <path d="M36 19C36 27 22 31 20 41 C18 51 24 57 36 59C48 57 54 51 52 41C50 31 36 27 36 19Z" stroke="#B2B89A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                <path d="M23 37C15 34 8 37 4 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
                <path d="M49 37C57 34 64 37 68 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase font-['Jost'] text-center">
              Maestro<br />Gyan Kay
            </p>
          </div>
        </div>

        {/* ── Timeline de formación ── */}
        <div ref={hitosRef} className="mb-24">
          <p className="text-[#B2B89A] text-[10px] tracking-[0.5em] uppercase font-['Jost'] mb-12">
            Trayectoria de formación
          </p>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-[52px] top-2 bottom-8 w-px bg-gradient-to-b from-[#B2B89A]/35 via-[#B2B89A]/15 to-transparent hidden sm:block" />

            <div className="space-y-0">
              {hitos.map((h, i) => (
                <div
                  key={i}
                  className={`flex gap-8 sm:gap-12 pb-12 last:pb-0 reveal ${hitosVis ? "visible" : ""}`}
                  style={hitosDelay(i)}
                >
                  {/* Año + dot */}
                  <div className="flex flex-col items-center flex-shrink-0 w-24">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B2B89A] mt-1.5 ring-4 ring-[#2a3d50] z-10" />
                    <p className="font-['Cormorant_Garamond'] text-[#B2B89A] text-xl font-light mt-3 text-center leading-none">
                      {h.año}
                    </p>
                  </div>
                  {/* Contenido */}
                  <div className="flex-1 pb-12 border-b border-[#F2F0EB]/8 last:border-0">
                    <p className="text-[#F2F0EB]/90 font-['Jost'] text-[11px] tracking-[0.25em] uppercase mb-3">
                      {h.lugar}
                    </p>
                    <p className="text-[#F2F0EB]/50 text-[0.9rem] font-['Jost'] font-light leading-[1.9]">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Elementos Sagrados ── */}
        <div>
          <p className="text-[#B2B89A] text-[10px] tracking-[0.5em] uppercase font-['Jost'] mb-12">
            Maestría en los 5 Elementos Sagrados
          </p>
          <div ref={elemRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {elementos.map((el, i) => (
              <div
                key={el.nombre}
                className={`group p-8 md:p-10 border border-[#F2F0EB]/10 hover:border-[#B2B89A]/35 transition-all duration-500 hover:-translate-y-1.5 text-center reveal ${elemVis ? "visible" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  ...elemDelay(i),
                }}
              >
                {/* Símbolo */}
                <p className="font-['Cormorant_Garamond'] text-4xl text-[#B2B89A] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {el.simbolo}
                </p>
                {/* Nombre */}
                <h4 className="font-['Cormorant_Garamond'] text-xl font-light text-[#F2F0EB] mb-2">
                  {el.nombre}
                </h4>
                {/* Nombre sánscrito */}
                <p className="text-[#B2B89A]/50 text-[10px] tracking-[0.3em] uppercase font-['Jost'] mb-5">
                  {el.lat}
                </p>
                {/* Separador */}
                <div className="w-6 h-px bg-[#B2B89A]/30 mx-auto mb-5" />
                {/* Descripción */}
                <p className="text-[#F2F0EB]/45 text-[0.8rem] font-['Jost'] font-light leading-[1.75]">
                  {el.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
