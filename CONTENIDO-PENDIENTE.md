# Residencia — contenido pendiente

Todo lo marcado en el sitio con el chip **PENDIENTE** o con fondo tenue es
marcador de posición. Esta es la lista de lo que hace falta para publicar.

Ningún dato inventado se publicó: los espacios de métricas muestran “—” hasta
que Residencia confirme la cifra.

---

## 1. Casos — `src/data/cases.ts`  ← prioridad más alta

Ocho casos ya montados. Tres tienen material real (SEAT Arona, CUPRA Navidad,
Apocalipsis Zombie); cinco están vacíos.

Por cada caso, llenar:

| Campo | Qué es |
|---|---|
| `title` | Título del caso |
| `summary` | Una línea (sale en la tarjeta y en el share) |
| `challenge` | El reto de negocio o la tensión cultural |
| `idea` | La plataforma creativa |
| `execution` | Entregables, canales, rol de cada unidad |
| `result` | Impacto y aprendizajes |
| `metrics[].value` | La cifra. Si se deja vacío, sale “—” |
| `quote` / `quoteBy` | Opcional, cita del cliente |
| `approved` | Cambiar a `true` — quita el marcado de pendiente |

Marcas ya montadas: SEAT · CUPRA · Volkswagen · Mattel · Xbox · Telcel ·
Porsche · (Apocalipsis Zombie).
Para agregar otra: copiar una línea `mk(...)` en el array `cases`.

## 2. Equipo — `src/data/cases.ts` → `team`
Nombre, cargo e iniciales de 6 personas. Fotos en `public/media/team/`
(cuadradas, 800×800). Sin foto se muestra el recuadro con iniciales.

## 3. Reconocimientos — `src/data/cases.ts` → `awards`
Año, premio/festival, categoría y proyecto. **No se publica nada hasta
confirmarlo.**

## 4. Testimonios — `src/data/cases.ts` → `testimonials`
Cita, nombre, cargo y marca. **Requiere aprobación de cada cliente.**

## 5. Cifras — `src/data/cases.ts` → `stats`
`años` y `proyectos` están en “—”. Poner la cifra real y quitar `pending: true`.

## 6. Formulario de contacto — `src/config.ts`
1. Crear un formulario en <https://formspree.io> (gratis: 50 envíos/mes)
2. Apuntarlo a `cesar.j@residencia.com.mx`
3. Pegar el id en `FORMSPREE_ID`
4. Poner `FORM_DEMO = false`

Hasta entonces el formulario se muestra en **modo demostración**: se ve
completo pero avisa que no está conectado. No se pierde ningún mensaje en
silencio.

## 7. Creadores GR8
Nombres y links de redes de los creadores del roster. Hoy las fotos se publican
sin crédito.

## 8. Detalles menores
- **`Iprikene`** en la lista de marcas de Agency — parece error de dedo en el
  texto original. Confirmar el nombre correcto.
- **Bimbo** y **Bonafont**: los logos vienen de archivos muy pequeños
  (210×87 y 180×130). Si hay versión vectorial, mejor.
- **Producción**: hay 3 piezas. Cualquier reel adicional ayuda mucho.
- **Agency, GR8, Synergy** no tienen material propio todavía.

---

## Cómo quitar el marcado de pendiente

Para una captura limpia, agregar la clase `no-ph` al `<body>`: oculta los chips
y el fondo tenue sin borrar el texto. Para publicar de verdad, poner
`approved: true` en cada caso ya redactado.
