<template>
  <div>
    <span
      class="relative flex h-50 items-center justify-center from-foreground to-foreground/30 pointer-events-none relative z-10 bg-linear-to-b bg-clip-text text-center text-5xl leading-none font-bold tracking-tight whitespace-pre-wrap text-transparent"
    >
      {{ prop.texto }}
    </span>
    <div class="flex mb-5 relative">
      <UiSeparator />
    </div>
  </div>
</template>
<script setup lang="ts">
const prop = defineProps({
  texto: String,
});
</script>
