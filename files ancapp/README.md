# Veinte&30 — sitio web (STI Ltda. / Estación ANCAP)

Landing page one-page para las dos estaciones ANCAP de STI Ltda. en Punta del Este.

## Estructura (IMPORTANTE)
Los 3 archivos van **sueltos en la raíz del repositorio**, sin carpetas `css/` ni `js/`:
- `index.html`
- `styles.css`
- `script.js`

Este fue justamente el bug de la versión anterior: el HTML apuntaba a `css/styles.css`
y `js/main.js`, esas carpetas nunca se crearon en el repo, y por eso la página se veía
en blanco. Subiendo los 3 archivos sueltos al mismo nivel que este README, no pasa.

## Cómo editar contenido
Todos los datos (precios de lavado, planes, menú de cafetería, fidelidad, sucursales)
están en objetos al principio de `script.js`, en la sección "DATOS DEL NEGOCIO".

Los valores marcados como **EJEMPLO** en los comentarios son estimados y hay que
reemplazarlos por cifras reales antes de publicar:
- Precios de lavado por tipo de vehículo (Exprés / Completo / Premium)
- Precios de los planes Wash Club (Básico / Ilimitado / Premium)
- Menú de cafetería
- Estadísticas "+10K lavados/año" del hero y de Nosotros

Los datos que **ya venían confirmados** y se mantuvieron tal cual: direcciones y
horarios de las dos sucursales, teléfono de WhatsApp, RUT, precios del lubricentro
y precios de Car Detail.

## Formularios por WhatsApp
Los formularios de "Reservar turno" y "Contacto" arman un mensaje con todos los
datos cargados y abren WhatsApp al número definido en `EMPRESA.telefono` (dentro
de `script.js`). No hay backend: la persona tiene que confirmar el envío ella misma
en WhatsApp. Si el navegador bloquea la apertura automática, aparece un botón de
respaldo "Si no se abrió, tocá acá para ir a WhatsApp".

## Cómo publicar en GitHub Pages
1. Subí `index.html`, `styles.css` y `script.js` a la raíz del repositorio.
2. En Settings → Pages, elegí la rama donde están estos archivos, carpeta `/ (root)`.
3. Listo — no requiere build ni dependencias, es HTML/CSS/JS puro.

## Colores de marca
Paleta extraída de la identidad oficial de ANCAP (azul marino + amarillo),
definida como variables CSS en `:root` al principio de `styles.css`.
