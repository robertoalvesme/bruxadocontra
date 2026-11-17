<script setup lang="ts">
// Tema escolhido: "floresta" (verde texturizado com ramos e flores). As variaveis de
// marrom e verde liso continuam no main.css, mas o site publica so a floresta.
useHead({
  htmlAttrs: { 'data-tema': 'floresta' },
  meta: [{ name: 'theme-color', content: '#1E3124' }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <SiteToast />
</template>
