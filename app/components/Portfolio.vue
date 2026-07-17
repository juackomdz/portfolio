<script setup lang="ts">

import { portfolioData, experience, projects, testimonials } from '@/utils/data'

</script>

<template>
    <div class="min-h-screen bg-background">
        <!-- Navigation -->
        <Navigation :name="portfolioData.name.split(' ')[0]!" />

        <!-- Hero Section -->
        <Hero :tagline="portfolioData.tagline" :tagline-highlight="portfolioData.taglineHighlight"
            :description="portfolioData.description" />

        <!-- Experience Section -->
        <Experience :experience="experience" />

        <!-- Projects Section -->
        <Projects :projects="projects" />

        <!-- Testimonials Section -->
        <Testimonial :testimonials="testimonials" />

        <!-- Footer -->
        <Footer :name="portfolioData.name" :github="portfolioData.social.github"
            :linkedin="portfolioData.social.linkedin" />

        <ChatBot />
    </div>
</template>