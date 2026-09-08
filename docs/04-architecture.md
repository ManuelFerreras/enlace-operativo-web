# Arquitectura

Next.js App Router, TypeScript estricto y Tailwind v4. El brief fija Next.js y Vercel: prevalece sobre el scaffold Vinext/Cloudflare recomendado por Sites; no se crea un segundo proyecto ni se cambia el destino.

- `src/app`: páginas, metadata y endpoints del servidor.
- `src/components`: UI reutilizable y componentes interactivos.
- `src/components/scene`: escena 3D lazy y materiales propios, aislados del contenido.
- `src/content`: todos los datos de servicios, sedes y placeholders.
- `src/styles/tokens.css`: tokens de color, espacio, tipo y movimiento.
- `src/i18n/request.ts`: locale es-MX, punto de extensión next-intl.
- `public`: fuentes/activos locales.
- `docs`: decisiones, evidencia, auditorías y entrega.

El formulario usa React Hook Form y Zod. `/api/contact` es un stub explícito sin envío ni persistencia. No imprime datos personales en logs. Las escenas pausan al salir del viewport; el contenido y CTA se renderizan en servidor. CI: typecheck, lint y build. Husky ejecuta typecheck antes de cada commit.
