"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1A1A1A 0%, #263B16 50%, #344F63 100%)" }}
    >
      {/* Overlay de textura sutil */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B2B89A' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Círculo decorativo fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 border border-[#B2B89A]"
        style={{ maxWidth: "90vw", maxHeight: "90vw" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-8 border border-[#B2B89A]"
        style={{ maxWidth: "70vw", maxHeight: "70vw" }}
      />

      {/* Contenido principal */}
      <div
        className={`relative z-10 px-6 max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Isotipo SVG minimalista — figura humana en equilibrio */}
        <div className="mb-8 flex justify-center">
          <svg
            width="70"
            height="90"
            viewBox="0 0 70 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
          >
            {/* Cabeza */}
            <circle cx="35" cy="12" r="8" stroke="#B2B89A" strokeWidth="1.5" fill="none" />
            {/* Cuerpo fluido - trazo continuo representando postura de meditación */}
            <path
              d="M35 20 C35 28 20 32 18 42 C16 52 22 58 35 60 C48 58 54 52 52 42 C50 32 35 28 35 20"
              stroke="#B2B89A"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Brazos abiertos - gesto de apertura */}
            <path
              d="M22 36 C14 33 8 36 4 38"
              stroke="#B2B89A"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M48 36 C56 33 62 36 66 38"
              stroke="#B2B89A"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Piernas cruzadas en loto */}
            <path
              d="M25 60 C18 65 14 72 18 78 C22 84 30 84 35 82"
              stroke="#B2B89A"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M45 60 C52 65 56 72 52 78 C48 84 40 84 35 82"
              stroke="#B2B89A"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Nombre */}
        <h1 className="text-[#F2F0EB] font-['Cormorant_Garamond'] text-6xl md:text-8xl font-light tracking-[0.15em] uppercase mb-2">
          Kay Atma
        </h1>

        {/* Subtítulo */}
        <p className="text-[#B2B89A] text-xs tracking-[0.4em] uppercase mb-10 font-['Jost'] font-light">
          Escuela de Yoga y Terapias Ancestrales
        </p>

        {/* Separador */}
        <div className="w-16 h-px bg-[#B2B89A] mx-auto mb-10 opacity-60" />

        {/* Frase */}
        <p className="text-[#F2F0EB]/80 font-['Cormorant_Garamond'] text-xl md:text-2xl italic font-light leading-relaxed mb-12">
          &ldquo;El yoga no es exigencia, es presencia.<br />
          Es aprender a escuchar el cuerpo sin juicio.&rdquo;
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#clases"
            className="px-8 py-3.5 bg-[#263B16] hover:bg-[#344F63] text-[#F2F0EB] text-xs tracking-[0.3em] uppercase transition-all duration-300 border border-[#263B16] hover:border-[#344F63] w-full sm:w-auto text-center"
          >
            Explorar Clases
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 border border-[#B2B89A]/50 hover:border-[#F2F0EB] text-[#B2B89A] hover:text-[#F2F0EB] text-xs tracking-[0.3em] uppercase transition-all duration-300 w-full sm:w-auto text-center"
          >
            Comenzar Hoy
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[#B2B89A] text-xs tracking-[0.3em] uppercase">Descubrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#B2B89A] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
