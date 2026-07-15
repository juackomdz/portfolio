<script setup lang="ts">
import {
    ArrowRight,
    Briefcase,
    ExternalLink,
    Star,
} from '@lucide/vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import Badge from '@/components/ui/Badge.vue'
import BurstShape from '@/components/ui/shapes/BurstShape.vue'
import Star5Shape from '@/components/ui/shapes/Star5Shape.vue'
import HeartShape from '@/components/ui/shapes/HeartShape.vue'
import DotWave from '@/components/ui/canvas-effects/DotWave.vue'


// Portfolio data - customize for your own portfolio
const portfolioData = {
    name: 'Joaquin Mendez',
    title: 'Full stack Developer',
    tagline: 'Convirtiendo ideas en',
    taglineHighlight: 'Realidad',
    description:
        'Desarrollador Full Stack con experiencia creando soluciones escalables y optimizadas con un impacto real.',
    email: 'joaquin.enmt@gmail.com',
    location: 'Santiago, Chile',
    resumeUrl: '#',
    social: {
        github: 'https://github.com/juackomdz',
        linkedin: 'https://www.linkedin.com/in/joaquín-méndez-torres-5400a41a2/',
    },
}

interface Experience {
    year: string
    title: string
    company: string
    description: string
    color: string
}

const experience: Experience[] = [
    {
        year: '2023 - 2025',
        title: 'Full Stack Developer',
        company: 'OG Consultores',
        description: 'Desarrollo de aplicaciones web para diferentes clientes, publicos y privados, ademas de explotación de sistema de votaciones C-VOTA.',
        color: 'bg-primary',
    },
    {
        year: '2021 - 2022',
        title: 'Analista Desarrollador',
        company: 'Banco Internacional',
        description: 'Desarrollo y mantención de modulos en proyecto control de márgenes para sistema bancario e-Ibs.',
        color: 'bg-secondary',
    },
]

interface Project {
    title: string
    category: string
    description: string
    image: string
    tags: string[]
    color: string
    link: string
}

const projects: Project[] = [
    {
        title: 'Offline Attendance',
        category: 'Saas',
        description: 'Complete redesign of a major e-commerce platform, resulting in 40% increase in conversions.',
        image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['Nuxt', 'Drizzle', 'Zod', 'Tanstack Form', 'TailwindCSS'],
        color: 'bg-success',
        link: 'https://offline-attendance.vercel.app',
    },
    {
        title: 'Loteria',
        category: 'Design',
        description: 'Juego de loteria web con validaciones hecho con vue.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
        tags: ['Vue', 'Typescript', 'Shadcn UI'],
        color: 'bg-info',
        link: 'https://loteria-azure-sigma.vercel.app',
    },
]

interface Testimonial {
    quote: string
    author: string
    role: string
    color: string
}


const testimonials: Testimonial[] = [
    {
        quote: "Ha sido una experiencia increible trabajar con joaquín. Antes haciamos todo a lapiz y papel.",
        author: 'Juan Perez',
        role: 'Product Owner, FakeCorp',
        color: 'bg-accent',
    },
    {
        quote: "Joaquín es un desarrollador con un gran talento. Consiguió hacer la app tal cual como me la imaginaba",
        author: 'Tony Stark',
        role: 'CEO, Stark Industries',
        color: 'bg-success',
    },
    {
        quote: 'Trabajar con joaquín es una brisa de aire fresco. Altamente recomendado.',
        author: 'Homero Simpson',
        role: 'Operator, Springfield Nuclear Plant',
        color: 'bg-primary',
    },
]
</script>

<template>
    <div class="min-h-screen bg-background">
        <!-- Navigation -->
        <nav class="sticky top-0 z-50 border-b-3 border-foreground bg-background">
            <div class="container mx-auto flex h-16 items-center justify-between px-4">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-primary border-3 border-foreground" />
                    <span class="font-black text-xl uppercase">{{ portfolioData.name.split(' ')[0] }}</span>
                </div>
                <div class="hidden md:flex items-center gap-6">
                    <a href="#experience" class="font-bold hover:text-primary transition-colors">Experiencia</a>
                    <a href="#projects" class="font-bold hover:text-primary transition-colors">Proyectos</a>
                </div>
                <Button>Hire Me</Button>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative overflow-hidden border-b-3 border-foreground">
            <div class="absolute inset-0 grid-pattern opacity-30" />
            <!--<MouseRipple color="#0B056B" :speed="0.2" class="absolute inset-0" />-->
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
                            {{ portfolioData.tagline }}
                            <span
                                class="relative inline-block bg-accent px-3 py-1 border-3 border-foreground transform -rotate-2 shadow-[4px_4px_0px_hsl(var(--shadow-color))] ml-2">
                                {{ portfolioData.taglineHighlight }}
                            </span>
                        </h1>
                        <p class="text-xl text-muted-foreground mb-8 max-w-lg text-center mx-auto">
                            {{ portfolioData.description }}
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


        <!-- Experience Section -->
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
                        <div v-for="exp in experience" :key="exp.year"
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

        <!-- Projects Section -->
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
                                <img :src="project.image" :alt="project.title"
                                    class="w-full h-64 lg:h-full object-cover" />
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

        <!-- Testimonials Section -->
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


        <!-- Footer -->
        <footer class="py-8 bg-foreground text-background border-t-3 border-foreground">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-primary border-3 border-background" />
                        <span class="font-black uppercase">{{ portfolioData.name }}</span>
                    </div>
                    <p class="text-sm text-background/70">
                        &copy; {{ new Date().getFullYear() }} {{ portfolioData.name }}. All rights reserved.
                    </p>
                    <div class="flex items-center gap-4">
                        <a :href="portfolioData.social.github" target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub" class="text-background/70 hover:text-background transition-colors">
                            GitHub
                        </a>
                        <a :href="portfolioData.social.linkedin" target="_blank" rel="noopener noreferrer"
                            aria-label="LinkedIn" class="text-background/70 hover:text-background transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <ChatBot />
    </div>
</template>