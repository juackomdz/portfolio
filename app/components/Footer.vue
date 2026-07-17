<script setup lang="ts">

defineProps<{
    name: string,
    github: string,
    linkedin: string
}>()

</script>
<template>
    <footer class="py-8 bg-foreground text-background border-t-3 border-foreground">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-primary border-3 border-background" />
                    <span class="font-black uppercase">{{ name }}</span>
                </div>
                <p class="text-sm text-background/70">
                    &copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.
                </p>
                <div class="flex items-center gap-4">
                    <a :href="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        class="text-background/70 hover:text-background transition-colors">
                        GitHub
                    </a>
                    <a :href="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        class="text-background/70 hover:text-background transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>