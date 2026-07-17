<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Badge from '@/components/ui/Badge.vue'
import BurstShape from '@/components/ui/shapes/BurstShape.vue'
import Star5Shape from '@/components/ui/shapes/Star5Shape.vue'
import DotWave from '@/components/ui/canvas-effects/DotWave.vue'
import { ArrowRight } from '@lucide/vue';

defineProps<{
    tagline: string,
    taglineHighlight: string,
    description: string
}>()

</script>
<template>
    <section class="relative overflow-hidden border-b-3 border-foreground">
        <div class="absolute inset-0 grid-pattern opacity-30" />
        <DotWave :speed="0.25" color="#4BCCE3" :gap="50" class="absolute inset-0" />
        <BurstShape :size="120"
            class="absolute top-10 right-10 text-accent hidden lg:block animate-[brutal-wiggle_3s_ease-in-out_infinite]" />
        <Star5Shape :size="80" class="absolute bottom-20 left-20 text-secondary hidden lg:block" />

        <div class="container mx-auto px-4 py-20 md:py-32 relative">
            <div class="flex justify-center">
                <div class="text-center max-w-2xl">
                    <Badge variant="secondary" class="mb-6 shadow-[3px_3px_0px_hsl(var(--shadow-color))]">
                        <span class="flex items-center gap-1">
                            <span class="w-2 h-2 bg-success rounded-full animate-pulse" />
                            Disponibilidad Inmediata
                        </span>
                    </Badge>
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
                        {{ tagline }}
                        <span
                            class="relative inline-block bg-accent px-3 py-1 border-3 border-foreground transform -rotate-2 shadow-[4px_4px_0px_hsl(var(--shadow-color))] ml-2">
                            {{ taglineHighlight }}
                        </span>
                    </h1>
                    <p class="text-xl text-muted-foreground mb-8 max-w-lg text-center mx-auto">
                        {{ description }}
                    </p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <NuxtLink to="mailto:joaquin.enmt@gmail.com">
                            <Button size="lg" class="gap-2" animation="pulse">
                                Contactame
                                <ArrowRight class="h-5 w-5" />
                            </Button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>