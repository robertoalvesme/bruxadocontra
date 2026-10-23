<script setup lang="ts">
// Sem conteudo ainda: so a loja, a conta e os pedidos (as paginas ocultas voltam para a home, nuxt.config).
const base = [
  { label: 'Início', to: '/' },
  // { label: 'Tarot', to: '/tarot' },
  // { label: 'Astrologia', to: '/astrologia' },
  // { label: 'Mídia', to: '/midia' },
  // { label: 'Blog', to: '/blog' },
  // { label: 'Quem Somos', to: '/quem-somos' },
  { label: 'Loja', to: '/loja' },
  { label: 'Pedidos', to: '/minha-conta/pedidos' },
  // { label: 'Assinatura', to: '/assinatura' },
]

// Mapa astral (00026): a amostra gratis entra no menu quando a loja oferece (Mapa astral > Amostra gratis, no painel).
const sampleOn = ref(false)
onMounted(async () => { sampleOn.value = await useRhBirthCharts().sampleEnabled() })
const links = computed(() => sampleOn.value
  ? [...base.slice(0, 2), { label: 'Mapa astral grátis', to: '/mapa-astral' }, ...base.slice(2)]
  : base)

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-cream/95 backdrop-blur">
    <div class="container-page flex items-center justify-between gap-4 py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="leading-none text-ink">
        <img src="/bruxa-do-contra-logo.svg" alt="Bruxa do Contra" class="h-12 w-auto" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-6 font-menu lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm tracking-wide text-ink-soft transition-colors hover:text-gold-dark"
          :exact-active-class="link.to === '/' ? 'text-gold-dark' : undefined"
          :active-class="link.to === '/' ? undefined : 'text-gold-dark'"
        >
          {{ link.label }}
        </NuxtLink>

        <!-- <NuxtLink to="/area-exclusiva" class="btn-ink !px-5 !py-2">
          Área Exclusiva
        </NuxtLink> -->

        <!-- Conta e sacola (rhfactor-kit): entrar/minha conta e quantos itens ha no carrinho. -->
        <div class="bdc-header-actions">
          <RhAccountButton />
          <RhCartButton />
        </div>
      </nav>

      <!-- Mobile: sacola sempre a mao, e o menu -->
      <div class="bdc-header-actions bdc-header-actions--mobile">
        <RhCartButton />
        <button class="text-ink" aria-label="Menu" @click="open = !open">
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <nav v-if="open" class="border-t border-sand font-menu lg:hidden">
      <div class="container-page flex flex-col gap-1 py-3">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="py-2 text-sm text-ink-soft hover:text-gold-dark"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/minha-conta" class="py-2 text-sm text-ink-soft hover:text-gold-dark" @click="open = false">Minha conta</NuxtLink>
        <!-- <NuxtLink to="/area-exclusiva" class="btn-ink mt-2 !py-2" @click="open = false">
          Área Exclusiva
        </NuxtLink> -->
      </div>
    </nav>

    <div class="gold-rule" />
  </header>
</template>
