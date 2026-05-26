<script setup lang="ts">
withDefaults(
  defineProps<{
    icon?: string
    name: string
    tagline?: string
    description: string
    price?: string
    ctaLabel?: string
    ctaTo?: string
    /** raises the card and adds a "queridinho" ribbon */
    featured?: boolean
  }>(),
  {
    icon: '✨',
    ctaLabel: 'Quero esse',
    ctaTo: '/loja',
  },
)
</script>

<template>
  <article
    class="relative flex flex-col rounded-2xl border p-8 transition-shadow"
    :class="featured
      ? 'border-grape bg-white shadow-lg md:-mt-6 md:mb-6'
      : 'border-sand bg-white/70 shadow-sm hover:shadow-md'"
  >
    <span
      v-if="featured"
      class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-grape px-4 py-1 text-[0.7rem] uppercase tracking-wider text-white"
    >
      O nosso queridinho
    </span>

    <span class="text-4xl" aria-hidden="true">{{ icon }}</span>

    <h3 class="mt-4 font-script text-3xl text-grape leading-none">{{ name }}</h3>
    <p v-if="tagline" class="mt-1 text-xs uppercase tracking-wider text-gold-dark">
      {{ tagline }}
    </p>

    <p class="mt-4 flex-1 leading-relaxed text-ink-soft">{{ description }}</p>

    <p class="mt-6 text-2xl text-ink">
      {{ price ?? 'Sob consulta' }}
    </p>

    <NuxtLink
      :to="ctaTo"
      class="mt-6"
      :class="featured ? 'btn-gold' : 'btn-outline'"
    >
      {{ ctaLabel }}
    </NuxtLink>
  </article>
</template>
