# ORVEX · México geográfico

Asset generado el 8 de septiembre de 2026 para `viewBox="0 0 700 460"`.

## Archivos

- `/private/tmp/orvex-mexico-map.json`: `d` completo, `viewBox`, `fillRule`, nodos y metadatos de proyección/fuente.
- `/private/tmp/orvex-mexico-map-preview.svg`: preview del contorno y posiciones. Los rótulos son diagnósticos; el texto de Cancún se debe alinear hacia la izquierda en el diseño final para evitar recorte.

## Contorno real y licencia

Fuente: Natural Earth, Admin 0 Countries, resolución 1:50m. Se extrajo exactamente el objeto con `ADM0_A3 = MEX` del GeoJSON original. Incluye la península de Baja California, Yucatán y las islas representadas por esa escala. No se dibujaron contornos manualmente.

- Datos: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson
- Licencia: **dominio público**, ver https://www.naturalearthdata.com/about/terms-of-use/ . Natural Earth permite modificaciones y uso comercial; el crédito es opcional.
- SHA256 del GeoJSON descargado: `3e458fc036ad0a66411f2c1e6cac49c5d7bfb81cb1123bc513b22511a2b7fdeb`.

## Proyección y simplificación

Proyección equirectangular con paralelo estándar 25° N. Coordenadas WGS84 en orden longitud, latitud. La transformación base es `u = longitud × cos(25°)` y `v = −latitud`. Se aplican una escala uniforme y una traslación para centrar todo México en el viewBox, dejando margen mínimo de 20 unidades. Los parámetros exactos están en `projection`.

Las líneas se simplificaron con Ramer–Douglas–Peucker a tolerancia de 0.45 unidades SVG después de proyectar. Se conservan todos los polígonos de origen; se debe renderizar con `fill-rule="evenodd"`. Resultado: 1015 vértices de origen, 578 vértices simplificados y 7588 caracteres de path.

## Nodos

Los nodos corresponden a **centros aproximados de ciudad**. No indican la dirección de una oficina y deben usarse como ubicaciones de cobertura. Jalisco se representa mediante Zapopan, según lo solicitado. San Luis Potosí se interpreta como la ciudad.

Coordenadas tomadas de GeoNames, bajo **CC BY 4.0**: https://www.geonames.org/about.html . Recomendación de atribución visible discreta: “Mapa: Natural Earth · Localidades: GeoNames”. Enlazar GeoNames a https://www.geonames.org/ y la licencia a https://creativecommons.org/licenses/by/4.0/ . Las coordenadas se proyectaron al espacio SVG con la misma transformación del contorno.

- **Zapopan, Jalisco**: WGS84 (20.721106, -103.387421); SVG **x=332.54, y=296.82**. Fuente: https://www.geonames.org/search.html?country=MX&q=Zapopan
- **San Luis Potosí**: WGS84 (22.15234352, -100.97135138); SVG **x=382.84, y=263.95**. Fuente: https://www.geonames.org/search.html?country=MX&q=San+Luis+Potos%C3%AD&startRow=0
- **Cancún**: WGS84 (21.174287565715755, -86.84655904769897); SVG **x=676.87, y=286.41**. Fuente: https://www.geonames.org/search.html?country=MX&q=Canc%C3%BAn
