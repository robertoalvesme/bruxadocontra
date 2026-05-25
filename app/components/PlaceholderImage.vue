<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    /** tailwind aspect ratio class, e.g. 'aspect-square' or 'aspect-[4/3]' */
    ratio?: string
    /** background tone */
    tone?: 'sand' | 'gold' | 'grape' | 'ink'
    rounded?: boolean
  }>(),
  {
    label: 'Imagem',
    ratio: 'aspect-[4/3]',
    tone: 'sand',
    rounded: true,
  },
)

const tones: Record<string, string> = {
  sand: 'bg-sand text-ink-soft',
  gold: 'bg-gold text-white',
  grape: 'bg-grape text-white',
  ink: 'bg-ink text-cream',
}
</script>

<template>
  <div
    class="relative flex items-center justify-center overflow-hidden"
    :class="[ratio, tones[tone], rounded ? 'rounded-lg' : '']"
  >
    <!-- subtle diagonal hatch so placeholders read as 'image' -->
    <div
      class="absolute inset-0 opacity-20"
      style="background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 12px);"
    />
    <div class="relative flex flex-col items-center gap-1 text-center">
      <svg class="h-8 w-8 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span class="px-3 text-xs uppercase tracking-wider opacity-80">{{ label }}</span>
    </div>
  </div>
</template>
