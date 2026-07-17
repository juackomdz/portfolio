<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue';
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import { ExternalLink } from '@lucide/vue'

interface Project {
    title: string
    category: string
    description: string
    image: string
    tags: string[]
    color: string
    link: string
}

defineProps<{
    projects: Project[]
}>()
</script>
<template>
    <section id="projects" class="py-20 border-b-3 border-foreground bg-muted/30">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <Badge variant="outline" class="mb-4">Portfolio</Badge>
                <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Proyectos</h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Algunos proyectos hechos con tecnologias modernas.
                </p>
            </div>

            <div class="space-y-8">
                <Card v-for="(project, index) in projects" :key="project.title" class="overflow-hidden">
                    <div :class="['grid lg:grid-cols-2', index % 2 === 1 ? 'lg:flex-row-reverse' : '']">
                        <div :class="[
                            'border-b-3 lg:border-b-0 border-foreground',
                            index % 2 === 0 ? 'lg:border-r-3' : 'lg:border-l-3 lg:order-2',
                        ]">
                            <img :src="project.image" :alt="project.title" class="w-full h-64 lg:h-full object-cover" />
                        </div>

                        <div :class="['p-8 flex flex-col justify-center', index % 2 === 1 ? 'lg:order-1' : '']">
                            <Badge variant="outline" :class="`w-fit mb-4 border-0 ${project.color}`">
                                {{ project.category }}
                            </Badge>
                            <h3 class="text-2xl font-black uppercase mb-4">{{ project.title }}</h3>
                            <p class="text-muted-foreground mb-6">{{ project.description }}</p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <Badge v-for="tag in project.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
                            </div>
                            <NuxtLink :to="project.link">
                                <Button class="w-fit gap-2">
                                    View Project
                                    <ExternalLink class="h-4 w-4" />
                                </Button>
                            </NuxtLink>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </section>
</template>