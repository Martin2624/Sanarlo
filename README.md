# Sanarlo — sitio público

Sitio del consultorio de psicoterapia humanista de **Eva Czarina Estrada Nogales** en Hermosillo, Sonora.

Stack: **React 18 + Vite 6**. Despliegue: **Vercel**. Dominio: `sanarlo.com` (GoDaddy DNS).

---

## Arranque local

```bash
npm install
cp .env.example .env.local   # ya viene un .env.local pre-poblado con datos reales
npm run dev                  # http://localhost:5173
```

Para producir un build:

```bash
npm run build      # genera /dist
npm run preview    # sirve /dist localmente para verificar
```

---

## Estructura

```
sanarlo-web/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                 ← reemplazar placeholders aquí
├── src/
│   ├── main.jsx                ← entry de React
│   ├── App.jsx                 ← composición de secciones
│   ├── config.js               ← config centralizada (env + datos profesionales)
│   ├── styles/
│   │   └── globals.css         ← variables CSS, fuentes, tipografía base
│   ├── components/
│   │   ├── Nav.{jsx,css}
│   │   ├── Hero.{jsx,css}
│   │   ├── QuoteBand.{jsx,css}
│   │   ├── About.{jsx,css}
│   │   ├── Services.{jsx,css}
│   │   ├── Evaluations.{jsx,css}
│   │   ├── Blog.{jsx,css}
│   │   ├── Contact.{jsx,css}
│   │   └── Footer.{jsx,css}
│   └── data/
│       ├── services.js         ← áreas de trabajo (editable)
│       └── posts.js            ← posts del blog (editable)
├── .env.example
├── .env.local                  ← valores reales (no se sube a Git)
├── index.html                  ← meta tags SEO
├── vercel.json                 ← config de deploy
├── vite.config.js
└── package.json
```

## Decisiones técnicas

**Sin Tailwind ni librerías de UI.** CSS plano con variables. Esto se eligió porque:
- El sistema tipográfico depende del eje variable `SOFT` de Fraunces, que Tailwind no soporta nativamente.
- El sitio tiene 9 componentes — la carga mental de un sistema de utilities supera el beneficio.
- Mantiene el bundle pequeño y predecible.

**Fuentes self-hosted con `@fontsource-variable`.** Más rápido que Google Fonts (sin DNS lookup extra) y elimina dependencia externa.

**Datos como JS estáticos.** `services.js` y `posts.js` son fuente única de verdad. Cuando el blog crezca, migrar a Sanity / Notion API / MDX sin tocar componentes.

**Sin React Router por ahora.** El sitio es single-page con anchors. Cuando se agreguen posts individuales del blog se introduce Router (rutas `/blog/:slug`).

---

## Configurar imágenes reales

Las fotos van en `public/images/`. Mientras no existan, los componentes muestran placeholders con gradientes cálidos. Tamaños sugeridos:

- `eva-portrait.jpg` — retrato profesional, 4:5 vertical, mín 1200×1500px
- `consultorio.jpg` — foto del espacio, 3:4 vertical, mín 1200×1600px
- `post-1.jpg`, `post-2.jpg`, `post-3.jpg` — imágenes de blog, 4:3 horizontal, 1200×900px
- `og-image.jpg` — para redes sociales, 1200×630px

Optimizar antes de subir con [Squoosh](https://squoosh.app/) (objetivo: ≤200KB cada una).

---

## Deploy en Vercel + GoDaddy

### 1. Subir el repositorio a GitHub

```bash
git init
git add .
git commit -m "Initial commit: Sanarlo website"
git branch -M main
git remote add origin <tu-repo-url>
git push -u origin main
```

### 2. Conectar el repo en Vercel

1. En [vercel.com](https://vercel.com) → "Add New Project" → importa el repo.
2. Framework: **Vite** (auto-detectado).
3. Build command: `npm run build` · Output: `dist`.
4. Agregar las variables de entorno desde `.env.example`:
   - `VITE_WHATSAPP_NUMBER` = `5216623549458`
   - `VITE_EMAIL` = `eva@sanarlo.com`
   - `VITE_EVALUATIONS_URL` = `https://evaluaciones.sanarlo.com`
   - `VITE_SITE_URL` = `https://sanarlo.com`
5. Deploy. Vercel genera una URL `sanarlo-web-xxx.vercel.app`.

### 3. Apuntar el dominio de GoDaddy a Vercel

En el panel de Vercel del proyecto → **Settings → Domains** → agregar `sanarlo.com` y `www.sanarlo.com`.

Vercel te da los registros DNS. En GoDaddy (My Products → DNS de sanarlo.com):

| Tipo  | Nombre | Valor                  |
|-------|--------|------------------------|
| A     | @      | `76.76.21.21`          |
| CNAME | www    | `cname.vercel-dns.com` |

Propagación: 5 min a 48 hrs. Verifica con `dig sanarlo.com +short`.

### 4. Subdominio para la plataforma de evaluaciones

En GoDaddy agrega un registro extra:

| Tipo  | Nombre        | Valor                  |
|-------|---------------|------------------------|
| CNAME | evaluaciones  | `cname.vercel-dns.com` |

Y en Vercel, al proyecto de tu app de baterías existente, agrega el dominio `evaluaciones.sanarlo.com` desde su panel de Settings → Domains.

---

## Próximas integraciones

- **Doctoralia** (agenda): reemplazar el card de WhatsApp en `Contact.jsx` por el widget oficial de Doctoralia, o crear `/agenda` con su iframe. Variable de entorno sugerida: `VITE_DOCTORALIA_WIDGET_ID`.
- **Blog real**: migrar `data/posts.js` a Sanity o Notion API. Crear rutas `/blog` y `/blog/:slug` con React Router.
- **Analytics**: Vercel Analytics (incluido en plan free) o Plausible (privacy-friendly).
- **Aviso de privacidad**: crear `/aviso-de-privacidad` con el texto legal (Ley Federal de Protección de Datos Personales).

---

## Edición rápida

| Para cambiar...               | Editar...                                    |
|-------------------------------|----------------------------------------------|
| Áreas de servicio             | `src/data/services.js`                       |
| Posts del blog                | `src/data/posts.js`                          |
| Datos profesionales de Eva    | `src/config.js`                              |
| WhatsApp / email / URLs       | `.env.local` (y en Vercel para producción)   |
| Frase de filosofía            | `src/components/QuoteBand.jsx`               |
| Paleta de colores             | `src/styles/globals.css` (variables `:root`) |
| Copy del hero o sobre Eva     | El componente correspondiente                |
