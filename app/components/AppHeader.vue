<script setup lang="ts">
// Menu principal. Tarot, astrologia, midia, blog e assinatura seguem fora do ar (nuxt.config).
const base = [
  { label: 'Início', to: '/' },
  { label: 'Consultas', to: '/consultas' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Loja', to: '/loja' },
  { label: 'Meus pedidos', to: '/minha-conta/pedidos' },
]

// Roda Cigana (mapa astral, 00026): a amostra gratis entra no menu quando a loja oferece (Mapa astral > Amostra gratis, no painel).
const sampleOn = ref(false)
onMounted(async () => { sampleOn.value = await useRhBirthCharts().sampleEnabled() })
const links = computed(() => sampleOn.value
  ? [...base.slice(0, 4), { label: 'Roda Cigana grátis', to: '/roda-cigana' }, ...base.slice(4)]
  : base)

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 bg-night text-parchment shadow-[0_1px_0_rgba(180,154,96,.25)]">
    <div class="container-page flex items-center justify-between gap-4 py-3">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="Bruxa do Contra, página inicial">
        <img src="/img/mariposa.jpg" alt="" width="48" height="48" class="h-11 w-11 shrink-0 rounded-full ring-1 ring-gold/60 sm:h-12 sm:w-12">
        <span class="leading-tight">
          <span class="block whitespace-nowrap font-display text-base tracking-[0.06em] text-parchment sm:text-lg">Bruxa do Contra</span>
          <span class="hidden text-[0.7rem] uppercase tracking-[0.22em] text-gold sm:block">Baralho Cigano · Bruxaria Natural</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Principal">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm tracking-wide text-parchment/85 transition-colors hover:text-gold-light"
          :exact-active-class="link.to === '/' ? '!text-gold' : undefined"
          :active-class="link.to === '/' ? undefined : '!text-gold'"
        >
          {{ link.label }}
        </NuxtLink>
        <div class="bdc-header-actions">
          <RhAccountButton />
          <RhCartButton />
        </div>
      </nav>

      <div class="bdc-header-actions bdc-header-actions--mobile">
        <RhCartButton />
        <button
          class="rounded-full p-2 text-parchment hover:bg-night-soft"
          :aria-expanded="open"
          aria-controls="menu-celular"
          :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
          @click="open = !open"
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path v-if="!open" stroke-linecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            <path v-else stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>

    <nav v-if="open" id="menu-celular" class="border-t border-gold/20 lg:hidden" aria-label="Principal">
      <div class="container-page flex flex-col py-3">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="py-3 text-base text-parchment/90 hover:text-gold-light"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/minha-conta" class="py-3 text-base text-parchment/90 hover:text-gold-light">Minha conta</NuxtLink>
        <NuxtLink to="/loja" class="btn-gold my-3">Escolher minha leitura</NuxtLink>
      </div>
    </nav>
  </header>
</template>
