<script setup lang="ts">
import { AREAS, FAQ } from '~/data/leituras'

const origin = useRequestURL().origin
usePageSeo({
  title: 'Consultas de Baralho Cigano: tiragens e leituras ao vivo | Bruxa do Contra',
  description:
    'Como funcionam as leituras de Baralho Cigano da Bruxa do Contra: orientações semanais e mensais, tiragens temáticas, Panorama da Vida, leituras livres e consultas ao vivo pelo Google Meet. Entrega em até 48h.',
  image: '/img/cartas-baralho-cigano.jpg',
  jsonLd: [
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
        { '@type': 'ListItem', position: 2, name: 'Consultas', item: `${origin}/consultas` },
      ],
    },
  ],
})

const toc = [
  { id: 'o-que-revela', label: 'O que o Baralho Cigano revela' },
  { id: 'orientacoes-semanais-e-mensais', label: 'Orientações semanais e mensais' },
  { id: 'tiragens-tematicas', label: 'Tiragens temáticas' },
  { id: 'panorama-da-vida', label: 'Panorama da Vida' },
  { id: 'leituras-livres', label: 'Leituras livres' },
  { id: 'como-recebo', label: 'Como você recebe' },
  { id: 'consultas-ao-vivo', label: 'Consultas ao vivo' },
  { id: 'perguntas', label: 'Perguntas frequentes' },
]
</script>

