<script setup lang="ts">
// Ramo botanico em linha dourada (tema "floresta"): caule curvo com folhas
// alternadas, botoes e, opcional, uma flor - no espirito da ilustracao da Bruxa.
const props = withDefaults(defineProps<{
  leaves?: number
  /** Curvatura do caule (negativo curva para a esquerda). */
  bend?: number
  flower?: boolean
  seed?: number
}>(), { leaves: 9, bend: 60, flower: false, seed: 1 })

const FILLS = ['#B49A60', '#4E5E3E', '#33452C', '#7D8862', '#C9B27A', '#3E5234']

function point(t: number) {
  // Bezier quadratica de (100,400) ate (100,10), passando pelo controle (100+bend, 200).
  const x0 = 100, y0 = 400, cx = 100 + props.bend, cy = 210, x1 = 100 - props.bend * 0.15, y1 = 10
  const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t ** 2 * x1
  const y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t ** 2 * y1
  const dx = 2 * (1 - t) * (cx - x0) + 2 * t * (x1 - cx)
  const dy = 2 * (1 - t) * (cy - y0) + 2 * t * (y1 - cy)
  return { x, y, angle: Math.atan2(dy, dx) * 180 / Math.PI }
}

const stem = computed(() => {
  const pts = Array.from({ length: 21 }, (_, i) => point(i / 20))
  return 'M' + pts.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L')
})

const leafs = computed(() => Array.from({ length: props.leaves }, (_, i) => {
  const t = 0.12 + (i / props.leaves) * 0.8
  const p = point(t)
  const side = i % 2 === 0 ? 1 : -1
  const L = 74 - t * 38
  const W = L * 0.32
  return {
    x: p.x, y: p.y, rot: p.angle + side * 52, L, W,
    fill: FILLS[(i + props.seed) % FILLS.length],
  }
}))

const tip = computed(() => point(1))
const buds = computed(() => [0, 1, 2, 3, 4].map(i => ({
  x: tip.value.x + Math.cos(i * 1.3) * (6 + i * 3), y: tip.value.y + 8 + Math.sin(i * 1.7) * 6 + i * 2, r: 3.2 - i * 0.35,
})))
const bloom = computed(() => point(0.5))
</script>

<template>
  <svg viewBox="0 0 200 410" fill="none" aria-hidden="true" class="bdc-sprig">
    <path :d="stem" stroke="#B49A60" stroke-width="1.6" stroke-linecap="round" />
    <g v-for="(l, i) in leafs" :key="i" :transform="`translate(${l.x} ${l.y}) rotate(${l.rot})`">
      <path :d="`M0 0 C ${l.L * 0.25} ${-l.W}, ${l.L * 0.72} ${-l.W}, ${l.L} 0 C ${l.L * 0.72} ${l.W}, ${l.L * 0.25} ${l.W}, 0 0 Z`" :fill="l.fill" fill-opacity="0.92" stroke="#B49A60" stroke-width="0.9" />
      <path :d="`M2 0 L ${l.L * 0.93} 0`" stroke="#D9C79B" stroke-width="0.6" stroke-opacity="0.8" />
      <path v-for="k in 3" :key="k" :d="`M${l.L * (0.2 + k * 0.18)} 0 l ${l.L * 0.1} ${-l.W * 0.55} M${l.L * (0.2 + k * 0.18)} 0 l ${l.L * 0.1} ${l.W * 0.55}`" stroke="#D9C79B" stroke-width="0.4" stroke-opacity="0.55" />
    </g>
    <circle v-for="(b, i) in buds" :key="`b${i}`" :cx="b.x" :cy="b.y" :r="b.r" fill="#C9A866" stroke="#8A7340" stroke-width="0.5" />
    <g v-if="flower" :transform="`translate(${bloom.x + 6} ${bloom.y})`">
      <ellipse v-for="k in 6" :key="`p${k}`" cx="0" cy="-15" rx="8" ry="15" :transform="`rotate(${k * 60})`" fill="#EFE4CC" stroke="#B49A60" stroke-width="0.7" />
      <circle r="7" fill="#C98A3D" stroke="#8A5A26" stroke-width="0.6" />
      <circle v-for="k in 10" :key="`s${k}`" :cx="Math.cos(k * 0.63) * 10" :cy="Math.sin(k * 0.63) * 10" r="1.3" fill="#C0562D" />
    </g>
  </svg>
</template>
