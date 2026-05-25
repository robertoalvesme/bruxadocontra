<script setup lang="ts">
const products = [
  { name: 'Vela Aromática Canela', price: 'R$ 100,00', tone: 'sand' as const },
  { name: 'Home Spray Bamboo 250ml', price: 'R$ 15,25', tone: 'sand' as const, featured: true },
  { name: 'Vela Aromática Lavanda', price: 'R$ 100,00', tone: 'sand' as const },
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden bg-cream">
      <div class="container-page relative flex min-h-[560px] items-center justify-center py-16">
        <!-- mandala -->
        <SunBurst class="absolute h-[440px] w-[440px] text-gold/70" />
        <div class="absolute h-[440px] w-[440px] rounded-full border border-dashed border-gold/40" />
        <!-- sparkles -->
        <span class="absolute right-16 top-24 text-2xl text-gold/60">✦</span>
        <span class="absolute bottom-24 left-24 text-xl text-gold/40">✦</span>

        <!-- title band -->
        <div class="relative z-10 text-center">
          <h1 class="display-title inline-block bg-gold/90 px-10 py-4 text-3xl text-white sm:text-5xl">
            Tarot e Astrologia
          </h1>
          <p class="mt-5 text-sm uppercase tracking-[0.4em] text-gold-dark">
            Ciência e Prosperidade
          </p>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="bg-white">
      <div class="container-page grid items-center gap-10 py-16 md:grid-cols-2">
        <PlaceholderImage label="Bruxa do Contra" ratio="aspect-[3/4]" tone="sand" class="max-w-sm" />
        <div>
          <h2 class="script-title text-5xl">Lorem ipsum dolor sit amet.</h2>
          <p class="mt-6 leading-relaxed text-ink-soft">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
            esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </p>
        </div>
      </div>
    </section>

    <!-- QUOTE BAND -->
    <section class="relative overflow-hidden bg-sand">
      <SunBurst class="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 text-ink/20" :rays="36" />
      <div class="container-page flex flex-col items-center py-16 text-center">
        <!-- round arrow divider -->
        <div class="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-grape text-white">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m0 0 6-6m-6 6-6-6" />
          </svg>
        </div>
        <p class="max-w-3xl font-script text-4xl leading-tight text-ink sm:text-5xl">
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </p>
        <NuxtLink to="/loja" class="btn-gold mt-8">Lorem Ipsum</NuxtLink>
      </div>
    </section>

    <!-- PRODUCTS -->
    <section class="bg-cream">
      <div class="container-page py-16">
        <div class="mb-10 flex justify-center">
          <span class="display-title rounded bg-sand px-8 py-2 text-sm text-ink-soft">Lorem Ipsum</span>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="p in products"
            :key="p.name"
            class="group relative rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            :class="{ 'md:-mt-6 md:mb-6 ring-1 ring-sand': p.featured }"
          >
            <PlaceholderImage :label="p.name" ratio="aspect-square" tone="sand" />
            <div class="mt-4">
              <h3 class="text-sm uppercase tracking-wide text-gold-dark">{{ p.name }}</h3>
              <p class="mt-1 text-sm text-ink-soft">{{ p.price }}</p>
            </div>
            <button class="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-gold-dark opacity-0 transition-opacity group-hover:opacity-100" aria-label="Ver produto">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" stroke-linecap="round" /></svg>
            </button>
          </article>
        </div>
      </div>
    </section>

    <!-- FEATURE -->
    <section class="bg-cream pb-16">
      <div class="container-page grid items-stretch gap-0 md:grid-cols-2">
        <div class="flex flex-col justify-center bg-sand p-10 md:p-14">
          <p class="font-script text-4xl leading-tight text-ink-soft sm:text-5xl">
            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
            aute id deserunt nisi.
          </p>
          <NuxtLink to="/quem-somos" class="btn-gold mt-8 self-start">Lorem Ipsum</NuxtLink>
        </div>
        <PlaceholderImage label="Bruxa do Contra — leitura de Tarot" ratio="aspect-[4/3]" tone="ink" :rounded="false" class="h-full" />
      </div>
    </section>
  </div>
</template>