<template>
  <div>
    <!-- CABECALHO -->
    <section class="relative overflow-hidden bg-night text-parchment">
      <BotanicalSprig class="floresta-only pointer-events-none absolute -right-8 -top-10 h-[420px] w-[210px] rotate-[200deg] opacity-70" :bend="60" :seed="1" flower />
      <BotanicalSprig class="floresta-only pointer-events-none absolute bottom-[-60px] right-40 hidden h-[300px] w-[150px] rotate-12 opacity-50 lg:block" :bend="-50" :leaves="7" :seed="3" />
      <div class="container-page py-16 md:py-20">
        <nav aria-label="Você está em" class="text-sm text-parchment/70">
          <NuxtLink to="/" class="hover:text-gold-light">Início</NuxtLink>
          <span class="mx-2 text-gold" aria-hidden="true">/</span>
          <span aria-current="page">Consultas</span>
        </nav>
        <p class="eyebrow eyebrow--light mt-8">Sobre as consultas</p>
        <h1 class="mt-4 max-w-3xl text-5xl text-parchment sm:text-6xl">Consultas e leituras de Baralho Cigano</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/80">
          Tiragens com um tema específico, orientações para um período ou uma conversa ao vivo. Entenda cada
          modalidade e escolha a leitura que faz sentido para este momento.
        </p>
        <NuxtLink to="/loja" class="btn-gold mt-9">Escolher minha leitura</NuxtLink>
      </div>
    </section>

    <div class="container-page grid gap-12 py-16 lg:grid-cols-[240px_1fr] lg:py-20">
      <!-- SUMARIO -->
      <aside class="hidden lg:block">
        <nav aria-label="Nesta página" class="sticky top-28">
          <p class="eyebrow">Nesta página</p>
          <ul class="mt-4 space-y-2 border-l border-gold/40 text-sm">
            <li v-for="t in toc" :key="t.id">
              <a :href="`#${t.id}`" class="-ml-px block border-l border-transparent py-1 pl-4 text-ink-soft hover:border-gold hover:text-ink">{{ t.label }}</a>
            </li>
          </ul>
        </nav>
      </aside>

      <article class="prose-bdc">
        <section id="o-que-revela">
          <h2 class="!mt-0">O que o Baralho Cigano pode revelar?</h2>
          <p>
            O Baralho Cigano é um oráculo que usa imagens e símbolos para transmitir mensagens, aconselhamentos e
            direcionamentos. Pela interpretação das cartas, olhamos para situações da vida, compreendemos melhor
            certos acontecimentos e percebemos tendências, possibilidades e aspectos que talvez estejam passando
            despercebidos.
          </p>
          <p>
            Na minha prática, o oráculo é um instrumento de comunicação e orientação espiritual. Quem lê as cartas
            não sabe tudo nem determina o futuro de ninguém: o meu trabalho é interpretar as mensagens que chegam,
            traduzir os seus significados e compartilhar os conselhos que a espiritualidade apresenta.
          </p>
          <blockquote class="my-8 border-l-2 border-gold pl-6 font-serif text-2xl italic text-ink">
            As coisas podem mudar, nossas escolhas interferem nos acontecimentos e o livre-arbítrio é um direito
            que os deuses nos garantiram.
          </blockquote>
          <p>
            Por isso, uma leitura não é a promessa de que algo vai acontecer. Ela oferece uma visão das tendências
            e dos caminhos possíveis, para você compreender o momento e refletir sobre as suas escolhas.
          </p>
        </section>

        <h2>Escolha a sua leitura</h2>
        <p>
          Existem diferentes maneiras de consultar o Baralho Cigano: uma tiragem com um tema específico,
          orientações para um período ou uma consulta ao vivo, com espaço para conversar e explorar diferentes
          assuntos.
        </p>

        <section id="orientacoes-semanais-e-mensais" class="card mt-10">
          <p class="eyebrow">Por período</p>
          <h3 class="!mt-2">Orientações semanais e mensais</h3>
          <p>Uma forma de acompanhar as tendências e receber aconselhamentos para um período. Você escolhe entre cinco áreas da vida:</p>
          <ul>
            <li v-for="a in AREAS" :key="a.name" class="flex gap-3">
              <span class="text-gold" aria-hidden="true">✦</span>
              <span><strong>{{ a.name }}:</strong> {{ a.text }}</span>
            </li>
          </ul>
          <p class="mt-5">
            Pode ser uma área ou mais, de acordo com o que você deseja observar; a quantidade de áreas define o
            valor da tiragem. As cartas trazem tendências, possíveis acontecimentos, alertas e aconselhamentos
            para o período escolhido.
          </p>
        </section>

        <section id="tiragens-tematicas" class="card mt-6">
          <p class="eyebrow">Um tema a fundo</p>
          <h3 class="!mt-2">Tiragens temáticas</h3>
          <p>
            Para olhar com mais atenção um assunto específico: amor, trabalho ou finanças. São leituras completas,
            que consideram diferentes aspectos do tema. No amor, por exemplo, observamos a situação afetiva atual,
            tendências, possibilidades de relacionamento, desafios e aconselhamentos.
          </p>
          <p>
            Diferente das orientações semanais e mensais, essa tiragem aprofunda questões do passado, traumas,
            angústias, acertos e amadurecimentos. Ela fala sobre o todo, e não sobre uma previsão de curto prazo.
            Oferece uma visão ampla, mas não substitui uma consulta ao vivo quando você precisa conversar, fazer
            perguntas ou aprofundar algum ponto.
          </p>
        </section>

        <section id="panorama-da-vida" class="card mt-6">
          <p class="eyebrow">Visão completa</p>
          <h3 class="!mt-2">Panorama da Vida</h3>
          <p>
            Uma leitura que contempla cinco áreas importantes da sua vida: amor, finanças, saúde, espiritualidade e
            família. É a oportunidade de observar o momento atual de forma ampla, compreender o que merece atenção
            e receber orientações sobre tendências e possibilidades.
          </p>
        </section>

        <section id="leituras-livres" class="card mt-6">
          <p class="eyebrow">Aberta</p>
          <h3 class="!mt-2">Leituras livres</h3>
          <p>
            Para quem deseja uma leitura mais aberta, sem começar com uma pergunta específica. Você pode chegar com
            um tema, uma inquietação ou simplesmente a vontade de compreender melhor alguma situação. A leitura se
            desenvolve naturalmente a partir das mensagens que aparecem.
          </p>
        </section>

        <section id="como-recebo">
          <h2>Como você recebe a sua tiragem?</h2>
          <div class="not-prose my-8 grid gap-4 sm:grid-cols-3">
            <div class="rounded-2xl bg-olive/10 p-5">
              <p class="font-serif text-xl font-semibold text-ink">Fotos e áudios</p>
              <p class="mt-2 text-sm">As cartas fotografadas e a interpretação de cada parte em áudio.</p>
            </div>
            <div class="rounded-2xl bg-olive/10 p-5">
              <p class="font-serif text-xl font-semibold text-ink">Até 48 horas</p>
              <p class="mt-2 text-sm">Depois da confirmação do pagamento.</p>
            </div>
            <div class="rounded-2xl bg-olive/10 p-5">
              <p class="font-serif text-xl font-semibold text-ink">E-mail e site</p>
              <p class="mt-2 text-sm">Você recebe por e-mail e acessa também na sua conta.</p>
            </div>
          </div>
          <p>
            Nessa modalidade, as leituras seguem mapas previamente estruturados: não é preciso agendar horário nem
            estar disponível num momento específico. Se, depois de receber a tiragem, você quiser conversar sobre
            as mensagens ou aprofundar as orientações, pode contratar uma consulta ao vivo separadamente.
          </p>
        </section>

        <section id="consultas-ao-vivo" class="not-prose mt-14 overflow-hidden rounded-2xl bg-forest text-parchment">
          <div class="grid md:grid-cols-[1fr_0.8fr]">
            <div class="p-8 sm:p-10">
              <p class="eyebrow eyebrow--light">30 minutos ou 1 hora</p>
              <h2 class="!mb-0 !mt-3 text-4xl text-parchment">Consultas ao vivo</h2>
              <div class="mt-5 space-y-4 leading-relaxed text-parchment/85">
                <p>
                  Para uma experiência mais próxima e interativa: consultas individuais pelo Google Meet. A leitura
                  acontece em tempo real, e você pode trazer os seus temas, conversar livremente, fazer perguntas e
                  explorar diferentes áreas da vida.
                </p>
                <p>
                  Não é preciso chegar com perguntas prontas. Ao final, você recebe um e-mail personalizado com os
                  conselhos compartilhados, um agradecimento e uma mensagem especialmente direcionada a você.
                </p>
                <p>
                  Para agendar, acesse o produto no site, escolha o dia e o horário disponíveis e faça o pagamento.
                  Com a confirmação, o seu horário está reservado.
                </p>
              </div>
              <p class="mt-6 rounded-xl border border-gold/40 p-4 text-sm text-parchment/85">
                <span class="font-semibold text-gold-light">Um cuidado antes da consulta:</span> procure um ambiente tranquilo,
                sem barulho e com privacidade. Reserve esse momento para você, para a sua escuta e o seu cuidado.
              </p>
              <NuxtLink to="/loja" class="btn-gold mt-8">Agendar consulta ao vivo</NuxtLink>
            </div>
            <img
              src="/img/consulta-baralho-cigano.jpg"
              alt="Mesa de leitura com vela roxa, incenso e as cartas do Baralho Cigano"
              width="1000"
              height="1000"
              loading="lazy"
              class="h-full min-h-[280px] w-full object-cover"
            >
          </div>
        </section>

        <section class="mt-14 rounded-2xl border border-terracotta/40 bg-terracotta/5 p-6">
          <h2 class="!mt-0 !text-2xl">Um cuidado importante</h2>
          <p>
            O oráculo pode trazer orientações para que você observe e cuide melhor de uma questão física ou
            emocional, mas <strong>não realiza diagnósticos</strong>. Nenhuma interpretação substitui uma consulta
            médica ou psicológica, nem a avaliação de um profissional qualificado. A leitura é um espaço de
            aconselhamento espiritual: apresenta possibilidades, mas não determina decisões.
          </p>
        </section>

        <section id="perguntas">
          <h2>Perguntas frequentes</h2>
          <div>
            <FaqItem v-for="f in FAQ" :key="f.q" :question="f.q">{{ f.a }}</FaqItem>
          </div>
        </section>

        <section class="mt-16 text-center">
          <p class="ornament" aria-hidden="true">✦</p>
          <h2 class="!mt-6">Encontre a leitura que faz sentido para este momento</h2>
          <p class="mx-auto">
            Explore as opções, escolha a modalidade que combina com o que você procura e reserve esse momento para si.
          </p>
          <NuxtLink to="/loja" class="btn-night mt-8">Ver as leituras disponíveis</NuxtLink>
        </section>
      </article>
    </div>
  </div>
</template>
