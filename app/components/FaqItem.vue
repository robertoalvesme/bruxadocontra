<script setup lang="ts">
defineProps<{
  question: string
}>()
</script>

<template>
  <details class="group border-b border-gold/30 py-5">
    <summary
      class="flex cursor-pointer items-center justify-between gap-4 text-lg text-ink marker:content-['']"
    >
      <span>{{ question }}</span>
      <span
        class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold text-gold-dark transition-transform group-open:rotate-45"
        aria-hidden="true"
      >
        +
      </span>
    </summary>
    <div class="mt-3 leading-relaxed text-ink-soft">
      <slot />
    </div>
  </details>
</template>
