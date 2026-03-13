"use client";

import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const valores = [
  {
    num: "01",
    titulo: "Presencia",
    desc: "Cada práctica comienza con el momento presente. Aquí no hay pasado ni futuro, solo la respiración que nos ancla al ahora.",
    icon: "○",
  },
  {
    num: "02",
    titulo: "Tradición Viva",
    desc: "Enseñanzas provenientes de linajes espirituales milenarios, traídas con respeto y frescura a nuestra comunidad.",
    icon: "△",
  },
  {
    num: "03",
    titulo: "Comunidad",
    desc: "Un espacio seguro donde crecer junto a otros, compartir la práctica y encontrar apoyo en el camino interior.",
    icon: "□",
  },
];

export default function SobreNosotros() {
  const header = useScrollReveal<HTMLDivElement>();
  const left = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const right = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: valRef, isVisible: valVisible, getDelay } = useStaggerReveal(3, 150);

  return (
    <section id="sobre" className="py-28 md:py-40 bg-[#F2F0EB] relative overflow-hidden">

      {/* Número decorativo de fondo */}
      <div className="absolute top-12 right-0 font-['Cormorant_Garamond'] text-[18vw] font-light text-[#263B16]/[0.03] select-none leading-none pointer-events-none pr-8">
        KA
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Encabezado ── */}
        <div
          ref={header.ref}
          className={`text-center mb-24 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <p className="text-[#B2B89A] text-[10px] tracking-[0.55em] uppercase font-['Jost'] mb-7">
            Nuestra Esencia
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.8rem,7vw,5rem)] font-light text-[#263B16] leading-tight">
            ¿Qué es Kay Atma?
          </h2>
          <div className="w-12 h-px bg-[#B2B89A] mx-auto mt-8" />
        </div>

        {/* ── Cuerpo: dos columnas ── */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-start mb-28">

          {/* Columna izquierda — texto */}
          <div
            ref={left.ref}
            className={`reveal-left ${left.isVisible ? "visible" : ""}`}
          >
            <blockquote className="font-['Cormorant_Garamond'] text-[clamp(1.25rem,2.5vw,1.55rem)] italic font-light text-[#263B16] leading-relaxed mb-10 border-l-2 border-[#B2B89A] pl-7 py-1">
              &ldquo;Kay Atma nació del deseo de crear un espacio donde cada persona pudiera encontrarse consigo misma, sin prisa, sin juicio, solo con presencia.&rdquo;
            </blockquote>
            <p className="text-[#1A1A1A]/60 text-[0.92rem] leading-[2] font-['Jost'] font-light mb-6">
              Somos una escuela de yoga y terapias ancestrales ubicada en <span className="text-[#263B16] font-normal">La Ligua, V Región de Chile</span>. Nuestra propuesta integra diversas tradiciones del yoga con un enfoque profundo en el bienestar físico, emocional y espiritual.
            </p>
            <p className="text-[#1A1A1A]/50 text-[0.92rem] leading-[2] font-['Jost'] font-light">
              Practicar aquí es crear un espacio para escucharte. Es habitar tu cuerpo con respeto y conciencia. Cada clase es una invitación a volver a ti.
            </p>

            {/* Dato visual */}
            <div className="mt-14 flex gap-14 pt-8 border-t border-[#B2B89A]/20">
              {[
                { num: "4+", label: "Modalidades de yoga" },
                { num: "4+", label: "Terapias ancestrales" },
              ].map((d) => (
                <div key={d.num}>
                  <p className="font-['Cormorant_Garamond'] text-6xl font-light text-[#263B16] leading-none mb-3">
                    {d.num}
                  </p>
                  <p className="text-[#1A1A1A]/40 text-[10px] tracking-[0.2em] uppercase font-['Jost']">
                    {d.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — cita visual */}
          <div
            ref={right.ref}
            className={`reveal-right ${right.isVisible ? "visible" : ""}`}
          >
            <div
              className="relative p-10 md:p-14 min-h-[420px] flex flex-col justify-between overflow-hidden"
              style={{ background: "linear-gradient(145deg, #263B16 0%, #1f3012 50%, #344F63 100%)" }}
            >
              {/* Mandala de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="260" height="260" viewBox="0 0 260 260" className="animate-rotate-slow opacity-[0.06]">
                  <circle cx="130" cy="130" r="125" stroke="#B2B89A" strokeWidth="0.5" fill="none" />
                  <circle cx="130" cy="130" r="90" stroke="#B2B89A" strokeWidth="0.5" fill="none" />
                  <circle cx="130" cy="130" r="60" stroke="#B2B89A" strokeWidth="0.5" fill="none" />
                  <circle cx="130" cy="130" r="30" stroke="#B2B89A" strokeWidth="0.5" fill="none" />
                  {Array.from({ length: 12 }).map((_, i) => {
                    const a = (i * 30 * Math.PI) / 180;
                    return (
                      <line
                        key={i}
                        x1={130 + 30 * Math.cos(a)} y1={130 + 30 * Math.sin(a)}
                        x2={130 + 125 * Math.cos(a)} y2={130 + 125 * Math.sin(a)}
                        stroke="#B2B89A" strokeWidth="0.4"
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-[#B2B89A] text-[9px] tracking-[0.5em] uppercase font-['Jost'] mb-8">
                  Nuestra filosofía
                </p>
                <p className="font-['Cormorant_Garamond'] text-[clamp(1.3rem,3vw,1.8rem)] italic font-light text-[#F2F0EB] leading-relaxed">
                  &ldquo;Practicar yoga es crear un espacio para escucharte. Es habitar tu cuerpo con respeto y conciencia.&rdquo;
                </p>
              </div>

              <div className="relative z-10 mt-10">
                <div className="w-8 h-px bg-[#B2B89A]/50 mb-4" />
                <p className="text-[#B2B89A] text-[10px] tracking-[0.35em] uppercase font-['Jost']">
                  — Kay Atma
                </p>
              </div>

              {/* Decoración esquina */}
              <div className="absolute bottom-6 right-6 opacity-20">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="#B2B89A" strokeWidth="0.7" />
                  <circle cx="24" cy="24" r="14" stroke="#B2B89A" strokeWidth="0.7" />
                  <circle cx="24" cy="24" r="6" stroke="#B2B89A" strokeWidth="0.7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Valores — cards numeradas ── */}
        <div ref={valRef} className="grid sm:grid-cols-3 gap-px bg-[#B2B89A]/20">
          {valores.map((v, i) => (
            <div
              key={v.num}
              className={`bg-[#F2F0EB] hover:bg-white group p-12 md:p-14 transition-all duration-500 reveal ${valVisible ? "visible" : ""}`}
              style={getDelay(i)}
            >
              {/* Número grande */}
              <p className="font-['Cormorant_Garamond'] text-8xl font-light text-[#263B16]/12 leading-none mb-8 group-hover:text-[#263B16]/22 transition-colors duration-500">
                {v.num}
              </p>
              {/* Icono */}
              <p className="text-[#B2B89A] text-xl mb-5 font-['Cormorant_Garamond']">{v.icon}</p>
              {/* Título */}
              <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#263B16] font-light mb-5">
                {v.titulo}
              </h3>
              {/* Línea */}
              <div className="w-10 h-px bg-[#B2B89A] mb-6" />
              {/* Descripción */}
              <p className="text-[#1A1A1A]/50 text-sm leading-[1.9] font-['Jost'] font-light">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
