<script setup lang="ts">
defineProps<{ question: string }>()
</script>

<template>
  <details class="group border-b border-gold/40 py-5">
    <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-semibold text-ink [&::-webkit-details-marker]:hidden">
      <span>{{ question }}</span>
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold text-gold-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
    </summary>
    <div class="mt-3 max-w-prose leading-relaxed text-ink-soft">
      <slot />
    </div>
  </details>
</template>
