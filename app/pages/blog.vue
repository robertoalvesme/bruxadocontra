<script setup lang="ts">
const posts = [
  { date: '11/01/2021', video: false },
  { date: '11/01/2021', video: true },
  { date: '11/01/2021', video: false },
  { date: '11/01/2021', video: true },
  { date: '11/01/2021', video: false },
]
</script>

<template>
  <div>
    <PageHero title="Blog" image-label="Blog — olhar" />

    <section class="bg-cream">
      <div class="container-page py-12">
        <!-- filter bar -->
        <div class="mb-10 grid gap-4 rounded-lg bg-white p-4 shadow-sm sm:grid-cols-[1fr_auto_auto]">
          <div class="relative">
            <input
              type="search"
              placeholder="Busque por termo"
              class="w-full rounded border border-sand bg-cream px-4 py-2.5 text-sm outline-none focus:border-gold"
            >
            <svg class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" stroke-linecap="round" /></svg>
          </div>
          <select class="rounded border border-sand bg-cream px-4 py-2.5 text-sm text-ink-soft outline-none focus:border-gold">
            <option>Ordenar por categoria</option>
          </select>
          <select class="rounded border border-sand bg-cream px-4 py-2.5 text-sm text-ink-soft outline-none focus:border-gold">
            <option>Outros (20)</option>
          </select>
        </div>

        <!-- post list -->
        <div class="flex flex-col gap-8">
          <article
            v-for="(post, i) in posts"
            :key="i"
            class="grid gap-6 border-b border-sand pb-8 last:border-0 md:grid-cols-[320px_1fr]"
          >
            <div class="relative">
              <PlaceholderImage label="Imagem do post" ratio="aspect-[4/3]" tone="sand" />
              <span
                v-if="post.video"
                class="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gold-dark"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </div>
            <div>
              <p class="text-xs uppercase tracking-wider text-gold-dark">{{ post.date }}</p>
              <h2 class="mt-2 font-script text-3xl leading-tight text-grape">
                Lua hoje imprevisível e instabilidade, veja todas as datas.
              </h2>
              <p class="mt-3 leading-relaxed text-ink-soft">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                qui esse pariatur duis deserunt mollit dolore cillum minim tempor
                enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
                voluptate aute id deserunt nisi.
              </p>
              <NuxtLink to="/blog" class="btn-outline mt-4">Lorem</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
