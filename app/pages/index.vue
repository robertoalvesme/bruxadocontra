<script setup lang="ts">
import { FAQ, LEITURAS } from '~/data/leituras'

usePageSeo({
  title: 'Bruxa do Contra — Leituras de Baralho Cigano online',
  description:
    'Leituras de Baralho Cigano com presença, respeito e clareza. Orientações semanais e mensais, tiragens temáticas, Panorama da Vida e consultas ao vivo pelo Google Meet. Entrega em até 48h.',
  jsonLd: {
    '@type': 'ProfessionalService',
    name: 'Bruxa do Contra',
    description: 'Leituras de Baralho Cigano online, conteúdos e produtos de bruxaria natural.',
    image: `${useRequestURL().origin}/img/consulta-baralho-cigano.jpg`,
    url: `${useRequestURL().origin}/`,
    areaServed: 'BR',
    availableLanguage: 'pt-BR',
    sameAs: ['https://www.instagram.com/bruxadocontraveneno/'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leituras de Baralho Cigano',
      itemListElement: LEITURAS.map(l => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: l.title, description: l.summary } })),
    },
  },
})

const steps = [
  { n: '1', title: 'Escolha a leitura', text: 'Uma tiragem enviada, com o tema que você quer olhar, ou uma consulta ao vivo.' },
  { n: '2', title: 'Faça o pagamento', text: 'Na consulta ao vivo, você também escolhe o dia e o horário disponíveis, e o seu horário fica reservado.' },
  { n: '3', title: 'Receba as mensagens', text: 'Fotos das cartas e áudios explicativos em até 48h, por e-mail e na sua conta. Ou a conversa no Google Meet.' },
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden bg-night text-parchment">
      <div class="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border border-gold/15" aria-hidden="true" />
      <div class="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full border border-gold/10" aria-hidden="true" />
      <!-- Tema floresta: ramos nas bordas -->
      <BotanicalSprig class="floresta-only pointer-events-none absolute -bottom-10 -left-10 h-[360px] w-[180px] -rotate-12 opacity-80" :bend="70" :seed="0" flower />
      <BotanicalSprig class="floresta-only pointer-events-none absolute -top-16 left-[42%] h-[240px] w-[120px] rotate-[200deg] opacity-50" :bend="-40" :leaves="7" :seed="2" />
      <div class="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p class="eyebrow eyebrow--light">Baralho Cigano · Bruxaria Natural</p>
          <h1 class="mt-5 text-5xl text-parchment sm:text-6xl lg:text-7xl">
            Leituras de Baralho Cigano com presença, respeito e clareza
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-parchment/80">
            Um espaço para olhar a sua vida por outro ângulo, receber aconselhamento espiritual e
            compreender o seu momento, sem promessas fáceis e sem atalhos.
          </p>
          <div class="mt-9 flex flex-wrap gap-4">
            <NuxtLink to="/loja" class="btn-gold">Escolher minha leitura</NuxtLink>
            <NuxtLink to="/consultas" class="btn-ghost">Como funcionam as consultas</NuxtLink>
          </div>
          <ul class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-parchment/75">
            <li class="flex items-center gap-2"><span class="text-gold" aria-hidden="true">✦</span> Entrega em até 48h</li>
            <li class="flex items-center gap-2"><span class="text-gold" aria-hidden="true">✦</span> Ao vivo pelo Google Meet</li>
            <li class="flex items-center gap-2"><span class="text-gold" aria-hidden="true">✦</span> Não precisa conhecer as cartas</li>
          </ul>
        </div>
        <div class="floresta-only relative mx-auto w-full max-w-lg">
          <img
            src="/img/bruxa-ilustracao.jpg"
            alt="Ilustração da Bruxa do Contra: mulher com uma mariposa sobre os olhos, entre folhas, flores, lua e estrelas"
            width="1000"
            height="1000"
            class="w-full [mask-image:radial-gradient(circle_closest-side_at_50%_50%,#000_72%,transparent_100%)]"
          >
        </div>
        <div class="floresta-hide relative mx-auto w-full max-w-md">
          <div class="arch absolute -inset-3 border border-gold/50" aria-hidden="true" />
          <img
            src="/img/consulta-baralho-cigano.jpg"
            alt="A Bruxa acende uma vela roxa diante da mesa do Baralho Cigano"
            width="1000"
            height="1000"
            fetchpriority="high"
            class="arch relative aspect-[4/5] w-full object-cover object-top"
          >
        </div>
      </div>
    </section>

    <!-- MODALIDADES -->
    <section class="bg-parchment">
      <div class="container-page py-20">
        <div class="mx-auto max-w-2xl text-center">
          <CelestialDivider class="floresta-only mb-6" />
          <p class="eyebrow">Escolha a sua leitura</p>
          <h2 class="section-title mt-3">Cada pessoa chega ao oráculo por um motivo</h2>
          <p class="lead mt-5">
            Às vezes existe uma questão que pede atenção; em outras, a vontade de olhar a vida por outro
            ângulo. Escolha a modalidade que combina com o que você procura.
          </p>
        </div>

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="l in LEITURAS"
            :key="l.id"
            :to="`/consultas#${l.id}`"
            class="card group flex flex-col transition-colors hover:border-gold"
          >
            <span class="self-start rounded-full bg-olive/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-olive">{{ l.tag }}</span>
            <h3 class="mt-5 text-2xl">{{ l.title }}</h3>
            <p class="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{{ l.summary }}</p>
            <span class="link-arrow mt-auto pt-6">Saiba mais <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span></span>
          </NuxtLink>

          <NuxtLink
            to="/consultas#consultas-ao-vivo"
            class="group flex flex-col rounded-2xl bg-forest p-7 text-parchment transition-colors hover:bg-forest-soft sm:col-span-2 lg:col-span-2"
          >
            <span class="self-start rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-light">Ao vivo · 30 min ou 1 hora</span>
            <h3 class="mt-5 text-3xl text-parchment">Consulta ao vivo pelo Google Meet</h3>
            <p class="mt-3 max-w-xl leading-relaxed text-parchment/80">
              A leitura acontece em tempo real: você traz os seus temas, conversa, faz perguntas e explora
              diferentes áreas da vida. Ao final, recebe por e-mail os conselhos da consulta e uma mensagem
              especialmente para você.
            </p>
            <span class="mt-auto pt-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Agendar meu horário <span aria-hidden="true">→</span></span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="border-y border-gold/30 bg-parchment-light">
      <div class="container-page py-20">
        <div class="text-center">
          <CelestialDivider class="floresta-only mb-6" />
          <p class="eyebrow">Simples e no seu tempo</p>
          <h2 class="section-title mt-3">Como funciona</h2>
        </div>
        <ol class="mt-14 grid gap-10 md:grid-cols-3">
          <li v-for="s in steps" :key="s.n" class="text-center">
            <span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold font-display text-xl text-gold-dark">{{ s.n }}</span>
            <h3 class="mt-5 text-2xl">{{ s.title }}</h3>
            <p class="mx-auto mt-3 max-w-xs leading-relaxed text-ink-soft">{{ s.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- PRODUTOS da loja (components/FeaturedProducts.vue) -->
    <FeaturedProducts />

    <!-- SOBRE (resumo) -->
    <section class="bg-parchment">
      <div class="container-page grid items-center gap-12 pb-20 md:grid-cols-2">
        <img
          src="/img/cartas-baralho-cigano.jpg"
          alt="Mãos tatuadas abrindo as cartas do Baralho Cigano sobre a toalha de leitura"
          width="750"
          height="1000"
          loading="lazy"
          class="mx-auto aspect-[4/5] w-full max-w-md rounded-2xl object-cover"
        >
        <div>
          <p class="eyebrow">Quem é a Bruxa</p>
          <h2 class="section-title mt-3">Espiritualidade com os pés na vida real</h2>
          <div class="lead mt-6 space-y-4">
            <p>
              Desde criança, percepções e sonhos me acompanham. Mochilando pela América Latina, conheci um
              cigano que me presenteou com um baralho, como se o próprio caminho já apontasse o oráculo que
              faria parte da minha vida.
            </p>
            <p>
              A Bruxa do Contra nasce desse movimento: ser contra o que adoece, contra o que reprime, contra o
              que afasta a gente da nossa própria verdade.
            </p>
          </div>
          <NuxtLink to="/sobre" class="link-arrow mt-8">Conheça a minha história <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </section>

    <!-- CITACAO -->
    <section class="relative overflow-hidden bg-olive text-parchment">
      <BotanicalSprig class="floresta-only pointer-events-none absolute -left-4 top-1/2 h-[280px] w-[140px] -translate-y-1/2 rotate-[100deg] opacity-40" :bend="40" :leaves="8" :seed="4" />
      <BotanicalSprig class="floresta-only pointer-events-none absolute -right-4 top-1/2 h-[280px] w-[140px] -translate-y-1/2 -rotate-[100deg] opacity-40" :bend="-40" :leaves="8" :seed="2" />
      <div class="container-page flex flex-col items-center py-20 text-center">
        <p class="ornament" aria-hidden="true">✦</p>
        <blockquote class="mt-6 max-w-3xl font-serif text-3xl italic leading-snug sm:text-4xl">
          “A espiritualidade aconselha e direciona; a decisão é sempre sua.”
        </blockquote>
        <p class="mt-6 max-w-xl text-parchment/80">
          Uma leitura mostra tendências, possibilidades e caminhos, não uma sentença sobre o seu destino.
        </p>
      </div>
    </section>

    <!-- PERGUNTAS -->
    <section class="bg-parchment">
      <div class="container-page grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="eyebrow">Dúvidas</p>
          <h2 class="section-title mt-3">Perguntas frequentes</h2>
          <p class="lead mt-5">Não encontrou o que procurava? Veja todas as respostas na página de consultas.</p>
          <NuxtLink to="/consultas#perguntas" class="link-arrow mt-8">Todas as perguntas <span aria-hidden="true">→</span></NuxtLink>
        </div>
        <div>
          <FaqItem v-for="f in FAQ.slice(0, 4)" :key="f.q" :question="f.q">{{ f.a }}</FaqItem>
        </div>
      </div>
    </section>

    <!-- CHAMADA FINAL -->
    <section class="relative overflow-hidden bg-night text-parchment">
      <div class="container-page flex flex-col items-center py-20 text-center">
        <BotanicalSprig class="floresta-only pointer-events-none absolute -left-6 bottom-0 h-[320px] w-[160px] -rotate-6 opacity-75" :bend="55" :seed="1" flower />
        <BotanicalSprig class="floresta-only pointer-events-none absolute -right-6 bottom-0 h-[320px] w-[160px] -scale-x-100 rotate-6 opacity-75" :bend="55" :seed="3" />
        <img src="/img/mariposa.jpg" alt="" width="96" height="96" loading="lazy" class="h-24 w-24 rounded-full ring-1 ring-gold/60">
        <h2 class="mt-8 max-w-2xl text-4xl text-parchment sm:text-5xl">Reserve esse momento para você</h2>
        <p class="mt-5 max-w-xl text-lg text-parchment/80">
          Que as mensagens encontrem espaço para fazer sentido na sua vida e iluminar aquilo que, por
          enquanto, talvez você ainda não consiga enxergar.
        </p>
        <NuxtLink to="/loja" class="btn-gold mt-9">Escolher minha leitura</NuxtLink>
      </div>
    </section>
  </div>
</template>
