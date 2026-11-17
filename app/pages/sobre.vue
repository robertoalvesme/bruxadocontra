<script setup lang="ts">
const origin = useRequestURL().origin
usePageSeo({
  title: 'Sobre a Bruxa do Contra — espiritualidade com os pés na vida real',
  description:
    'A história da Bruxa do Contra: o baralho presenteado por um cigano na América Latina, os estudos com ervas, elementos e Umbanda, e o significado da mariposa.',
  image: '/img/consulta-baralho-cigano.jpg',
  jsonLd: [
    {
      '@type': 'AboutPage',
      name: 'Sobre a Bruxa do Contra',
      url: `${origin}/sobre`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
        { '@type': 'ListItem', position: 2, name: 'Sobre', item: `${origin}/sobre` },
      ],
    },
  ],
})

const values = [
  { title: 'Presença', text: 'Cada leitura é um momento de escuta e atenção inteira ao que é seu.' },
  { title: 'Respeito', text: 'Ao tempo e à autonomia de cada pessoa, e também ao meu.' },
  { title: 'Responsabilidade', text: 'Sem promessas fáceis e sem atalhos: o livre-arbítrio é sempre seu.' },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-night text-parchment">
      <BotanicalSprig class="floresta-only pointer-events-none absolute -right-8 -top-10 h-[420px] w-[210px] rotate-[200deg] opacity-70" :bend="60" :seed="1" flower />
      <BotanicalSprig class="floresta-only pointer-events-none absolute bottom-[-60px] right-40 hidden h-[300px] w-[150px] rotate-12 opacity-50 lg:block" :bend="-50" :leaves="7" :seed="3" />
      <div class="container-page grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <nav aria-label="Você está em" class="text-sm text-parchment/70">
            <NuxtLink to="/" class="hover:text-gold-light">Início</NuxtLink>
            <span class="mx-2 text-gold" aria-hidden="true">/</span>
            <span aria-current="page">Sobre</span>
          </nav>
          <p class="eyebrow eyebrow--light mt-8">Sobre mim</p>
          <h1 class="mt-4 text-5xl text-parchment sm:text-6xl">Espiritualidade com os pés na vida real</h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-parchment/80">
            Sou uma mulher que trilha a espiritualidade sem separar o sagrado do cotidiano, nem das pequenas coisas.
          </p>
        </div>
        <div class="relative mx-auto w-full max-w-sm">
          <div class="arch absolute -inset-3 border border-gold/50" aria-hidden="true" />
          <img
            src="/img/consulta-baralho-cigano.jpg"
            alt="Retrato da Bruxa à mesa de leitura, acendendo uma vela"
            width="1000"
            height="1000"
            fetchpriority="high"
            class="arch relative aspect-[4/5] w-full object-cover object-top"
          >
        </div>
      </div>
    </section>

    <section class="bg-parchment">
      <div class="container-page py-20">
        <div class="prose-bdc mx-auto text-lg">
          <h2 class="!mt-0">Um chamado que foi se revelando</h2>
          <p>
            Desde criança, percepções e sonhos vieram me acompanhando, e fui entendendo que isso fazia parte de um
            chamado. Não foi coisa de um dia para o outro: foi se revelando aos poucos, no meio da minha jornada.
          </p>
          <p>
            Esse destino se fortaleceu quando mochilei pela América Latina, acampando e pedindo caronas. Conheci um
            cigano que me presenteou com um baralho, como se o próprio caminho já apontasse o oráculo que viria a
            fazer parte da minha vida.
          </p>
          <p>
            A partir daí, fui aprofundando os estudos com as ervas, com os elementos e com a Umbanda, sempre buscando
            equilíbrio, responsabilidade e respeito ao tempo de cada pessoa, e ao meu também.
          </p>

          <h2>Por que “do Contra”</h2>
          <p>
            A Bruxa do Contra nasce desse movimento de ser <strong>contra o que adoece, contra o que reprime, contra
            o que afasta a gente da nossa própria verdade</strong>. E também tem o outro lado: o meu jeito de caminhar
            na contramão, quando é assim que a vida me pede.
          </p>
        </div>
      </div>
    </section>

    <!-- A MARIPOSA -->
    <section class="bg-night-deep text-parchment">
      <div class="container-page grid items-center gap-12 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <img
          src="/img/mariposa.jpg"
          alt="A identidade da Bruxa do Contra: uma mariposa no lugar dos olhos de uma mulher, entre folhas e uma flor"
          width="480"
          height="480"
          loading="lazy"
          class="mx-auto w-full max-w-xs rounded-full ring-1 ring-gold/60"
        >
        <div>
          <p class="eyebrow eyebrow--light">Nossa identidade</p>
          <h2 class="mt-3 text-4xl text-parchment sm:text-5xl">A mariposa no lugar dos olhos</h2>
          <div class="mt-6 space-y-4 text-lg leading-relaxed text-parchment/80">
            <p>
              A mariposa ocupa o lugar dos olhos de uma mulher e representa um olhar que atravessa o véu entre o
              visível e o invisível: enxergar além dos próprios olhos, perceber o mundo também através da
              espiritualidade, dos espíritos e da ancestralidade que nos acompanha.
            </p>
            <p>
              Um olhar que carrega memórias de quem veio antes e reconhece, nos sinais e nos mistérios da
              existência, formas de comunicação com aquilo que não se revela tão facilmente.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-parchment">
      <div class="container-page py-20">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">O que ofereço</p>
          <h2 class="section-title mt-3">Um espaço de presença, respeito, clareza e cuidado</h2>
          <p class="lead mt-5">
            Consultas com o Baralho Cigano, conteúdos, cursos e produtos feitos com intenção e responsabilidade,
            sempre respeitando o tempo e a autonomia de cada pessoa.
          </p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div v-for="v in values" :key="v.title" class="card text-center">
            <span class="text-2xl text-gold" aria-hidden="true">✦</span>
            <h3 class="mt-3 text-2xl">{{ v.title }}</h3>
            <p class="mt-2 text-ink-soft">{{ v.text }}</p>
          </div>
        </div>

        <figure class="mx-auto mt-20 max-w-3xl text-center">
          <p class="ornament" aria-hidden="true">✦</p>
          <blockquote class="mt-6 font-serif text-3xl italic leading-snug text-ink sm:text-4xl">
            “Que sua leitura, seu estudo ou o seu caminho encontrem um lugar de silêncio dentro de você, reflexão e
            alguma luz de dentro pra fora.”
          </blockquote>
        </figure>

        <div class="mt-14 flex flex-wrap justify-center gap-4">
          <NuxtLink to="/consultas" class="btn-night">Conhecer as consultas</NuxtLink>
          <NuxtLink to="/loja" class="btn-outline">Ir para a loja</NuxtLink>
        </div>
        <p class="mx-auto mt-10 max-w-xl text-center text-ink-soft">
          Seja muito bem-vinda à Bruxa do Contra. Que este espaço desperte a sua curiosidade e que, entre saberes,
          experiências e mistérios, você encontre algo que faça sentido para a sua própria história.
        </p>
      </div>
    </section>
  </div>
</template>
