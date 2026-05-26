<template>
  <div>
    <PageHero title="Astrologia" variant="script" image-label="Astrologia — mapa astral" />

    <!-- quote band with moon-in-hand icon -->
    <section class="relative bg-gold">
      <div class="container-page flex flex-col items-center py-12 text-center">
        <div class="absolute left-6 top-1/2 hidden h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 md:flex">
          <div class="h-14 w-14 rounded-full bg-grape/40" />
        </div>
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
            aute id deserunt nisi.
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

    <!-- benefícios / para quem + planet orbit -->
    <section class="bg-cream">
      <div class="container-page grid items-center gap-10 pb-16 md:grid-cols-[1fr_1fr_240px]">
        <div>
          <h3 class="script-title text-4xl">Benefícios</h3>
          <p class="mt-4 leading-relaxed text-ink-soft">
            Se observação dos astros faz com que possamos entender as melhores
            épocas para tomar determinadas ações, quando aplicamos isso em nossa
            vida pessoal podemos obter o máximo de potencialidade de nossas ações
            e esforços. É um conjunto de ferramentas que falam sobre todas as áreas
            da nossa vida.
          </p>
        </div>
        <div>
          <h3 class="script-title text-4xl">Para quem?</h3>
          <p class="mt-4 leading-relaxed text-ink-soft">
            Eu indico o mapa astral para quem está buscando se conhecer melhor e
            alinhar seus comportamentos com suas características mais essenciais.
            Resolver aqueles conflitos que estão sempre se repetindo em nossos
            comportamentos. É para pessoas que estão buscando se desenvolver melhor.
          </p>
        </div>
        <div class="relative mx-auto h-56 w-56 text-gold">
          <SunBurst class="h-full w-full" :rays="40" />
          <div class="absolute inset-6 rounded-full border border-gold/50" />
          <div class="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-grape/30" />
          <span class="absolute right-4 top-10 h-3 w-3 rounded-full bg-grape" />
        </div>
      </div>
    </section>

    <!-- central quote + framed portrait with swirl -->
    <section class="bg-cream pb-20">
      <div class="container-page">
        <p class="mx-auto max-w-3xl text-center font-script text-3xl leading-tight text-grape sm:text-4xl">
          A astrologia é uma paixão e um encontro consigo mesmo. E isso completa
          a minha missão de vida que é ajudar as pessoas a serem mais felizes
          encontrando seu propósito.
        </p>

        <div class="mt-12 grid items-center gap-8 md:grid-cols-2">
          <div class="flex items-center justify-center text-gold">
            <span class="text-4xl">✕</span>
            <SunBurst class="h-48 w-48 opacity-60" :rays="24" />
          </div>
          <div class="flex justify-center md:justify-start">
            <div class="h-72 w-72 overflow-hidden rounded-full ring-4 ring-gold">
              <PlaceholderImage label="Bruxa do Contra" ratio="aspect-square" tone="ink" :rounded="false" class="!rounded-none h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
