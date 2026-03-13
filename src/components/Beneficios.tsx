"use client";

const beneficios = [
  {
    icono: "✦",
    titulo: "Disminuye la ansiedad y el estrés",
    descripcion: "La práctica regular regula el sistema nervioso, reduciendo los niveles de cortisol y promoviendo un estado de calma sostenida.",
  },
  {
    icono: "✦",
    titulo: "Mejora la calidad del sueño",
    descripcion: "El yoga activa el sistema parasimpático, facilitando el descanso profundo y restaurador que el cuerpo necesita para regenerarse.",
  },
  {
    icono: "✦",
    titulo: "Reduce la tensión y dolores corporales",
    descripcion: "Las asanas trabajan los tejidos profundos, liberando tensiones acumuladas y aliviando dolores crónicos en cuello, espalda y articulaciones.",
  },
  {
    icono: "✦",
    titulo: "Mayor claridad mental",
    descripcion: "La meditación y la respiración consciente entrenan la mente para enfocarse, reducir el ruido mental y tomar decisiones desde un lugar sereno.",
  },
  {
    icono: "✦",
    titulo: "Mejora la movilidad y flexibilidad",
    descripcion: "El cuerpo recupera su rango de movimiento natural, previniendo lesiones y manteniéndote activo con mayor energía y ligereza.",
  },
  {
    icono: "✦",
    titulo: "Favorece el equilibrio emocional",
    descripcion: "Cada práctica es un espacio para observar tus emociones sin identificarte con ellas, cultivando una relación más compasiva contigo mismo.",
  },
];

export default function Beneficios() {
  return (
    <section className="py-24 md:py-36 bg-[#F2F0EB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-4 font-['Jost']">
            Transformación
          </p>
          <h2 className="text-[#263B16] font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light">
            Cuando practicas yoga,<br />
            <span className="italic">tu cuerpo te lo agradece</span>
          </h2>
          <div className="w-10 h-px bg-[#B2B89A] mx-auto mt-6" />
        </div>

        {/* Grid de beneficios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#B2B89A]/20">
          {beneficios.map((b, index) => (
            <div
              key={index}
              className="bg-[#F2F0EB] p-8 md:p-10 group hover:bg-[#263B16] transition-all duration-500"
            >
              <span className="text-[#B2B89A] group-hover:text-[#B2B89A] text-lg mb-5 block">
                {b.icono}
              </span>
              <h3 className="text-[#263B16] group-hover:text-[#F2F0EB] font-['Cormorant_Garamond'] text-xl font-light mb-3 transition-colors duration-500">
                {b.titulo}
              </h3>
              <p className="text-[#1A1A1A]/60 group-hover:text-[#F2F0EB]/70 text-sm leading-loose font-['Jost'] font-light transition-colors duration-500">
                {b.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Cita de cierre */}
        <div className="text-center mt-20">
          <p className="text-[#263B16] font-['Cormorant_Garamond'] text-2xl md:text-3xl italic font-light max-w-2xl mx-auto leading-relaxed">
            &ldquo;Practicar yoga es crear un espacio para escucharte. Es habitar tu cuerpo con respeto y conciencia.&rdquo;
          </p>
          <p className="text-[#B2B89A] text-xs tracking-[0.3em] uppercase mt-6 font-['Jost']">
            — Kay Atma
          </p>
        </div>
      </div>
    </section>
  );
}
