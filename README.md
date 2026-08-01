# Veinte&30 CarWash — Sitio web

Sitio web del lavadero, lubricentro y estación ANCAP Veinte&30, Punta del Este, Uruguay.

## Estructura del proyecto (IMPORTANTE)

Para que funcione, los archivos DEBEN mantener esta estructura de carpetas:

```
lavadero_web/
├── index.html          # Estructura de la página
├── css/
│   └── styles.css      # Todos los estilos
├── js/
│   └── main.js         # Lógica interactiva + WhatsApp
└── README.md
```

El `index.html` va en la raíz. El CSS dentro de la carpeta `css/` y el JS dentro de `js/`.
Si los subís sueltos sin carpetas, la página se ve SIN estilos (blanca).

## WhatsApp conectado

Todos los formularios y botones abren WhatsApp al número **+598 94 421 186**:
- Reservas de lavadero y lubricentro
- Formulario de contacto
- Botones "Suscribirme" de los planes
- Botón "Sumarme al programa" de fidelidad

Para cambiar el número, editá la línea `const WHATSAPP='59894421186';` al inicio de `js/main.js`
(formato internacional, sin + ni espacios).

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo (ej. `veintey30`).
2. Subí los archivos manteniendo la estructura de carpetas.
3. Settings → Pages → rama `main`, carpeta `/ (root)`.
4. El sitio queda en `https://TU-USUARIO.github.io/veintey30/`

## Editar datos

Los precios, servicios, planes, menú y galería están como objetos al inicio de `js/main.js`.
Los colores de marca están en las variables `:root` al inicio de `css/styles.css`.

## Pendientes antes de publicar

- [ ] Cargar fotos reales en la galería
- [ ] Confirmar precios actualizados
- [ ] Verificar horarios de cada sucursal

---
© 2026 Veinte&30 · STI Ltda. · RUT 100062160016
