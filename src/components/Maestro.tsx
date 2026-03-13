"use client";

const formacion = [
  {
    elemento: "Agua",
    simbolo: "◌",
    descripcion: "Fluidez, adaptabilidad, emoción profunda y purificación.",
  },
  {
    elemento: "Fuego",
    simbolo: "△",
    descripcion: "Transformación, voluntad, pasión y digestión interna.",
  },
  {
    elemento: "Tierra",
    simbolo: "□",
    descripcion: "Estabilidad, enraizamiento, presencia y manifestación.",
  },
  {
    elemento: "Viento",
    simbolo: "◇",
    descripcion: "Movimiento, libertad, comunicación y ligereza.",
  },
  {
    elemento: "Akash · Éter",
    simbolo: "○",
    descripcion: "Expansión, silencio, espacio y conciencia infinita.",
  },
];

export default function Maestro() {
  return (
    <section
      id="maestro"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #344F63 0%, #1A1A1A 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-4 font-['Jost']">
            Guía del camino
          </p>
          <h2 className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light">
            Maestro Gyan Kay
          </h2>
          <div className="w-10 h-px bg-[#B2B89A] mx-auto mt-6 opacity-60" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Izquierda - Historia */}
          <div className="space-y-6">
            <p className="text-[#F2F0EB]/80 font-['Cormorant_Garamond'] text-xl italic leading-relaxed">
              &ldquo;Hay viajes que transforman y otros que se realizan con un propósito: traer conocimiento vivo.&rdquo;
            </p>

            <div className="space-y-5 text-[#F2F0EB]/60 text-sm leading-loose font-['Jost'] font-light">
              <p>
                En noviembre de 2023, el Maestro Gyan Kay emprendió un viaje hacia el corazón de la tradición. Participó en el encuentro <strong className="text-[#B2B89A] font-light">&ldquo;Viaje al Corazón de la Selva Maya&rdquo;</strong> en Chichén Itzá, junto al Maestro Yogi Amandeep Singh, compartiendo enseñanzas con practicantes de distintas partes del mundo.
              </p>
              <p>
                Continuó su formación en Ciudad de México, realizando una <strong className="text-[#B2B89A] font-light">maestría en los Elementos Sagrados</strong> proveniente de las tradiciones vivas Udasin y los linajes espirituales de profunda transformación.
              </p>
              <p>
                Todo este camino tiene un propósito: traer esta sabiduría a nuestra tierra, a La Ligua, Chile, y a la comunidad que se reúne en Kay Atma.
              </p>
            </div>

            {/* Afiliaciones */}
            <div className="pt-4 border-t border-[#F2F0EB]/10">
              <p className="text-[#B2B89A] text-xs tracking-[0.3em] uppercase mb-3 font-['Jost']">
                Tradición y linaje
              </p>
              <div className="flex flex-wrap gap-3">
                {["Udasin", "Hatha Kriya Yoga", "Kundalini Yoga", "Elementos Sagrados"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#B2B89A]/30 text-[#B2B89A] text-xs px-3 py-1.5 tracking-wider font-['Jost']"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Derecha - Elementos Sagrados */}
          <div>
            <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-8 font-['Jost']">
              Maestría en los elementos sagrados
            </p>

            <div className="space-y-6">
              {formacion.map((f) => (
                <div
                  key={f.elemento}
                  className="flex items-start gap-5 border-b border-[#F2F0EB]/8 pb-6 last:border-0 last:pb-0"
                >
                  <span className="text-[#B2B89A] text-xl w-6 flex-shrink-0 mt-0.5 font-['Cormorant_Garamond']">
                    {f.simbolo}
                  </span>
                  <div>
                    <h4 className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-lg font-light mb-1">
                      {f.elemento}
                    </h4>
                    <p className="text-[#F2F0EB]/50 text-sm font-['Jost'] font-light leading-relaxed">
                      {f.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
