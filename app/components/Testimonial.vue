<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import HeartShape from '@/components/ui/shapes/HeartShape.vue'
import { Star } from '@lucide/vue'

interface Testimonial {
    quote: string
    author: string
    role: string
    color: string
}

defineProps<{
    testimonials: Testimonial[]
}>()
</script>
<template>
    <section class="py-20 border-b-3 border-foreground">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <Badge variant="outline" class="mb-4">Testimonios</Badge>
                <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight">Que dicen de mi.</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <Card v-for="testimonial in testimonials" :key="testimonial.author"
                    :class="`relative overflow-hidden ${testimonial.color}/10`">
                    <HeartShape :size="60"
                        :class="`absolute -top-2 -right-2 opacity-20 ${testimonial.color.replace('bg-', 'text-')}`" />
                    <CardContent class="pt-6">
                        <div class="flex gap-1 mb-4">
                            <Star v-for="i in 5" :key="i" class="h-5 w-5 fill-warning text-warning" />
                        </div>
                        <p class="text-lg mb-6">"{{ testimonial.quote }}"</p>
                        <div class="flex items-center gap-3">
                            <div
                                :class="['w-12 h-12 border-3 border-foreground flex items-center justify-center font-bold text-lg', testimonial.color]">
                                {{ testimonial.author.charAt(0) }}
                            </div>
                            <div>
                                <p class="font-bold">{{ testimonial.author }}</p>
                                <p class="text-sm text-muted-foreground">{{ testimonial.role }}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>