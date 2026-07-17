<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

defineProps<{
    name: string
}>()

</script>
<template>
    <nav class="sticky top-0 z-50 border-b-3 border-foreground bg-background">
        <div class="container mx-auto flex h-16 items-center justify-between px-4">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-primary border-3 border-foreground" />
                <span class="font-black text-xl uppercase">{{ name }}</span>
            </div>
            <div class="hidden md:flex items-center gap-6">
                <a href="#experience" class="font-bold hover:text-primary transition-colors">Experiencia</a>
                <a href="#projects" class="font-bold hover:text-primary transition-colors">Proyectos</a>
            </div>
            <Button>Hire Me</Button>
        </div>
    </nav>
</template>