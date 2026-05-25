<script setup lang="ts">
const items = Array.from({ length: 6 }, (_, i) => ({ date: '11/01/2021', video: i % 3 === 2 }))
</script>

<template>
  <div>
    <PageHero title="Mídia" image-label="Mídia — imprensa" />

    <section class="bg-cream">
      <div class="container-page py-12">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(item, i) in items"
            :key="i"
            class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div class="relative">
              <PlaceholderImage label="Matéria na mídia" ratio="aspect-[4/3]" tone="sand" :rounded="false" />
              <span
                v-if="item.video"
                class="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gold-dark"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </div>
            <div class="flex flex-1 flex-col p-5">
              <p class="text-xs uppercase tracking-wider text-gold-dark">{{ item.date }}</p>
              <h2 class="mt-2 font-script text-2xl leading-tight text-grape">
                Lua hoje imprevisível e instabilidade, veja todas as datas.
              </h2>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                qui esse pariatur duis deserunt mollit dolore cillum minim tempor.
              </p>
              <div class="mt-4 flex items-center justify-between">
                <NuxtLink to="/midia" class="btn-gold !px-5 !py-2 text-xs">Acessar Matéria</NuxtLink>
                <span class="text-xs text-ink-soft">Divulgação <strong class="text-ink">UOL</strong></span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
