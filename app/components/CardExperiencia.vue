<template>
  <UiCard class="mx-auto max-w-2xl overflow-hidden px-6 py-6" as="article">
    <p class="text-primary mb-1 text-sm font-semibold">
      {{ position }}
    </p>

    <div class="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
      <span v-if="link" class="font-medium">
        <NuxtLink :to="link" class="hover:text-foreground transition-colors">
          {{ company }}
        </NuxtLink>
      </span>
      <span v-else class="font-medium">{{ company }}</span>
      <span aria-hidden="true">&middot;</span>
      <span>{{ startDate }} &ndash; {{ endDate ?? "Presente" }}</span>
    </div>

    <p v-if="description" class="text-muted-foreground mb-3 line-clamp-3 text-ellipsis">
      {{ description }}
    </p>

    <div v-if="tags?.length" class="flex flex-wrap items-center gap-2">
      <UiBadge v-for="t in tags" :key="t" class="px-2 py-0.5 text-sm" variant="outline">
        {{ t }}
      </UiBadge>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>
defineProps<{
  position: string
  company: string
  startDate: string
  endDate?: string
  description?: string
  tags?: string[]
  link?: string
}>();
</script>
