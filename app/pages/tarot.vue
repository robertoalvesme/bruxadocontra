<template>
  <div>
    <PageHero title="Tarot" image-label="Tarot — cartas e mãos" />

    <!-- quote band under hero -->
    <section class="bg-gold">
      <div class="container-page flex flex-col items-center py-12 text-center">
        <p class="max-w-3xl text-2xl leading-relaxed text-white sm:text-3xl">
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </p>
        <NuxtLink to="/loja" class="mt-6 inline-flex items-center justify-center rounded border border-white/80 px-7 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-gold-dark">
          Lorem Ipsum
        </NuxtLink>
      </div>
    </section>

    <!-- intro -->
    <section class="bg-cream">
      <div class="container-page py-16">
        <h2 class="script-title text-5xl">Lorem ipsum dolor sit amet.</h2>
        <div class="mt-6 grid gap-10 md:grid-cols-2">
          <p class="leading-relaxed text-ink-soft">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
            esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
            aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis.
          </p>
          <p class="leading-relaxed text-ink-soft">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
            esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
            aute id deserunt nisi.
          </p>
        </div>
      </div>
    </section>

    <!-- benefícios / para quem + moon -->
    <section class="bg-cream">
      <div class="container-page grid items-center gap-10 pb-16 md:grid-cols-[1fr_1fr_240px]">
        <div>
          <h3 class="script-title text-4xl">Benefícios</h3>
          <p class="mt-4 leading-relaxed text-ink-soft">
            O fato de entender o seu momento atual faz com que a sua mente interior
            possa comunicar-se com seu consciente, e tornando consciência o que
            conseguimos ser mais assertivos. É o local onde reage com clareza, que
            podemos aplicar em todas as áreas de nossas vidas.
          </p>
        </div>
        <div>
          <h3 class="script-title text-4xl">Para quem?</h3>
          <p class="mt-4 leading-relaxed text-ink-soft">
            Eu indico uma consulta de tarot para pessoas que estão buscando
            compreender melhor seu momento atual, e tomarem decisões importantes
            em relação a trabalho, dinheiro, relacionamento e muitas vezes até
            saúde.
          </p>
        </div>
        <div class="relative mx-auto h-56 w-56 text-gold">
          <SunBurst class="h-full w-full" :rays="44" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="h-24 w-24 rounded-full bg-grape/30 shadow-inner" />
          </div>
        </div>
      </div>
    </section>

    <!-- central quote + framed portrait -->
    <section class="bg-cream pb-20">
      <div class="container-page flex flex-col items-center text-center">
        <p class="max-w-2xl font-script text-3xl leading-tight text-gold-dark sm:text-4xl">
          É uma experiência de um encontro profundo e esclarecedor. Disponível
          para qualquer pessoa que necessite.
        </p>

        <div class="relative mt-12 h-80 w-80">
          <!-- moon-phase dotted ring -->
          <div class="absolute inset-0 rounded-full border border-dashed border-gold/50" />
          <span
            v-for="i in 12"
            :key="i"
            class="absolute h-2 w-2 rounded-full bg-gold"
            :style="{
              left: `calc(50% + ${145 * Math.cos((i / 12) * 2 * Math.PI)}px - 4px)`,
              top: `calc(50% + ${145 * Math.sin((i / 12) * 2 * Math.PI)}px - 4px)`,
            }"
          />
          <div class="absolute inset-8 overflow-hidden rounded-full ring-2 ring-grape/40">
            <PlaceholderImage label="Bruxa do Contra" ratio="aspect-square" tone="ink" :rounded="false" class="!rounded-none h-full" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
