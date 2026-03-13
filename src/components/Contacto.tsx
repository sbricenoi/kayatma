"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  "Cuencos Tibetanos",
  "Respiración Holotrópica",
  "Masaje Ayurvédico",
  "Meditación Udasin",
  "Información general",
];

const horarios = [
  { dia: "Lunes y Miércoles", hora: "08:00 · 19:00 hrs" },
  { dia: "Martes y Jueves", hora: "07:00 · 18:30 hrs" },
  { dia: "Sábados", hora: "09:00 hrs · Clase grupal" },
];

export default function Contacto() {
  const [form, setForm] = useState<FormState>({ nombre: "", email: "", telefono: "", interes: "", mensaje: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const header = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useScrollReveal<HTMLDivElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: "linear-gradient(150deg, #131f0c 0%, #263B16 45%, #1A1A1A 70%, #344F63 100%)" }}
    >
      {/* Anillos decorativos */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[#B2B89A]/8 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[320px] h-[320px] rounded-full border border-[#B2B89A]/6 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* ── Encabezado ── */}
        <div
          ref={header.ref}
          className={`text-center mb-20 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <p className="text-[#B2B89A] text-[10px] tracking-[0.5em] uppercase font-['Jost'] mb-5">
            Comienza tu camino
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(3rem,8vw,6rem)] font-light text-[#F2F0EB] leading-none">
            Hablemos
          </h2>
          <div className="w-12 h-px bg-[#B2B89A]/50 mx-auto mt-7 mb-7" />
          <p className="text-[#F2F0EB]/50 text-sm font-['Jost'] font-light max-w-md mx-auto leading-loose">
            Si sientes el llamado a comenzar tu práctica, escríbenos. Estamos aquí para acompañarte en cada paso.
          </p>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-16 md:gap-24">

          {/* ── Info de contacto ── */}
          <div
            ref={infoRef.ref}
            className={`reveal-left ${infoRef.isVisible ? "visible" : ""} space-y-12 md:max-w-xs`}
          >
            {/* Ubicación */}
            <div>
              <p className="text-[#B2B89A] text-[9px] tracking-[0.45em] uppercase font-['Jost'] mb-5">
                Encuéntranos
              </p>
              <div className="space-y-6">
                {[
                  { label: "Ubicación", value: "La Ligua, V Región, Chile", href: null },
                  { label: "Instagram", value: "@kay_atma", href: "https://instagram.com/kay_atma" },
                  { label: "WhatsApp", value: "Escríbenos", href: "https://wa.me/56900000000" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[#F2F0EB]/30 text-[9px] uppercase tracking-[0.3em] font-['Jost'] mb-1.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="font-['Cormorant_Garamond'] text-xl font-light text-[#B2B89A] hover:text-[#F2F0EB] transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#F2F0EB]/80">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Separador */}
            <div className="w-12 h-px bg-[#B2B89A]/25" />

            {/* Horarios */}
            <div>
              <p className="text-[#B2B89A] text-[9px] tracking-[0.45em] uppercase font-['Jost'] mb-5">
                Horarios
              </p>
              <div className="space-y-4">
                {horarios.map((h) => (
                  <div key={h.dia} className="group">
                    <div className="flex justify-between items-end pb-3 border-b border-[#F2F0EB]/6 group-hover:border-[#B2B89A]/20 transition-colors duration-300">
                      <span className="text-[#F2F0EB]/50 text-xs font-['Jost'] font-light leading-snug max-w-[120px]">{h.dia}</span>
                      <span className="text-[#B2B89A] text-xs font-['Jost'] text-right">{h.hora}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#F2F0EB]/25 text-[10px] mt-5 font-['Jost'] leading-relaxed">
                * Horarios sujetos a cambios. Consulta disponibilidad.
              </p>
            </div>

            {/* Cita */}
            <div className="border-l border-[#B2B89A]/25 pl-5">
              <p className="font-['Cormorant_Garamond'] text-base italic font-light text-[#F2F0EB]/40 leading-relaxed">
                &ldquo;La práctica es el camino. El camino eres tú.&rdquo;
              </p>
            </div>
          </div>

          {/* ── Formulario ── */}
          <div
            ref={formRef.ref}
            className={`reveal-right ${formRef.isVisible ? "visible" : ""}`}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-20 min-h-[500px]">
                {/* Checkmark animado */}
                <div className="relative mb-10">
                  <div className="w-16 h-16 rounded-full border border-[#B2B89A]/30 flex items-center justify-center animate-pulse-glow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="#B2B89A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#F2F0EB] mb-4">
                  Mensaje enviado
                </h3>
                <div className="w-8 h-px bg-[#B2B89A]/40 mx-auto mb-6" />
                <p className="text-[#F2F0EB]/55 text-sm font-['Jost'] font-light leading-loose max-w-sm">
                  Gracias por escribirnos. Te responderemos a la brevedad. ¡Bienvenido al camino!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-10 text-[#B2B89A] hover:text-[#F2F0EB] text-[10px] tracking-[0.35em] uppercase font-['Jost'] transition-colors duration-300 border-b border-[#B2B89A]/30 hover:border-[#F2F0EB]/50 pb-0.5"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">

                {/* Fila nombre + email */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {[
                    { name: "nombre", label: "Nombre *", type: "text", placeholder: "Tu nombre completo", required: true },
                    { name: "email", label: "Correo *", type: "email", placeholder: "tu@correo.com", required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase mb-2.5 font-['Jost']">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof FormState]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border-b border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB] placeholder-[#F2F0EB]/20 py-4 text-sm outline-none transition-colors font-['Jost'] font-light"
                      />
                    </div>
                  ))}
                </div>

                {/* Teléfono */}
                <div className="mb-5">
                  <label className="block text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase mb-2.5 font-['Jost']">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full bg-transparent border-b border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB] placeholder-[#F2F0EB]/20 py-4 text-sm outline-none transition-colors font-['Jost'] font-light"
                  />
                </div>

                {/* Interés */}
                <div className="mb-5">
                  <label className="block text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase mb-2.5 font-['Jost']">
                    Me interesa
                  </label>
                  <select
                    name="interes"
                    value={form.interes}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB]/70 py-4 text-sm outline-none transition-colors font-['Jost'] font-light appearance-none cursor-pointer"
                    style={{ background: "transparent" }}
                  >
                    <option value="" style={{ background: "#1A1A1A" }}>Selecciona una opción</option>
                    {intereses.map((i) => (
                      <option key={i} value={i} style={{ background: "#1A1A1A" }}>{i}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="mb-10">
                  <label className="block text-[#B2B89A] text-[9px] tracking-[0.35em] uppercase mb-2.5 font-['Jost']">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntanos sobre ti y tu práctica actual..."
                    className="w-full bg-transparent border-b border-[#F2F0EB]/15 hover:border-[#B2B89A]/40 focus:border-[#B2B89A] text-[#F2F0EB] placeholder-[#F2F0EB]/20 py-4 text-sm outline-none transition-colors font-['Jost'] font-light resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-400/70 text-xs font-['Jost'] mb-5">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative w-full py-5 bg-[#F2F0EB] hover:bg-[#B2B89A] text-[#1A1A1A] text-[10px] tracking-[0.45em] uppercase font-['Jost'] transition-all duration-400 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {status === "loading" ? (
                      <>
                        <span className="w-3 h-3 border border-[#1A1A1A]/40 border-t-[#1A1A1A] rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-400" />
                      </>
                    )}
                  </span>
                </button>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
