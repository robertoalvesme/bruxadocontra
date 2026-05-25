<script setup lang="ts">
withDefaults(defineProps<{ rays?: number }>(), { rays: 48 })
</script>

<template>
  <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <g stroke="currentColor" stroke-width="0.6">
      <line
        v-for="i in rays"
        :key="i"
        x1="100"
        y1="100"
        :x2="100 + 95 * Math.cos((i / rays) * 2 * Math.PI)"
        :y2="100 + 95 * Math.sin((i / rays) * 2 * Math.PI)"
        :opacity="i % 2 === 0 ? 0.9 : 0.4"
      />
    </g>
    <circle cx="100" cy="100" r="60" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5" />
    <circle cx="100" cy="100" r="46" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7" />
    <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.8" />
  </svg>
</template>
