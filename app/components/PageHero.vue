<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    imageLabel?: string
    variant?: 'display' | 'script'
  }>(),
  { variant: 'display' },
)
</script>

<template>
  <section class="relative overflow-hidden">
    <PlaceholderImage
      :label="imageLabel ?? title"
      ratio="aspect-[1440/420]"
      tone="ink"
      :rounded="false"
      class="!rounded-none"
    />
    <!-- darkening + content overlay -->
    <div class="absolute inset-0 bg-ink/40" />
    <span class="absolute right-24 top-16 text-2xl text-gold/70">✦</span>
    <span class="absolute right-40 top-32 text-base text-gold/50">✦</span>
    <span class="absolute left-1/3 top-10 text-sm text-gold/40">✦</span>
    <div class="container-page absolute inset-0 flex items-center">
      <h1
        class="text-white"
        :class="variant === 'script'
          ? 'font-script text-6xl sm:text-7xl'
          : 'display-title text-4xl sm:text-6xl'"
      >
        {{ title }}
      </h1>
    </div>
  </section>
</template>
