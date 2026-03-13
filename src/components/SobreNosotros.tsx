"use client";

export default function SobreNosotros() {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-[#F2F0EB]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-4 font-['Jost']">
            Nuestra Esencia
          </p>
          <h2 className="text-[#263B16] font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light">
            ¿Qué es Kay Atma?
          </h2>
          <div className="w-10 h-px bg-[#B2B89A] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <p className="text-[#1A1A1A]/75 text-lg font-['Cormorant_Garamond'] italic leading-relaxed">
              &ldquo;Kay Atma nació del deseo de crear un espacio donde cada persona pudiera encontrarse consigo misma, sin prisa, sin juicio, solo con presencia.&rdquo;
            </p>
            <p className="text-[#1A1A1A]/65 text-sm leading-loose font-['Jost'] font-light">
              Somos una escuela de yoga y terapias ancestrales ubicada en La Ligua, V Región de Chile. Nuestra propuesta integra diversas tradiciones del yoga con un enfoque profundo en el bienestar físico, emocional y espiritual.
            </p>
            <p className="text-[#1A1A1A]/65 text-sm leading-loose font-['Jost'] font-light">
              Practicar aquí es crear un espacio para escucharte. Es habitar tu cuerpo con respeto y conciencia. Cada clase es una invitación a volver a ti.
            </p>

            {/* Valores */}
            <div className="pt-4 space-y-4">
              {[
                { titulo: "Presencia", desc: "Cada práctica comienza con el momento presente." },
                { titulo: "Tradición Viva", desc: "Enseñanzas de linajes espirituales milenarios." },
                { titulo: "Comunidad", desc: "Un espacio seguro para crecer junto a otros." },
              ].map((v) => (
                <div key={v.titulo} className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-[#263B16] mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="text-[#263B16] font-['Jost'] text-xs tracking-[0.2em] uppercase">
                      {v.titulo}
                    </span>
                    <p className="text-[#1A1A1A]/60 text-sm font-['Jost'] font-light mt-0.5">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado visual */}
          <div className="relative">
            {/* Rectángulo decorativo de fondo */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#B2B89A]/30" />
            {/* Bloque con cita centrada */}
            <div
              className="relative p-12 flex flex-col items-center justify-center text-center min-h-[380px]"
              style={{ background: "linear-gradient(135deg, #263B16 0%, #344F63 100%)" }}
            >
              {/* Mandala decorativo SVG */}
              <svg
                className="mb-6 opacity-30"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="38" stroke="#B2B89A" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="28" stroke="#B2B89A" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="18" stroke="#B2B89A" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="8" stroke="#B2B89A" strokeWidth="0.5" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 40 + 10 * Math.cos(rad);
                  const y1 = 40 + 10 * Math.sin(rad);
                  const x2 = 40 + 38 * Math.cos(rad);
                  const y2 = 40 + 38 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#B2B89A"
                      strokeWidth="0.5"
                    />
                  );
                })}
              </svg>

              <p className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-2xl italic font-light leading-relaxed">
                &ldquo;Practicar yoga es crear un espacio para escucharte. Es habitar tu cuerpo con respeto y conciencia.&rdquo;
              </p>
              <div className="w-8 h-px bg-[#B2B89A]/60 mt-8 mb-4" />
              <p className="text-[#B2B89A] text-xs tracking-[0.3em] uppercase font-['Jost']">
                Kay Atma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
