<template>
  <Terminal class="mx-auto">
    <TerminalItem :index="0">
      <TypingAnimation text="> npx about-me" />
    </TerminalItem>

    <TerminalItem v-for="(text, i) in texts" :key="i" :index="i + 1">
      <AnimatedSpan class="text-green-500">
        <span>{{ text }}</span>
      </AnimatedSpan>
    </TerminalItem>
  </Terminal>
</template>

<script lang="ts" setup>
const texts = [
  "Full Stack Developer.",
  "Santiago, Chile.",
  "Languages: Go, Java, JS/TS.",
  "Backend: Spring, NestJS, Express, Gin-Gonic, API REST, ORM.",
  "Frontend: Vue, Nuxt, Tailwindcss, Bootstrap.",
  "Databases: MySQL, SQLite, PostgreSQL MongoDB.",
  "Tools: Git, Github, Vite, Docker, Postman, Claude Code.",
];
</script>
