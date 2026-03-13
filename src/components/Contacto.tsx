"use client";

import { useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  interes: string;
  mensaje: string;
};

type Status = "idle" | "loading" | "success" | "error";

const intereses = [
  "Hatha Kriya Yoga",
  "Yoga Kundalini",
  "Yoga Restaurativo",
  "Meditación y Pranayama",
  "Terapias Ancestrales",
  "Información general",
];

export default function Contacto() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    telefono: "",
    interes: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setStatus("success");
      setForm({ nombre: "", email: "", telefono: "", interes: "", mensaje: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  return (
    <section
      id="contacto"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(160deg, #263B16 0%, #1A1A1A 60%, #344F63 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-4 font-['Jost']">
            Comienza tu camino
          </p>
          <h2 className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light">
            Hablemos
          </h2>
          <div className="w-10 h-px bg-[#B2B89A] mx-auto mt-6 opacity-60" />
          <p className="text-[#F2F0EB]/60 text-sm mt-6 max-w-md mx-auto font-['Jost'] font-light leading-loose">
            Si sientes el llamado a comenzar tu práctica o tienes alguna pregunta, escríbenos. Estamos aquí para acompañarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="space-y-10">
            <div>
              <p className="text-[#B2B89A] text-xs tracking-[0.3em] uppercase mb-5 font-['Jost']">
                Encuéntranos
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-[#F2F0EB]/40 text-xs uppercase tracking-wider font-['Jost'] mb-1">
                    Ubicación
                  </p>
                  <p className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-lg font-light">
                    La Ligua, V Región, Chile
                  </p>
                </div>
                <div>
                  <p className="text-[#F2F0EB]/40 text-xs uppercase tracking-wider font-['Jost'] mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/kay_atma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B2B89A] hover:text-[#F2F0EB] font-['Cormorant_Garamond'] text-lg font-light transition-colors"
                  >
                    @kay_atma
                  </a>
                </div>
                <div>
                  <p className="text-[#F2F0EB]/40 text-xs uppercase tracking-wider font-['Jost'] mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/56900000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B2B89A] hover:text-[#F2F0EB] font-['Cormorant_Garamond'] text-lg font-light transition-colors"
                  >
                    Escríbenos
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <p className="text-[#B2B89A] text-xs tracking-[0.3em] uppercase mb-5 font-['Jost']">
                Horarios de clases
              </p>
              <div className="space-y-3">
                {[
                  { dia: "Lunes y Miércoles", hora: "08:00 · 19:00 hrs" },
                  { dia: "Martes y Jueves", hora: "07:00 · 18:30 hrs" },
                  { dia: "Sábados", hora: "09:00 hrs · Clase grupal" },
                ].map((h) => (
                  <div key={h.dia} className="flex justify-between border-b border-[#F2F0EB]/8 pb-3">
                    <span className="text-[#F2F0EB]/60 text-sm font-['Jost'] font-light">{h.dia}</span>
                    <span className="text-[#B2B89A] text-sm font-['Jost']">{h.hora}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#F2F0EB]/30 text-xs mt-4 font-['Jost']">
                * Horarios sujetos a cambios. Consulta disponibilidad.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-12 h-12 border border-[#B2B89A]/40 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#B2B89A] text-xl">✓</span>
                </div>
                <h3 className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-3xl font-light mb-3">
                  Mensaje enviado
                </h3>
                <p className="text-[#F2F0EB]/60 text-sm font-['Jost'] font-light leading-relaxed">
                  Gracias por escribirnos. Te responderemos a la brevedad. ¡Bienvenido al camino!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[#B2B89A] hover:text-[#F2F0EB] text-xs tracking-[0.3em] uppercase transition-colors font-['Jost']"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label className="block text-[#B2B89A] text-xs tracking-[0.2em] uppercase mb-2 font-['Jost']">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full bg-transparent border border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB] placeholder-[#F2F0EB]/25 px-4 py-3.5 text-sm outline-none transition-colors font-['Jost'] font-light"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#B2B89A] text-xs tracking-[0.2em] uppercase mb-2 font-['Jost']">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@correo.com"
                    className="w-full bg-transparent border border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB] placeholder-[#F2F0EB]/25 px-4 py-3.5 text-sm outline-none transition-colors font-['Jost'] font-light"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-[#B2B89A] text-xs tracking-[0.2em] uppercase mb-2 font-['Jost']">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full bg-transparent border border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB] placeholder-[#F2F0EB]/25 px-4 py-3.5 text-sm outline-none transition-colors font-['Jost'] font-light"
                  />
                </div>

                {/* Interés */}
                <div>
                  <label className="block text-[#B2B89A] text-xs tracking-[0.2em] uppercase mb-2 font-['Jost']">
                    Me interesa
                  </label>
                  <select
                    name="interes"
                    value={form.interes}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB]/70 px-4 py-3.5 text-sm outline-none transition-colors font-['Jost'] font-light appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona una opción</option>
                    {intereses.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-[#B2B89A] text-xs tracking-[0.2em] uppercase mb-2 font-['Jost']">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntanos sobre ti y tu práctica actual..."
                    className="w-full bg-transparent border border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB] placeholder-[#F2F0EB]/25 px-4 py-3.5 text-sm outline-none transition-colors font-['Jost'] font-light resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-400/80 text-xs font-['Jost']">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#F2F0EB] hover:bg-[#B2B89A] text-[#1A1A1A] text-xs tracking-[0.35em] uppercase font-['Jost'] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
