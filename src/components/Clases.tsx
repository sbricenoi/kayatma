"use client";

const clases = [
  {
    nombre: "Hatha Kriya Yoga",
    subtitulo: "Equilibrio · Respiración · Base Energética",
    descripcion:
      "Una práctica que trabaja el cuerpo y la mente a través de posturas (asanas) y técnicas de purificación (kriyas). Ideal para quienes buscan equilibrio y una base energética sólida. Genera sensación de calma y estabilidad.",
    beneficios: ["Fortalece el sistema nervioso", "Mejora la flexibilidad", "Estabiliza la energía vital"],
    nivel: "Todos los niveles",
    color: "#263B16",
  },
  {
    nombre: "Yoga Kundalini",
    subtitulo: "Despertar · Energía · Transformación",
    descripcion:
      "Una tecnología espiritual completa que combina movimiento, respiración, meditación y mantra. Trabaja con la energía dormida en la base de la columna vertebral para expandir la conciencia y elevar la vibración.",
    beneficios: ["Equilibra el sistema glandular", "Expande la conciencia", "Reduce el estrés profundo"],
    nivel: "Abierto a todos",
    color: "#344F63",
  },
  {
    nombre: "Yoga Restaurativo",
    subtitulo: "Descanso · Sanación · Integración",
    descripcion:
      "Una práctica pasiva y profundamente reparadora. Con el apoyo de accesorios, el cuerpo se relaja completamente, permitiendo que el sistema nervioso parasimpático active el proceso de regeneración y sanación natural.",
    beneficios: ["Alivia la tensión crónica", "Mejora el sueño", "Restaura el sistema nervioso"],
    nivel: "Principiantes bienvenidos",
    color: "#263B16",
  },
  {
    nombre: "Meditación y Pranayama",
    subtitulo: "Silencio · Respiración · Presencia",
    descripcion:
      "La práctica del pranayama (control de la energía vital a través de la respiración) combinada con técnicas de meditación guiada. Un viaje hacia la quietud interior y la claridad mental profunda.",
    beneficios: ["Calma la mente", "Aumenta la claridad mental", "Conecta con el momento presente"],
    nivel: "Todos los niveles",
    color: "#344F63",
  },
];

export default function Clases() {
  return (
    <section
      id="clases"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #1A1A1A 0%, #263B16 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-4 font-['Jost']">
            Tu práctica
          </p>
          <h2 className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light">
            Nuestras Clases
          </h2>
          <div className="w-10 h-px bg-[#B2B89A] mx-auto mt-6 opacity-60" />
          <p className="text-[#F2F0EB]/60 text-sm mt-6 max-w-xl mx-auto font-['Jost'] font-light leading-loose">
            En Kay Atma puedes practicar yoga de distintas formas, según lo que hoy necesites. Cada modalidad es un camino hacia el bienestar.
          </p>
        </div>

        {/* Pregunta de impacto */}
        <div className="text-center mb-16">
          <p className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-3xl md:text-4xl italic font-light">
            ¿Qué tipo de yoga es ideal para ti?
          </p>
          <p className="text-[#B2B89A] text-xs tracking-[0.3em] uppercase mt-3 font-['Jost']">
            ¡Descubre tu camino!
          </p>
        </div>

        {/* Grid de clases */}
        <div className="grid md:grid-cols-2 gap-6">
          {clases.map((clase) => (
            <div
              key={clase.nombre}
              className="group border border-[#F2F0EB]/10 hover:border-[#B2B89A]/40 p-8 transition-all duration-500 hover:-translate-y-1"
              style={{ background: "rgba(242,240,235,0.03)" }}
            >
              {/* Nivel */}
              <span className="inline-block text-[#B2B89A] text-xs tracking-[0.3em] uppercase mb-5 font-['Jost']">
                {clase.nivel}
              </span>

              {/* Nombre */}
              <h3 className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-3xl font-light mb-2">
                {clase.nombre}
              </h3>

              {/* Subtítulo */}
              <p className="text-[#B2B89A] text-xs tracking-[0.2em] uppercase mb-6 font-['Jost']">
                {clase.subtitulo}
              </p>

              {/* Separador */}
              <div className="w-8 h-px bg-[#B2B89A]/40 mb-6" />

              {/* Descripción */}
              <p className="text-[#F2F0EB]/60 text-sm leading-loose font-['Jost'] font-light mb-6">
                {clase.descripcion}
              </p>

              {/* Beneficios */}
              <ul className="space-y-2">
                {clase.beneficios.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[#B2B89A] text-xs font-['Jost']">
                    <span className="w-1 h-1 rounded-full bg-[#B2B89A] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-block px-10 py-4 border border-[#B2B89A]/50 hover:border-[#F2F0EB] text-[#B2B89A] hover:text-[#F2F0EB] text-xs tracking-[0.35em] uppercase transition-all duration-300 font-['Jost']"
          >
            Consultar Horarios
          </a>
        </div>
      </div>
    </section>
  );
}
