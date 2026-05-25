<script setup lang="ts">
const links = [
  { label: 'Tarot', to: '/tarot' },
  { label: 'Astrologia', to: '/astrologia' },
  { label: 'Mídia', to: '/midia' },
  { label: 'Blog', to: '/blog' },
  { label: 'Quem Somos', to: '/quem-somos' },
  { label: 'Loja', to: '/loja' },
  { label: 'Assinatura', to: '/assinatura' },
]

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-cream/95 backdrop-blur">
    <div class="container-page flex items-center justify-between gap-4 py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="font-logo text-3xl leading-none text-ink">
        Bruxa do Contra
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-6 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm tracking-wide text-ink-soft transition-colors hover:text-gold-dark"
          active-class="text-gold-dark"
        >
          {{ link.label }}
        </NuxtLink>

        <NuxtLink to="/area-exclusiva" class="btn-ink !px-5 !py-2">
          Área Exclusiva
        </NuxtLink>

        <!-- Cart -->
        <NuxtLink to="/carrinho" class="relative text-ink hover:text-gold-dark">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.07-.49M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span class="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-grape-dark text-[10px] text-white">0</span>
        </NuxtLink>
      </nav>

      <!-- Mobile toggle -->
      <button class="lg:hidden text-ink" aria-label="Menu" @click="open = !open">
        <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav v-if="open" class="border-t border-sand lg:hidden">
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
        <NuxtLink to="/area-exclusiva" class="btn-ink mt-2 !py-2" @click="open = false">
          Área Exclusiva
        </NuxtLink>
      </div>
    </nav>

    <div class="gold-rule" />
  </header>
</template>
