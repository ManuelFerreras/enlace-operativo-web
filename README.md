# Enlace Operativo — sitio corporativo

Sitio de seguridad privada en español de México, construido con la identidad y los materiales corporativos de Enlace Operativo de Seguridad Privada, E.O.S.P., S.A. de C.V.

## Estado de entrega

Trabajo detenido por solicitud del usuario el 8 de septiembre de 2026. **Versión funcional estática; no se declara completado el brief de motion/3D ni la auditoría final.** El túnel ngrok y los servidores locales están cerrados. No se publicó en Vercel.

Incluye home, catálogo y seis páginas de solución, nosotros, cobertura, contacto, privacidad del preview y `/design-system`. Identidad oficial, fotografías, uniformes y flotilla extraídos de los PDF aportados; siete documentos originales disponibles como descargas.

Los formularios validan con React Hook Form/Zod y responden desde endpoints de demostración. **No envían correos, guardan información ni crean suscripciones.** Los contactos de teléfono, WhatsApp y correo provienen del dossier corporativo.

## Ejecutar localmente

Node.js 22.22.0 (ver `.nvmrc`) y npm.

```sh
npm ci
npm run dev
```

Abrir `http://localhost:3000`. Para comprobar la versión de producción:

```sh
npm run build
npm start
```

## Calidad

```sh
npm run typecheck
npm run lint
npm run build
```

Última ejecución antes de detener el desarrollo: tipos, lint y build correctos. Pruebas Playwright de home y sistema: cero errores de página, cero violaciones axe y sin desbordamiento a 375, 390, 768, 1280 y 1920 px. Evidencia en `docs/evidence/phase3-qa.json`. Estas pruebas no equivalen a una auditoría completa de todas las páginas.

Para repetir las capturas y controles automáticos con un servidor activo:

```sh
npx playwright install chromium
npm run qa
```

`QA_URL` permite usar otra URL local; `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` permite un Chromium ya instalado. Ambos son opcionales.

## Estructura

- `src/app`: rutas, metadata y endpoints.
- `src/components`: interfaz y componentes interactivos.
- `src/content`: servicios, contacto, cobertura, formularios, imágenes y documentos.
- `src/styles/tokens.css`: colores, tipografía, espacios y movimiento previsto.
- `public/assets`: material visual original y versiones WebP optimizadas.
- `public/documents`: siete PDF originales aportados por el cliente.
- `public/fonts`: fuentes locales para builds sin dependencia de Google Fonts.
- `docs`: investigación, decisiones, procedencia, auditorías y estado de entrega.

## Pendiente

- Motion GSAP/Framer, Lenis, transiciones y microinteracciones avanzadas.
- Escena 3D integrada, shader, preloader y escena compartida de servicios.
- Integrar el contorno geográfico preparado al selector de cobertura.
- Auditorías B–E completas, rendimiento de producción, vídeo de recorrido y validación entre navegadores.
- OG, favicon definitivo, sitemap/robots y preparación de Vercel.
- Confirmar vigencia y alcance de permisos, métricas propuestas y aviso de privacidad definitivo.

La auditoría independiente de arte estático (fase 2, ronda 2) aprobó con **8,64/10**. La auditoría de UX de fase 3 fue interrumpida al detener el trabajo.

## Material corporativo

Los PDF y marcas pertenecen a sus titulares. Se incluyen para este proyecto privado con autorización del usuario; no se añade una licencia pública. La documentación aportada contiene fechas y afirmaciones que requieren actualización: no se presentan como verificación independiente de autorizaciones vigentes. Ver `docs/05-content-placeholders.md` y `docs/06-handoff.md`.
