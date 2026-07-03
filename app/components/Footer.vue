<template>
  <UiContainer as="footer" class="py-16 lg:py-24">
    <section class="mt-12 flex flex-col justify-between gap-5 border-t pt-8 lg:mt-16 lg:flex-row">
      <p class="text-muted-foreground">&copy; {{ new Date().getFullYear() }} Joaquín Méndez.</p>
      <div class="flex items-center gap-2">
        <NuxtLink to="https://www.github.com/juackomdz">
          <Icon name="jam:github" class="h-8 w-8" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/joaquín-méndez-torres-5400a41a2/">
          <Icon name="ant-design:linkedin-filled" class="h-8 w-8" />
        </NuxtLink>
        <NuxtLink to="mailto:joaquin.enmt@gmail.com">
          <Icon name="line-md:email-filled" class="h-8 w-8" />
        </NuxtLink>
      </div>
    </section>
  </UiContainer>
</template>
