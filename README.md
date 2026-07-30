# Portafolio — Joaquín Méndez Torres

Sitio web personal de presentación profesional. Aplicación de una sola página
con secciones de experiencia, proyectos, testimonios y un chatbot impulsado por
Gemini AI.

**En vivo:** https://joaquin-mendez.vercel.app

## Stack

- **Framework:** [Nuxt 4](https://nuxt.com) + Vue 3
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com) con estética
  neubrutalism
- **Componentes:** [Boldkit](https://boldkit.dev)
- **Despliegue:** [Vercel](https://vercel.com)

## Estructura

```
app/
  app.vue              ← punto de entrada
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

## MCP

El proyecto también cuenta con un servidor remoto MCP (Model Context Protocol)
que se puede conectar a cualquier agente de IA para responder acerca del
portafolio. Esto a traves del siguiente enlace:

`https://joaquin-mendez.vercel.app/mcp`
