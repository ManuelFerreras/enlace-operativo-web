# Sistema de diseño — Enlace Operativo

## Referencias aplicadas
- Concepto de sistema conectado: Anduril, https://www.anduril.com/.
- Jerarquía de producto y lectura B2B: Verkada, https://www.verkada.com/.
- Ritmo asimétrico y edición tipográfica: United Carriers, HOBRO DIGITAL y Sharplink, fichas verificadas en `01-research.md`.
- Profundidad contenida: Reflect.app Re-Design, referencia Dribbble documentada; no se replica la composición.

## Color y contraste
Fondo frío `#0b1017`: conecta con instrumentación, sin negro puro. Acento único `#ff575f`: aparece en acción principal, indicador de sección y geometría del perímetro. Neutral 10 pasos en `tokens.css`. Body `#c7ceca`, headings `#f1f3eb`, metadata `#9ba7a0`. Los estados usan texto además del color. Matriz medida en `docs/evidence/contrast.json`.

## Tipografía
Manrope (SIL OFL) como grotesca display/cuerpo, IBM Plex Mono (OFL) para anotaciones. Fuentes servidas con `next/font`, swap y latin. Hero fluido entre 4rem y 9rem (144px desktop), tracking -0.065em y leading 1.02. Párrafos 16–19px; metadata mínima 12px. Mono y métricas con tabular-nums.

## Composición
Grid de 12 columnas, gutter fluido; contenedor 1600px y márgenes 24–72px. Unidades 4px hasta 64px, espaciados de sección 96–160px. Hero abierto, servicios 5/7 y cobertura 7/5 evitan repetición. Bordes finos, sin tarjetas redondeadas genéricas. Radios reservados a controles y estados.

## Componentes
Ruta `/design-system`: Button (primary/secondary/ghost), Nav y menú completo, ServiceCard, StatCounter, CertificationBadge, TestimonialCard, LocationMap, ContactForm, Footer, SectionHeading, Marquee y Accordion. El cursor personalizado se omite: no aporta utilidad.

## Movimiento (Fase 4)
`--ease-out-expo`, `--ease-in-out-quart`, `--ease-spring`; duraciones 200/400/800/1200ms. Stagger 60ms. GSAP controla reveals y scroll; Framer controla feedback/transiciones sobre elementos diferentes. Lenis solo desktop fine pointer, sin reduced-motion. 3D demanda frames solo con cambios y visible. No ocultar contenido antes de que JavaScript esté listo. El preloader cubre únicamente la escena.

## Accesibilidad
Foco de 2px acento con separación; enlaces explícitos, skip link, landmarks, labels y errores anunciados. Menú con bloqueo de fondo, Escape y retorno de foco. Ningún significado solo por color. Fallback de escena 2D y selección de mapa mediante botones HTML. Contraste AA y body AAA medidos, zoom y anchos auditados.

## Ajuste a assets corporativos recibidos
Los siete PDF del cliente sustituyen la marca provisional y los datos del brief genérico. El logo oficial se conserva sin redibujar ni recolorear. Su azul y rojo son excepción de identidad al acento cromático único de UI. Se toma el navy y rojo del Dossier 2026, no el violeta de las plantillas anteriores. Fotografía documental de personal/unidades, extraída sin alterar, convive con el perímetro abstracto.
