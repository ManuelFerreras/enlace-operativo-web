# Auditor A — segunda instancia independiente

Fecha: 2026-09-08. Alcance: arte estático de fase 2, home y `/design-system` del servidor de producción local en puerto 3001. No leí informes anteriores ni documentación del proceso. Inspeccioné tres capturas propias: home 1440 px, home 390 px y sistema de diseño 1440 px. Comparación externa limitada a `docs/evidence/competitor-desktop.png` (Monarca).

**Dictamen: aprueba el umbral visual de fase 2. Media 8,64/10; mínimo 8/10.** Es una valoración editorial independiente, no una prueba con usuarios.

- **Concepto claro y propio: 8,5.** «El control que no se ve» conecta con el perímetro de líneas y las tres capas operativas. La foto del equipo convierte la promesa abstracta en presencia humana concreta. El motivo orbital sigue siendo una forma frecuente en tecnología, por lo que todavía no alcanza una identidad visual excepcional.
- **Color, tipografía y espacio: 9.** Grafito, blanco cálido y coral tienen funciones consistentes. Gran escala tipográfica, márgenes generosos y reglas finas producen una composición controlada. La franja azul grisácea introduce un cambio de ritmo útil. La foto tiene menor calidad y un fondo comercial más ocupado que el resto del arte.
- **Jerarquía en tres segundos: 9.** Por inspección, se reconocen seguridad privada, promesa y acción principal antes que los detalles. En móvil el titular y el botón permanecen claros sin recortes. No se realizó una prueba cronometrada con participantes.
- **Coherencia de componentes: 9.** Servicios, botones, metadatos, separadores, formulario, cobertura y pie comparten criterios visibles. El DS representa el lenguaje de la home y reutiliza la franja humana de manera consistente. Estados interactivos y validación funcional no medidos en esta auditoría estática.
- **Evita clichés, excluido el logo oficial: 8.** No recurre a escudos decorativos adicionales, candados ni fotografías de vigilancia genérica. La foto observada tiene apariencia de equipo en contexto real; no verifiqué su procedencia. Los anillos, coordenadas y microtipografía técnica son convenciones conocidas, aunque aquí tienen apoyo en el contenido operativo.
- **Distinción dentro de webs oscuras: 8.** El coral, las filas de servicios abiertas y la presencia del equipo construyen una voz reconocible. Aislado, el hero todavía podría pertenecer a otra marca tecnológica: su mayor diferenciación aparece al ver la franja humana y el contenido de seguridad.
- **Comparación con Monarca: 9.** En la evidencia disponible, Enlace Operativo ofrece jerarquía, espaciado, consistencia y recorrido visual superiores. El tono se siente más específico y contemporáneo. La captura de Monarca muestra un área inicial blanca con indicador de carga: no permite comparar justamente el contenido final de ese hero ni inferir rendimiento.

## Observaciones concretas

La franja de fotografía real es el mejor contrapeso al lenguaje abstracto del hero. Se integra correctamente en tres columnas en escritorio y en bloques legibles en móvil. La fotografía muestra compresión y un encuadre documental: una imagen original de mayor resolución mejoraría el acabado sin perder credibilidad.

Las etiquetas «Personal en sitio», «Supervisión» y «Tecnología» explican las tres capas y evitan que la escena sea solo ornamental. En móvil, «Personal en sitio» se superpone con las líneas del perímetro, reduciendo ligeramente su limpieza. Separarla unos píxeles de la geometría sería un ajuste de acabado, no un bloqueo.

El DS mantiene la coherencia de la home y permite reconocer una familia real de componentes. El bloque de fundamentos muestra paleta y acciones, pero la escala tipográfica y el ritmo de espaciado se deducen de ejemplos: documentarlos explícitamente facilitaría futuras fases. La comparación visual estática no confirma accesibilidad instrumental, estados de foco/error, animaciones, 3D, rutas posteriores ni comportamiento del formulario; quedan fuera del dictamen.

## Evidencia propia

- `docs/evidence/audit-a-round2-home.png`
- `docs/evidence/audit-a-round2-mobile.png`
- `docs/evidence/audit-a-round2-ds.png`

Las capturas finales se tomaron tras cargar el contenido mediante 127.0.0.1:3001. Un intento anterior con espera de inactividad de red excedió el tiempo; las tres capturas finales sí se completaron y muestran las páginas renderizadas.
