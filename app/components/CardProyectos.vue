<template>
    <UiCard class="mx-auto max-w-2xl overflow-hidden px-6 py-6" as="article">
        <img v-if="image" :src="image" :alt="alt" class="mb-5 h-[240px] w-full rounded-lg object-cover shadow" />

        <p v-if="headline" class="text-primary mb-2 text-sm font-semibold">
            {{ headline }} <span v-if="date">- {{ date }}</span>
        </p>

        <NuxtLink v-if="title" :to="link" class="mb-2 inline-block font-semibold lg:text-2xl">
            {{ title }}
        </NuxtLink>

        <p v-if="description" class="text-muted-foreground mb-3 line-clamp-2 text-ellipsis">
            {{ description }}
        </p>

        <div v-if="tags?.length" class="flex flex-wrap items-center gap-2">
            <UiBadge v-for="t in tags" :key="t" class="px-2 py-0.5 text-sm" variant="outline">{{ t }}</UiBadge>
        </div>
    </UiCard>
</template>

<script lang="ts" setup>
defineProps<{
    image?: string;
    alt?: string;
    headline?: string;
    description?: string;
    title?: string;
    date?: string;
    tags?: string[];
    link?: string;
}>();
</script>
