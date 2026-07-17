<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import { Briefcase } from '@lucide/vue'


interface Experience {
    year: string
    title: string
    company: string
    description: string
    color: string
}

defineProps<{
    experience: Experience[]
}>()

</script>
<template>
    <section id="experience" class="py-20 border-b-3 border-foreground">
        <div class="container mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <Badge variant="outline" class="mb-4">Experiencia</Badge>
                    <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Trabajos</h2>
                    <p class="text-lg text-muted-foreground mb-8">
                        Por los años, he tenido la oportunidad de trabajar en diferentes equipos construyendo
                        productos que generen impacto desde el minuto 1.

                    </p>
                </div>

                <div class="space-y-6">
                    <div v-for="exp in experience" :key="exp.year!"
                        class="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-foreground">
                        <div :class="['absolute left-1.5 top-0 w-4 h-4 border-3 border-foreground', exp.color]" />
                        <Card>
                            <CardHeader class="pb-2">
                                <div class="flex items-center gap-2 mb-1">
                                    <Badge variant="secondary">{{ exp.year }}</Badge>
                                </div>
                                <CardTitle class="text-xl">{{ exp.title }}</CardTitle>
                                <CardDescription class="flex items-center gap-1 font-medium">
                                    <Briefcase class="h-4 w-4" />
                                    {{ exp.company }}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p class="text-muted-foreground">{{ exp.description }}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>