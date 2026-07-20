import type { Experience, Project, Testimonial } from './types'

export const portfolioData = {
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

export const experience: Experience[] = [
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

export const projects: Project[] = [
    {
        title: 'Offline Attendance',
        category: 'Saas',
        description: 'Sistema de registro de asistencia offline-first. Con validaciones de rut y sincronización de datos al recuperar la conexión.',
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

export const testimonials: Testimonial[] = [
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