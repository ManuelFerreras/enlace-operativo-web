# Registro de trabajo

## Fase 0 — Setup
- Repositorio aislado `security-site`; referencias sincronizadas intactas.
- Next.js 16, TS estricto, Tailwind v4, GSAP, Framer Motion, Lenis, R3F, drei, postprocessing, RHF/Zod, next-intl.
- Scripts de calidad, CI y pre-commit configurados.
- Decisión: Vercel y Next.js del brief prevalecen sobre el scaffold sugerido por Sites.
- Investigación delegada a un subagente; auditores recibirán solo URL, repo y rúbrica.
- Pendiente: finalizar instalación, validar base y confirmar acceso Vercel.

## Fase 0 — verificación
Typecheck, lint sin warnings y build aprobados. Node 22.22.0 fijado en .nvmrc.

## Fase 1 — Research
Tres SOTD B2B recientes verificados, dos referentes premium y capturas de competencia desktop/mobile. Dribbble: 1/3 cumple >=2000 likes; 2 referencias adicionales documentadas sin fingir cumplimiento. Deuda explícita.

## Cambio de alcance solicitado
El usuario pospone Vercel y solicita ejecución local + ngrok compartido en tiempo real. No se publica en Vercel. Preview: https://cytotropic-valentine-noncoincidentally.ngrok-free.dev.

## Fase 2 — concepto y sistema
Identidad adaptada a los siete PDF aportados: Enlace Operativo, logo original y navy/rojo. Sistema, tokens, componentes y /design-system funcionales. Fuentes locales next/font para compilación sin red; webpack tras incompatibilidad de sandbox de Turbopack build. Build, lint y tipos limpios. Axe cero violaciones en home y sistema; cinco tamaños sin desbordamiento. Contraste body 11.91:1. Auditor A independiente en curso. Fotografía real incorporada para responder a observación de diferenciación.

Fase 2 aprobada en ronda 2 por auditor nuevo: 8.64/10, mínimo8. Franja de fotografía real, tres capas operativas del perímetro y signo DOC para credenciales responden a ronda1.

## Fase 3 — páginas funcionales
Integradas rutas de servicios y seis detalles, nosotros con uniformes/flotilla/biblioteca de siete PDF, cobertura real de doce estados, contacto y privacidad del preview. Home incorpora método, cobertura, registros documentados, vínculos comerciales, contacto y alertas. Formularios de prueba explícitos; sin envío ni persistencia. Se conserva la versión de producción para auditoría independiente de UX.

## Cierre solicitado por el usuario
Se detuvo el desarrollo durante fase3. Ngrok y servidores cerrados; auditor B interrumpido. La última ejecución de tipo/lint/build pasó. QA phase3 finalizó: home y design-system sin errores de página/axe, cinco tamaños sin desbordamiento. Se prepara repositorio privado nuevo con README, handoff y exclusiones de archivos locales. No se implementaron fases4–7.
