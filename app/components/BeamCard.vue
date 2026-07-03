<template>
  <UiCard class="relative mx-auto w-[350px] overflow-hidden border-0">
    <UiCardHeader>
      <UiCardTitle>Now Playing</UiCardTitle>
      <UiCardDescription>Stairway to Heaven - Led Zeppelin</UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <div class="flex flex-col items-center gap-4">
        <div class="size-48 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-xs" />

        <div class="text-muted-foreground flex w-full justify-between text-sm"></div>
      </div>
    </UiCardContent>
    <UiCardFooter>
      <span>asdasd</span>
    </UiCardFooter>
    <UiBorderBeam :duration="6" :size="400" class="from-transparent via-red-500 to-transparent" />
    <UiBorderBeam
      :size="400"
      :delay="3"
      :duration="6"
      class="from-transparent via-blue-500 to-transparent"
    />
  </UiCard>
</template>
