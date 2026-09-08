# Auditor A — dirección de arte, fase 2

Fecha: 2026-09-08. Inspección independiente de `/` y `/design-system` en `http://localhost:3001`, a 1440 × 1000 y 390 × 844. Revisé concepto, sistema, componentes y estilos; no leí el log de proceso ni modifiqué código. Las puntuaciones son juicio de dirección de arte, no métricas de usuarios.

**Resultado: 8,29/10. No alcanza todavía el promedio requerido de 8,5.** Todos los criterios están por encima de 7. La base es sólida y está claramente mejor resuelta que la referencia local del competidor; le falta una firma visual más específica de Enlace Operativo.

## Puntuación

- **Concepto claro y original: 7,5.** “El control que no se ve” y el perímetro dan una idea legible. El objeto de órbitas, sin relación visible con personas o una operación real, todavía podría ilustrar IA, datos o ciberseguridad. La intención del documento es más específica que su traducción gráfica.
- **Color, tipografía y espacio con identidad: 8,5.** Navy frío, blanco cálido y coral funcionan con disciplina. Manrope de gran escala, mono pequeño y márgenes amplios crean autoridad. Los seis servicios mantienen buena lectura. La combinación pertenece a un lenguaje tecnológico bastante conocido; la marca oficial conservada aporta la identidad más inequívoca.
- **Jerarquía en tres segundos: 9.** El titular domina, el acento identifica la promesa y el botón principal se encuentra inmediatamente. En móvil el texto y el CTA mantienen prioridad, sin desbordamiento horizontal observado. “Seguridad privada” se aclara con marca y antetítulo; el titular aislado es deliberadamente amplio. Esta es una valoración visual, sin prueba cronometrada con usuarios.
- **Coherencia de componentes: 8,5.** Navegación, botones, servicios, formulario y acordeón comparten bordes, escala y acento. El sistema visual aguanta desktop y móvil. Los indicadores de certificación usan la misma flecha ascendente que las acciones, lo que difumina el significado visual entre credencial y enlace.
- **Evita clichés, preservando el logo oficial: 8.** No aparecen escudos añadidos, guardias de stock ni efectos de alarma. Se respeta el emblema provisto. Sí quedan convenciones frecuentes de tecnología premium: órbita luminosa, coordenadas, punto de estado, marcos técnicos y abundancia de flechas.
- **Distinción respecto a sitios oscuros promedio: 7,5.** La ejecución es más cuidada que una plantilla promedio, pero una prueba mental sustituyendo la marca por otra empresa tecnológica deja casi toda la página funcionando. El patrón de servicios es limpio y uniforme; aporta poca propiedad visual adicional.
- **Comparación explícita con seguridadmonarca.com.mx: 9.** Frente a la captura disponible de Monarca, EOSP presenta una escala tipográfica más decidida, CTA más visible, mejor continuidad entre módulos y menos fragmentación de color. Monarca usa banda de iconos amarillos, bloques corporativos alternados y fotografía conceptual de paraguas; EOSP supera esa composición en claridad y cohesión. La captura de Monarca tiene una gran zona superior blanca con aparente carga pendiente: no considero esa zona prueba fiable de su hero definitivo ni infiero rendimiento del sitio.

## Ajustes por impacto

1. **Dar significado propio al perímetro estático.** Relacionar el objeto con tres capas reales del servicio —por ejemplo presencia, supervisión y coordinación— mediante pocas conexiones y rótulos con función clara. Sustituir parte de la instrumentación decorativa por esa explicación. La mejora debe poder juzgarse antes de añadir 3D o movimiento.
2. **Introducir una muestra editorial del material corporativo real.** Un recorte bien elegido de personal/unidad, con un pie factual breve y continuidad gráfica con el perímetro, ayudaría a reconocer una empresa de seguridad física concreta. Ubicarlo como pausa intencional entre hero y catálogo, sin recargar el primer pantallazo ni alterar el logo oficial.
3. **Asignar significados distintos a los signos.** Reservar flechas para acciones/navegación y adoptar una marca más neutra para credenciales; trasladar algún rasgo del perímetro a los encabezados o filas para que el concepto viva también fuera del hero.

No penalizo ausencia de 3D, motion, mapa final ni rutas de servicio futuras: esta revisión valora el sistema y arte estático de la fase actual. Tampoco implica ni promete un premio Awwwards. Los estados de formulario y navegación no se sometieron a una auditoría funcional completa.

## Evidencia

- `docs/evidence/audit-a-home-desktop.png`
- `docs/evidence/audit-a-home-mobile.png`
- `docs/evidence/audit-a-ds-desktop.png` y `audit-a-ds-mobile.png`
- `docs/evidence/audit-a-ds-top.png`, `audit-a-ds-info.png`, `audit-a-ds-coverage.png` y `audit-a-ds-form.png`
- Comparación: `docs/evidence/competitor-desktop.png`

Las primeras capturas completas del sistema se tomaron antes de terminar la carga de algunas imágenes diferidas. La posterior captura `audit-a-ds-top.png` confirma el emblema oficial cargado, y `audit-a-ds-form.png` confirma el del footer. No se descontó puntuación por ese artefacto de captura.
