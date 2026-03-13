"use client";

const terapias = [
  {
    nombre: "Sanación con Cuencos Tibetanos",
    descripcion:
      "La vibración de los cuencos tibetanos actúa directamente sobre el campo energético del cuerpo. Sus frecuencias profundas inducen estados meditativos, liberan tensiones y promueven la armonización de los chakras.",
    duracion: "60 min",
    modalidad: "Individual o grupal",
  },
  {
    nombre: "Terapia de Respiración Holotrópica",
    descripcion:
      "Una técnica de respiración profunda y acelerada que, combinada con música evocadora, permite acceder a estados no ordinarios de conciencia. Facilita la liberación de bloqueos emocionales y experiencias de profunda sanación.",
    duracion: "90 min",
    modalidad: "Individual",
  },
  {
    nombre: "Masaje Ayurvédico",
    descripcion:
      "El masaje ayurvédico trabaja con los puntos marma del cuerpo, usando aceites medicinales seleccionados según tu dosha. Equilibra las energías vitales, nutre los tejidos y genera un profundo estado de bienestar.",
    duracion: "75 min",
    modalidad: "Individual",
  },
  {
    nombre: "Meditación Udasin",
    descripcion:
      "Proveniente del linaje Udasin, esta meditación trabaja con mantras específicos y visualizaciones guiadas para profundizar la conexión con el ser esencial. Una práctica de quietud y expansión de la conciencia.",
    duracion: "45 min",
    modalidad: "Individual o grupal",
  },
];

export default function Terapias() {
  return (
    <section id="terapias" className="py-24 md:py-36 bg-[#F2F0EB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-4 font-['Jost']">
            Sanación profunda
          </p>
          <h2 className="text-[#263B16] font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light">
            Terapias Ancestrales
          </h2>
          <div className="w-10 h-px bg-[#B2B89A] mx-auto mt-6" />
          <p className="text-[#1A1A1A]/60 text-sm mt-6 max-w-xl mx-auto font-['Jost'] font-light leading-loose">
            Prácticas milenarias que complementan el yoga, trabajando en los planos físico, energético y emocional para una transformación integral.
          </p>
        </div>

        {/* Lista de terapias */}
        <div className="space-y-6">
          {terapias.map((t, index) => (
            <div
              key={t.nombre}
              className="group grid md:grid-cols-[1fr_auto] gap-6 border border-[#B2B89A]/20 hover:border-[#263B16]/30 p-8 md:p-10 transition-all duration-400 hover:bg-white"
            >
              <div>
                {/* Número decorativo */}
                <span className="text-[#B2B89A]/40 font-['Cormorant_Garamond'] text-5xl font-light absolute -mt-2 -ml-1 select-none hidden md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-[#263B16] font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light mb-4 md:pl-10">
                  {t.nombre}
                </h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-loose font-['Jost'] font-light md:pl-10">
                  {t.descripcion}
                </p>
              </div>

              {/* Metadata */}
              <div className="flex md:flex-col items-start md:items-end gap-4 md:gap-3 pt-2">
                <div className="text-right">
                  <p className="text-[#B2B89A] text-xs tracking-[0.2em] uppercase font-['Jost']">
                    Duración
                  </p>
                  <p className="text-[#263B16] font-['Cormorant_Garamond'] text-lg font-light">
                    {t.duracion}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#B2B89A] text-xs tracking-[0.2em] uppercase font-['Jost']">
                    Modalidad
                  </p>
                  <p className="text-[#263B16] font-['Cormorant_Garamond'] text-lg font-light">
                    {t.modalidad}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-block px-10 py-4 bg-[#263B16] hover:bg-[#344F63] text-[#F2F0EB] text-xs tracking-[0.35em] uppercase transition-all duration-300 font-['Jost']"
          >
            Reservar una Terapia
          </a>
        </div>
      </div>
    </section>
  );
}
