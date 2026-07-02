<template>
  <div>
    <NuxtRouteAnnouncer />
    <Background />
    <Hero />
    <DocsTerminal class="mb-3" />
    <SeparatorHero texto="Proyectos" />
    <Motion initial="initial" while-in-view="animate" :variants="rootVariant">
      <Motion v-for="(item, index) in projects" :key="item.title" :variants="childVariant" class="mb-8">
        <CardProyectos v-bind="item" />
      </Motion>
    </Motion>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { stagger } from "motion-v";
import type { MotionProps } from "motion-v";

const rootVariant: MotionProps["variants"] = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.15),
    },
  },
};

const childVariant: MotionProps["variants"] = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "keyframes",
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    alt: "Warehouse inventory management",
    headline: "Offline-Attendance",
    title: "Asistencia Offline.",
    description:
      "Sistema de registro de asistencias pensado para conexiones inestables con sincronización automatica al recuperar el acceso a internet.",
    tags: ["Nuxt", "Drizzle", "Tanstack Form", "Zod", "TailwindCSS"],
    link: "https://offline-attendance.vercel.app",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    alt: "Loteria",
    headline: "Loteria",
    title: "Loteria.",
    description:
      "Juego de loteria web con validaciones.",
    tags: ["Vue", "TypeScript", "Shadcn UI"],
    link: "https://offline-attendance.vercel.app",
  },
];

onMounted(() => {
  console.log("Projects loaded:", projects.length);
});
</script>
