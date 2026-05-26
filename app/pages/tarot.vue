<script setup lang="ts">
// What changes after a reading — the benefits
const beneficios = [
  {
    icon: '💞',
    title: 'Caminhos abertos no bolso e no amor',
    text:
      'O arquétipo cigano movimenta o que está travado. Identificamos as travas financeiras (a energia dos Peixes é pura abundância!) e suavizamos as relações afetivas conflituosas.',
  },
  {
    icon: '🕊️',
    title: 'Alívio emocional imediato',
    text:
      'As consulentes relatam que a leitura reduz o estresse, a ansiedade e a insônia, trazendo uma sensação indescritível de paz, leveza interior e relaxamento profundo.',
  },
  {
    icon: '🎯',
    title: 'Fim da indecisão',
    text:
      'Mais clareza mental e foco para você lidar com as mudanças, fazer escolhas assertivas e parar de perder noites de sono.',
  },
]

// The 36-card symbols, shown as a decorative strip in the "como funciona" section
const cartas = ['🏠 Casa', '🌷 Lírios', '🐟 Peixes', '⚓ Âncora', '🌟 Estrela', '🔑 Chave']
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden bg-ink text-cream">
      <SunBurst class="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 text-gold/30" />
      <span class="absolute right-16 top-24 text-2xl text-gold/60">✦</span>
      <span class="absolute bottom-28 left-20 text-xl text-gold/40">✦</span>
      <span class="absolute left-1/3 top-16 text-sm text-gold/40">✦</span>

      <div class="container-page relative z-10 flex min-h-[600px] flex-col items-center justify-center py-20 text-center">
        <p class="text-xs uppercase tracking-[0.4em] text-gold-light">
          Baralho Cigano
        </p>
        <h1 class="mt-6 max-w-4xl font-script text-5xl leading-tight text-white sm:text-6xl">
          As cartas ciganas têm a resposta que você precisa (e a chave para abrir seus caminhos!) 🔮
        </h1>
        <p class="mt-6 max-w-2xl leading-relaxed text-cream/80">
          Chega de confusão mental e ansiedade. O Baralho Cigano é direto, reto e
          cheio de axé. Vem ler a sua energia, destravar o que está parado no amor
          e no bolso, e trazer de volta a clareza que o seu coração tá pedindo!
        </p>
        <NuxtLink to="#tiragens" class="btn-gold mt-10">
          Quero agendar minha tiragem e destravar minha vida ✨
        </NuxtLink>
      </div>
    </section>

    <!-- EMPATIA / O PROBLEMA -->
    <section class="bg-cream">
      <div class="container-page grid items-center gap-12 py-20 md:grid-cols-[1fr_1.1fr]">
        <div class="flex justify-center md:justify-start">
          <div class="relative">
            <PlaceholderImage label="Leitura do Baralho Cigano" ratio="aspect-[3/4]" tone="sand" class="max-w-sm" />
            <SunBurst class="absolute -bottom-8 -right-8 h-28 w-28 text-gold/70" :rays="24" />
          </div>
        </div>
        <div>
          <h2 class="script-title text-4xl sm:text-5xl">
            Senta aqui, meu amor. O que tá pesando nesse coração? ❤️‍🩹
          </h2>
          <p class="mt-6 leading-relaxed text-ink-soft">
            Você já se sentiu andando no escuro? Aquela dúvida cruel se deve ou não
            investir em um relacionamento, o dinheiro que parece que foge da sua
            mão, ou aquela sensação de que seus caminhos estão amarrados? A
            ansiedade bate forte quando a gente não sabe qual decisão tomar.
          </p>
          <p class="mt-4 leading-relaxed text-ink-soft">
            O problema é que, muitas vezes, as energias ocultas ao nosso redor
            bloqueiam a nossa visão e atrapalham nossas escolhas. Mas
            <strong class="text-ink">não precisa se desesperar</strong>: a
            sabedoria das estradas tem o direcionamento exato para te tirar dessa
            agonia e te devolver o controle do seu destino.
          </p>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="relative overflow-hidden bg-sand">
      <div class="container-page py-20">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="script-title text-4xl sm:text-5xl">
            A espiritualidade cigana não faz rodeios: mostra a verdade e traz a cura 🗝️
          </h2>
          <p class="mt-6 leading-relaxed text-ink-soft">
            Diferente do Tarot tradicional — que tem 78 cartas e é super denso — o
            Baralho Cigano possui 36 cartas ilustradas com símbolos do nosso dia a
            dia. Por isso ele é um oráculo incrivelmente objetivo, direto e sem
            enrolação: as cartas falam o que você precisa ouvir para mudar a sua
            realidade agora.
          </p>
        </div>

        <!-- símbolos do baralho -->
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <span
            v-for="c in cartas"
            :key="c"
            class="rounded-full bg-cream px-4 py-2 text-sm text-ink-soft shadow-sm"
          >
            {{ c }}
          </span>
        </div>

        <p class="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-ink-soft">
          Na consulta, a taróloga não faz adivinhação barata: ela interpreta os
          símbolos com a ajuda da intuição e da forte espiritualidade cigana,
          lendo o seu campo energético. É um trabalho profundo que funciona como um
          verdadeiro espelho da sua alma, revelando obstáculos ocultos e apontando
          imediatamente os melhores caminhos de cura e ação.
        </p>
      </div>
    </section>

    <!-- BENEFÍCIOS -->
    <section class="bg-cream">
      <div class="container-page py-20">
        <h2 class="script-title text-center text-4xl sm:text-5xl">
          O que muda na sua vida depois de uma consulta com a gente? 🌟
        </h2>
        <p class="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-ink-soft">
          A energia da egrégora cigana é sinônimo absoluto de transformação,
          movimento constante, prosperidade e fartura. Ao abrir as cartas, você
          recebe um banho de autoconhecimento e empoderamento. Olha só o que você
          ganha:
        </p>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <div
            v-for="b in beneficios"
            :key="b.title"
            class="flex flex-col items-center text-center"
          >
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-grape/15 text-3xl">
              <span aria-hidden="true">{{ b.icon }}</span>
            </div>
            <h3 class="mt-5 font-script text-2xl text-grape">{{ b.title }}</h3>
            <p class="mt-3 leading-relaxed text-ink-soft">{{ b.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- QUOTE BAND -->
    <section class="relative overflow-hidden bg-gold">
      <SunBurst class="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 text-white/20" :rays="36" />
      <div class="container-page flex flex-col items-center py-16 text-center">
        <p class="max-w-3xl font-script text-3xl leading-tight text-white sm:text-4xl">
          As cartas falam o que o seu coração já sabe — e mostram o caminho prático
          para você tomar as rédeas do seu destino agora.
        </p>
      </div>
    </section>

    <!-- TIRAGENS / PLANOS -->
    <section id="tiragens" class="scroll-mt-24 bg-cream">
      <div class="container-page py-20">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="script-title text-4xl sm:text-5xl">
            Escolha como a magia vai entrar na sua vida hoje 🌙
          </h2>
        </div>

        <div class="mt-14 grid items-start gap-6 md:grid-cols-3">
          <PricingCard
            icon="🎯"
            name="Direto ao Ponto"
            tagline="Tiragem objetiva"
            description="Sabe aquelas dúvidas pontuais que não te deixam em paz? ('Ele vai voltar?', 'Devo aceitar esse emprego?'). A gente faz uma tiragem focada nas suas perguntas para te dar conselhos práticos, claros e rápidos. Você envia perguntas simples e ganha respostas certeiras!"
            cta-label="Quero a Tiragem Objetiva"
          />
          <PricingCard
            icon="🃏"
            name="A Mesa Real"
            tagline="O raio-x completo"
            featured
            description="A leitura mais completa e poderosa do Baralho Cigano! Abrimos as 36 cartas de uma só vez na mesa. Você tem um panorama absoluto do seu passado, presente e futuro, entendendo todas as influências no amor, saúde, trabalho e espiritualidade. Ideal pra quem quer ver a vida inteira."
            cta-label="Quero a Mesa Real"
          />
          <PricingCard
            icon="🌿"
            name="Baralho Cigano Terapêutico"
            tagline="O destrave total"
            description="Aqui a gente vai além das previsões. Unimos a leitura completa da Mesa Real com práticas energéticas sutis! Identificamos traumas antigos, curamos padrões repetitivos de sofrimento e ajudamos a liberar votos limitantes e crenças que bloqueiam sua alegria. Pra sair renovada e cheia de luz."
            cta-label="Quero o Terapêutico"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-sand">
      <div class="container-page py-20">
        <h2 class="script-title text-center text-4xl sm:text-5xl">
          Ficou com alguma dúvida, meu bem? A Bruxa do Contra te explica 💭
        </h2>

        <div class="mx-auto mt-10 max-w-3xl">
          <FaqItem question="Atendimento online funciona de verdade?">
            Funciona perfeitamente e é poderoso! A energia espiritual não tem
            barreiras físicas e o trabalho acontece direto no seu campo quântico. No
            formato online, a cartomante embaralha as cartas e se conecta à sua
            vibração, garantindo leituras com a mesma precisão, seriedade e
            acolhimento do atendimento presencial.
          </FaqItem>
          <FaqItem question="As cartas trazem energias ruins ou dão respostas assustadoras?">
            Jamais! O Baralho Cigano não tem cartas invertidas e é um oráculo focado
            no conselho prático do dia a dia. Ele atua como um amigo que te diz a
            verdade para o seu próprio bem, sempre apontando a cura e o crescimento,
            de forma ética e com muita proteção energética. Não existe espaço para
            terrorismo espiritual aqui!
          </FaqItem>
          <FaqItem question="Como devo formular minhas perguntas?">
            Para receber respostas claras, faça perguntas claras e simples! Mas não
            se preocupe: no momento da sua sessão a nossa taróloga pega na sua mão e
            te ajuda a estruturar tudo para que você saia sem nenhuma ponta solta.
          </FaqItem>
        </div>

        <div class="mt-12 text-center">
          <NuxtLink to="#tiragens" class="btn-ink">
            Quero agendar minha tiragem ✨
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
