<script setup lang="ts">
// Aviso curto no canto da tela (ver plugins/cart.client.ts).
const toast = useState<string | null>('site:toast', () => null)
</script>

<template>
  <Transition name="site-toast">
    <div v-if="toast" class="site-toast" role="status">{{ toast }}</div>
  </Transition>
</template>
