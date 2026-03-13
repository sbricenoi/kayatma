"use client";

import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const beneficios = [
  {
    num: "01",
    titulo: "Disminuye la ansiedad y el estrés",
    descripcion: "La práctica regular regula el sistema nervioso, reduciendo los niveles de cortisol y promoviendo un estado de calma sostenida en el día a día.",
  },
  {
    num: "02",
    titulo: "Mejora la calidad del sueño",
    descripcion: "El yoga activa el sistema parasimpático, facilitando el descanso profundo y restaurador que el cuerpo necesita para regenerarse cada noche.",
  },
  {
    num: "03",
    titulo: "Reduce la tensión y dolores corporales",
    descripcion: "Las asanas trabajan los tejidos profundos, liberando tensiones acumuladas y aliviando dolores crónicos en cuello, espalda y articulaciones.",
  },
  {
    num: "04",
    titulo: "Mayor claridad mental",
    descripcion: "La meditación y la respiración consciente entrenan la mente para enfocarse, reducir el ruido mental y tomar decisiones desde un lugar sereno.",
  },
  {
    num: "05",
    titulo: "Mejora la movilidad y flexibilidad",
    descripcion: "El cuerpo recupera su rango de movimiento natural, previniendo lesiones y manteniéndote activo con mayor energía y ligereza.",
  },
  {
    num: "06",
    titulo: "Favorece el equilibrio emocional",
    descripcion: "Cada práctica es un espacio para observar tus emociones sin identificarte con ellas, cultivando una relación más compasiva contigo mismo.",
  },
];

export default function Beneficios() {
  const header = useScrollReveal<HTMLDivElement>();
  const { ref, isVisible, getDelay } = useStaggerReveal(6, 100);
  const cita = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-28 md:py-40 bg-[#F2F0EB] relative overflow-hidden">

      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] border-[40px] border-[#263B16] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.04] border-[28px] border-[#344F63] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* ── Encabezado ── */}
        <div
          ref={header.ref}
          className={`text-center mb-20 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <p className="text-[#B2B89A] text-[10px] tracking-[0.5em] uppercase font-['Jost'] mb-5">
            Transformación
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,6.5vw,4.8rem)] font-light text-[#263B16] leading-tight">
            Cuando practicas yoga,<br />
            <em>tu cuerpo te lo agradece</em>
          </h2>
          <div className="w-12 h-px bg-[#B2B89A] mx-auto mt-7" />

          {/* Cita intro */}
          <p className="text-[#1A1A1A]/45 text-sm font-['Jost'] font-light mt-7 max-w-lg mx-auto leading-loose">
            Estos son algunos de los cambios que comienzan a ocurrir en tu cuerpo y tu mente con la práctica regular.
          </p>
        </div>

        {/* ── Grid de beneficios ── */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {beneficios.map((b, i) => (
            <div
              key={b.num}
              className={`group relative p-8 md:p-9 border border-[#B2B89A]/15 hover:border-[#263B16]/20 hover:bg-[#263B16] transition-all duration-600 cursor-default reveal ${isVisible ? "visible" : ""}`}
              style={getDelay(i)}
            >
              {/* Número decorativo */}
              <div className="absolute top-6 right-7 font-['Cormorant_Garamond'] text-5xl font-light text-[#263B16]/8 group-hover:text-[#F2F0EB]/8 transition-colors duration-500 leading-none select-none">
                {b.num}
              </div>

              {/* Indicador visual */}
              <div className="w-6 h-0.5 bg-[#B2B89A] group-hover:bg-[#B2B89A] mb-8 transition-colors duration-500" />

              {/* Título */}
              <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-light text-[#263B16] group-hover:text-[#F2F0EB] leading-snug mb-5 transition-colors duration-500">
                {b.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-[#1A1A1A]/55 group-hover:text-[#F2F0EB]/65 text-sm leading-[1.9] font-['Jost'] font-light transition-colors duration-500">
                {b.descripcion}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(178,184,154,0.07) 0%, transparent 70%)" }}
              />
            </div>
          ))}
        </div>

        {/* ── Cita de cierre ── */}
        <div
          ref={cita.ref}
          className={`text-center reveal ${cita.isVisible ? "visible" : ""}`}
        >
          <div className="relative inline-block">
            {/* Líneas decorativas */}
            <div className="hidden md:block absolute -left-20 top-1/2 w-14 h-px bg-[#B2B89A]/40" />
            <div className="hidden md:block absolute -right-20 top-1/2 w-14 h-px bg-[#B2B89A]/40" />

            <blockquote className="font-['Cormorant_Garamond'] text-[clamp(1.3rem,3vw,2rem)] italic font-light text-[#263B16] max-w-2xl mx-auto leading-relaxed">
              &ldquo;Practicar yoga es crear un espacio para escucharte.<br className="hidden sm:block" />
              Es habitar tu cuerpo con respeto y conciencia.&rdquo;
            </blockquote>
            <p className="text-[#B2B89A] text-[10px] tracking-[0.4em] uppercase font-['Jost'] mt-6">
              — Kay Atma
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
