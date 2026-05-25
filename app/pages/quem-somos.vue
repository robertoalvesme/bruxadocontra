<template>
  <div>
    <PageHero title="Quem Somos" image-label="Quem Somos — Bruxa do Contra" />

    <!-- bio + eye-sun -->
    <section class="bg-cream">
      <div class="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center">
        <div class="rounded-lg bg-gold p-8 text-white md:p-10">
          <h2 class="font-script text-4xl">Bruxa do Contra</h2>
          <p class="mt-4 leading-relaxed text-white/90">
            Julia é a bruxa
          </p>
        </div>

        <div class="flex justify-center text-gold">
          <div class="relative h-64 w-64">
            <SunBurst class="h-full w-full" :rays="48" />
            <div class="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream">
              <!-- eye -->
              <svg class="h-10 w-10 text-grape-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- missão / visão / valores -->
    <section class="bg-cream pb-16">
      <div class="container-page grid gap-6 md:grid-cols-3">
        <div class="rounded-lg bg-grape p-8 text-white">
          <h3 class="font-script text-3xl">Missão</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/90">
            Guiar pessoas no caminho do autoconhecimento e da prosperidade,
            oferecendo clareza para decisões importantes em todas as áreas da vida.
          </p>
        </div>
        <div class="rounded-lg bg-sand p-8 text-ink">
          <h3 class="font-script text-3xl text-grape-dark">Visão</h3>
          <p class="mt-3 text-sm leading-relaxed text-ink-soft">
            Ser referência em Astrologia e Tarot, unindo tradição e ciência para
            transformar a relação das pessoas consigo mesmas.
          </p>
        </div>
        <div class="rounded-lg bg-grape-dark p-8 text-white">
          <h3 class="font-script text-3xl">Valores</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/90">
            Ética, empatia, acolhimento e verdade. Acreditamos no respeito a cada
            jornada e na busca constante por evolução pessoal.
          </p>
        </div>
      </div>
    </section>

    <!-- closing mandala -->
    <section class="bg-cream pb-20">
      <div class="container-page flex justify-center text-gold">
        <div class="relative h-72 w-72">
          <SunBurst class="h-full w-full" :rays="60" />
          <div class="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60" />
        </div>
      </div>
    </section>
  </div>
</template>
