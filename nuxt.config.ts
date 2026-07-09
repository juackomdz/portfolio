import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    geminiApiKey: "",
  },

  modules: [
    "@nuxtjs/color-mode",
    "motion-v/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
  ],

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },

  colorMode: {
    storageKey: "portfolio-color-mode",
    classSuffix: "",
  },

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 0,
    },

    mode: "svg",
    class: "shrink-0",
    fetchTimeout: 2000,
    serverBundle: "local",
  },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: { lang: "es" },
      title: "Joaquín Méndez Torres | Full Stack Developer",
      meta: [
        {
          content:
            "Portafolio de Joaquín Méndez Torres, Full Stack Developer especializado en Nuxt, Vue, TypeScript, Java y arquitecturas modernas. Proyectos y experiencia profesional.",
          name: "description",
        },
        { name: "theme-color", content: "#000000" },
        { property: "og:title", content: "Joaquín Méndez Torres | Full Stack Developer" },
        {
          property: "og:description",
          content:
            "Portfolio de Joaquín Méndez Torres, Full Stack Developer especializado en Nuxt, Vue, TypeScript, Java y arquitecturas modernas. Proyectos y experiencia profesional.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "canonical", href: "https://joaquin-mendez.vercel.app" }],
    },
  },
});