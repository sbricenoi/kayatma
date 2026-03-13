"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0f1a0a 0%, #1a2d10 25%, #263B16 55%, #344F63 100%)" }}
    >
      {/* ── Fondo: anillos animados ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {[520, 380, 250, 140].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border border-[#B2B89A]"
            style={{
              width: size,
              height: size,
              opacity: 0.06 + i * 0.025,
              animation: `breathe ${5 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* ── Partículas decorativas ── */}
      {[
        { top: "18%", left: "12%", size: 2 },
        { top: "72%", left: "8%", size: 1.5 },
        { top: "35%", right: "10%", size: 2.5 },
        { top: "80%", right: "15%", size: 1.5 },
        { top: "55%", left: "25%", size: 1 },
        { top: "25%", right: "28%", size: 1 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#B2B89A]"
          style={{
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? p.right : undefined,
            width: p.size,
            height: p.size,
            opacity: 0.35,
            animation: `float ${4 + i * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* ── Contenido ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Isotipo — figura en meditación */}
        <div
          className="mb-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
            transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <svg
            width="72"
            height="96"
            viewBox="0 0 72 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-float"
          >
            <circle cx="36" cy="11" r="7.5" stroke="#B2B89A" strokeWidth="1.2" fill="none" />
            <path
              d="M36 19 C36 27 22 31 20 41 C18 51 24 57 36 59 C48 57 54 51 52 41 C50 31 36 27 36 19Z"
              stroke="#B2B89A" strokeWidth="1.2" fill="none" strokeLinecap="round"
            />
            <path d="M23 37 C15 34 8 37 4 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M49 37 C57 34 64 37 68 40" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M26 59 C20 65 15 73 20 80 C25 87 31 87 36 85" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M46 59 C52 65 57 73 52 80 C47 87 41 87 36 85" stroke="#B2B89A" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Eyebrow */}
        <p
          className="text-[#B2B89A] text-[10px] tracking-[0.5em] uppercase font-['Jost'] mb-5"
          style={{
            opacity: loaded ? 0.8 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          }}
        >
          La Ligua · Chile
        </p>

        {/* Título */}
        <h1
          className="font-['Cormorant_Garamond'] text-[clamp(4rem,14vw,8rem)] font-light tracking-[0.12em] uppercase leading-none text-[#F2F0EB] mb-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1.1s ease 0.45s, transform 1.1s ease 0.45s",
          }}
        >
          Kay Atma
        </h1>

        {/* Subtítulo marca */}
        <p
          className="text-[#B2B89A] text-[10px] md:text-xs tracking-[0.42em] uppercase font-['Jost'] font-light mb-10"
          style={{
            opacity: loaded ? 0.7 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
          }}
        >
          Escuela de Yoga y Terapias Ancestrales
        </p>

        {/* Línea separadora animada */}
        <div
          className="w-16 h-px bg-gradient-to-r from-transparent via-[#B2B89A] to-transparent mb-10"
          style={{
            opacity: loaded ? 0.6 : 0,
            transition: "opacity 1s ease 0.75s",
          }}
        />

        {/* Cita */}
        <blockquote
          className="font-['Cormorant_Garamond'] text-[clamp(1.05rem,2.8vw,1.4rem)] italic font-light text-[#F2F0EB]/75 leading-relaxed max-w-xl mb-14"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.1s ease 0.9s, transform 1.1s ease 0.9s",
          }}
        >
          &ldquo;El yoga no es exigencia, es presencia.<br className="hidden sm:block" />
          Es aprender a escuchar el cuerpo sin juicio.&rdquo;
        </blockquote>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 1.1s, transform 1s ease 1.1s",
          }}
        >
          <a
            href="#clases"
            className="group relative px-9 py-4 bg-[#263B16] hover:bg-[#344F63] text-[#F2F0EB] text-[10px] tracking-[0.4em] uppercase font-['Jost'] transition-all duration-500 w-full sm:w-auto text-center overflow-hidden"
          >
            <span className="relative z-10">Explorar Clases</span>
          </a>
          <a
            href="#contacto"
            className="px-9 py-4 border border-[#B2B89A]/40 hover:border-[#F2F0EB]/70 text-[#B2B89A] hover:text-[#F2F0EB] text-[10px] tracking-[0.4em] uppercase font-['Jost'] transition-all duration-400 w-full sm:w-auto text-center"
          >
            Comenzar Hoy
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 0.45 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <span className="text-[#B2B89A] text-[9px] tracking-[0.45em] uppercase font-['Jost']">Descubrir</span>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-px h-8 bg-gradient-to-b from-[#B2B89A] to-transparent" />
          <div
            className="w-1 h-1 rounded-full bg-[#B2B89A]"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
