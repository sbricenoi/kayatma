# Arquitectura del Proyecto — Kay Atma

## Descripción General

Landing page para **Kay Atma**, Escuela de Yoga y Terapias Ancestrales, ubicada en La Ligua, V Región, Chile.

El objetivo principal es comunicar la identidad de la marca de forma visual, con una experiencia que inspire paz, reflexión y presencia.

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Next.js | 16.x | Framework React con App Router |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos utilitarios |
| Resend | Latest | Servicio de envío de emails transaccionales |
| Node.js | >=22 | Runtime |

---

## Paleta de Colores (Brand Identity)

Extraída del documento oficial de branding de Kay Atma:

| Nombre | HEX | Uso |
|--------|-----|-----|
| Verde Bosque Profundo | `#263B16` | Color primario, CTAs, fondos de acento |
| Azul Petróleo Suave | `#344F63` | Color secundario, gradientes, variaciones |
| Verde Salvia | `#B2B89A` | Textos de acento, bordes, detalles |
| Negro Mineral | `#1A1A1A` | Fondos oscuros, texto principal |
| Blanco Hueso | `#F2F0EB` | Fondo base, texto sobre oscuro |

---

## Tipografía

- **Títulos:** Cormorant Garamond (serif elegante, evoca sofisticación y naturaleza)
- **Cuerpo:** Jost (sans-serif moderna, legible y limpia)
- Ambas importadas desde Google Fonts en `globals.css`

---

## Estructura del Proyecto

```
kayatma-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # API Route para envío de email
│   │   ├── globals.css             # Estilos globales, paleta, fuentes
│   │   ├── layout.tsx              # Layout raíz con metadata SEO
│   │   └── page.tsx                # Página principal (composición de secciones)
│   └── components/
│       ├── Navbar.tsx              # Navegación fija, responsive
│       ├── Hero.tsx                # Sección hero con isotipo SVG y CTA
│       ├── SobreNosotros.tsx       # Filosofía y valores de Kay Atma
│       ├── Clases.tsx              # Modalidades de yoga ofrecidas
│       ├── Beneficios.tsx          # Beneficios de la práctica del yoga
│       ├── Maestro.tsx             # Perfil del Maestro Gyan Kay
│       ├── Terapias.tsx            # Terapias ancestrales disponibles
│       ├── Contacto.tsx            # Formulario de contacto
│       └── Footer.tsx              # Pie de página con redes y navegación
├── docs/
│   └── arquitectura.md             # Este documento
├── public/
│   └── images/                     # Imágenes estáticas
├── .env.local                      # Variables de entorno (no se sube a Git)
├── .env.example                    # Ejemplo de variables de entorno
└── .gitignore
```

---

## Secciones de la Landing Page

| Sección | Componente | Descripción |
|---------|-----------|-------------|
| Hero | `Hero.tsx` | Pantalla completa, logo, tagline, CTA principal |
| Sobre Nosotros | `SobreNosotros.tsx` | Filosofía, valores y misión de Kay Atma |
| Clases | `Clases.tsx` | 4 modalidades: Hatha Kriya, Kundalini, Restaurativo, Meditación |
| Beneficios | `Beneficios.tsx` | 6 beneficios del yoga con grid interactivo |
| Maestro | `Maestro.tsx` | Historia de Gyan Kay y los 5 elementos sagrados |
| Terapias | `Terapias.tsx` | 4 terapias ancestrales con duración y modalidad |
| Contacto | `Contacto.tsx` | Formulario con validación + envío de email vía API |
| Footer | `Footer.tsx` | Navegación, redes sociales, ubicación |

---

## API Route — Envío de Email

**Ruta:** `POST /api/contact`

**Payload esperado:**
```json
{
  "nombre": "string (requerido)",
  "email": "string (requerido)",
  "telefono": "string (opcional)",
  "interes": "string (opcional)",
  "mensaje": "string (opcional)"
}
```

**Flujo:**
1. Validación de campos requeridos y formato de email
2. Envío de email al administrador (plantilla HTML oscura con branding)
3. Envío de email de confirmación al usuario
4. Respuesta JSON con éxito o error

**Variables de entorno requeridas:**
- `RESEND_API_KEY`: API key de Resend
- `CONTACT_EMAIL`: Correo destinatario de las consultas

---

## Variables de Entorno

Copiar `.env.example` a `.env.local` y completar:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API Key obtenida en resend.com |
| `CONTACT_EMAIL` | Email que recibirá las consultas del formulario |

---

## Despliegue

### GitHub
El repositorio está alojado en GitHub: `https://github.com/[usuario]/kayatma`

### Vercel
Desplegado automáticamente desde el repositorio GitHub.

**Variables de entorno en Vercel:**
Configurar en el Dashboard de Vercel > Settings > Environment Variables:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`

---

## Principios de Diseño

1. **Mobile First:** Diseñado primero para móvil, luego adaptado a desktop
2. **Paleta cohesiva:** Solo los 5 colores de la identidad de marca
3. **Tipografía con intención:** Serif para títulos (calidez), sans-serif para cuerpo (claridad)
4. **Espacio como elemento:** Márgenes generosos para evocar calma y respiración
5. **Gradientes orgánicos:** Transiciones suaves entre secciones
6. **Interacciones suaves:** Hover states con transiciones de 300-500ms
7. **Sin imágenes de stock:** Diseño basado en tipografía, color y formas geométricas

---

## Roadmap

- [x] Fase 1: Landing page estática con todas las secciones
- [x] Fase 1: Formulario de contacto con API de email
- [ ] Fase 2: Sistema de reservas/agendamiento de clases
- [ ] Fase 2: Blog/artículos sobre yoga y bienestar
- [ ] Fase 3: Portal de membresías y pagos en línea
- [ ] Fase 3: Galería multimedia (fotos y videos de clases)
