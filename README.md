# Portfolio — Joaquín Méndez Torres

Sitio web personal de presentación profesional. Aplicación de una sola página con secciones de experiencia, proyectos, testimonios y un chatbot impulsado por Gemini AI.

**En vivo:** https://joaquin-mendez.vercel.app

## Stack

- **Framework:** [Nuxt 4](https://nuxt.com) + Vue 3
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com) con estética neubrutalism
- **Componentes:** [shadcn-vue](https://www.shadcn-vue.com/) (New York style)
- **Animaciones:** [Motion](https://motion.dev) (motion-v)
- **Modo oscuro:** `@nuxtjs/color-mode`
- **Despliegue:** [Vercel](https://vercel.com)

## Estructura

```
app/
  app.vue              ← punto de entrada (solo <Portfolio />)
  components/
    Portfolio.vue      ← compone todas las secciones
    Hero.vue           ← sección principal
    Navigation.vue     ← barra de navegación
    Experience.vue     ← experiencia profesional
    Projects.vue       ← proyectos destacados
    Testimonial.vue    ← testimonios
    ChatBot.vue        ← chatbot con Gemini AI
    Footer.vue         ← pie de página
    ui/                ← componentes shadcn-vue
  lib/utils.ts         ← utilidad cn() (clsx + tailwind-merge)
  utils/
    data.ts            ← datos del portafolio
    types.ts           ← tipos compartidos
  assets/css/
    tailwind.css       ← tema BoldKit (colores HSL, modo oscuro)
```

## Instalación

```bash
npm install
```

> Después de agregar/quitar dependencias, ejecuta `npm run postinstall` para regenerar los tipos de Nuxt.

## Desarrollo

```bash
npm run dev
```

El servidor de desarrollo arranca en `http://localhost:3000`.

## Build

```bash
npm run build      # build de producción
npm run generate   # exportación estática
npm run preview    # vista previa del build
```
