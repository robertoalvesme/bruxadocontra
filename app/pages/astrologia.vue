<script setup lang="ts">
// What the consultation unites — the "como funciona" pillars
const pilares = [
  {
    icon: '🪐',
    title: 'Seu DNA Cósmico',
    text:
      'A gente levanta o seu céu inteiro: Signo, Ascendente, Lua e todos os trânsitos de Mercúrio a Plutão — sem esquecer dos seus desafios.',
  },
  {
    icon: '🗡️',
    title: 'Seu Signo Cigano',
    text:
      'Vamos descobrir a sua essência na roda ancestral. Você é da força guerreira do Punhal? Da fluidez da Taça? Da justiça da Moeda?',
  },
  {
    icon: '🌟',
    title: 'Seu Clã e Mestre Protetor',
    text:
      'Identificamos qual dos grandes Mestres Ciganos de Luz — como a poderosa Sulamita, a doce Carmencita ou o transformador Ramiro — guia os seus passos e segura a sua mão na Terra.',
  },
  {
    icon: '🃏',
    title: 'A Mesa Real do Baralho',
    text:
      'A astrologia dá o diagnóstico de onde dói, mas as lâminas do Baralho Lenormand dão o remédio. Cruzamos o seu mapa com as cartas ciganas para um direcionamento mágico e prático.',
  },
]

// Life-changing benefits
const beneficios = [
  {
    icon: '♾️',
    title: 'Autoconhecimento pra vida toda',
    text:
      'Um mapa não tem data de validade — ele é o seu manual de instruções eterno, pra consultar sempre que precisar.',
  },
  {
    icon: '🛡️',
    title: 'Fim da autossabotagem',
    text:
      'Você vai olhar de frente para as suas sombras e entender como domar seus medos antes que eles te paralisem.',
  },
  {
    icon: '🌸',
    title: 'Magia prática e real',
    text:
      'Você sai sabendo a cor do seu clã, a sua flor, a sua pedra de poder, o perfume e os ritos ciganos para atrair prosperidade e amor.',
  },
]
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
          Mapa Astral Integrado
        </p>
        <h1 class="mt-6 max-w-4xl font-script text-5xl leading-tight text-white sm:text-6xl">
          Descubra o seu destino nas estrelas e destrave sua vida com a magia cigana ✨
        </h1>
        <p class="mt-6 max-w-2xl leading-relaxed text-cream/80">
          Chega de andar em círculos, meu amor. O primeiro Mapa Astral Integrado
          do Brasil une a precisão cirúrgica da astrologia com o axé, a firmeza e a
          sabedoria de cura do Baralho Cigano. Vem descobrir quem você é de verdade
          e abrir os caminhos que estão travados!
        </p>
        <NuxtLink to="#planos" class="btn-gold mt-10">
          Quero ler meu destino e abrir meus caminhos 🔮
        </NuxtLink>
      </div>
    </section>

    <!-- EMPATIA / O PROBLEMA -->
    <section class="bg-cream">
      <div class="container-page grid items-center gap-12 py-20 md:grid-cols-[1fr_1.1fr]">
        <div class="flex justify-center md:justify-start">
          <div class="relative">
            <PlaceholderImage label="Bruxa do Contra" ratio="aspect-[3/4]" tone="sand" class="max-w-sm" />
            <SunBurst class="absolute -bottom-8 -right-8 h-28 w-28 text-gold/70" :rays="24" />
          </div>
        </div>
        <div>
          <h2 class="script-title text-4xl sm:text-5xl">
            Senta aqui, vamos conversar sério (mas com muito amor) 💖
          </h2>
          <p class="mt-6 leading-relaxed text-ink-soft">
            Sabe quando você sente que está sempre batendo na mesma tecla? Aquele
            "dedo podre" para relacionamentos que não sara nunca, o dinheiro que
            some da conta, as dúvidas cruéis na carreira ou aquele sentimento de
            nunca ser valorizada no próprio corre?
          </p>
          <p class="mt-4 leading-relaxed text-ink-soft">
            Presta atenção: isso não é falta de sorte, muito menos castigo.
            <strong class="text-ink">A culpa não é sua!</strong> Muitas vezes,
            estamos carregando bloqueios astrais, karmas não curados e energias
            totalmente desalinhadas com a nossa verdadeira essência.
          </p>
          <p class="mt-4 leading-relaxed text-ink-soft">
            O universo tem um mapa perfeito de quem você é, mas se você não souber
            ler as coordenadas desse GPS, vai continuar girando em falso.
          </p>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="relative overflow-hidden bg-sand">
      <div class="container-page py-20">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="script-title text-4xl sm:text-5xl">
            Mas calma: pra toda porta trancada, a espiritualidade tem uma chave 🗝️
          </h2>
          <p class="mt-6 leading-relaxed text-ink-soft">
            Diferente daqueles mapas automáticos, frios e cheios de texto copiado
            de computador, aqui o papo é profundo, super humano e terapêutico.
            Nossa consulta une dois mundos incríveis:
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <div
            v-for="p in pilares"
            :key="p.title"
            class="flex gap-5 rounded-2xl bg-cream p-7 shadow-sm"
          >
            <span class="text-3xl" aria-hidden="true">{{ p.icon }}</span>
            <div>
              <h3 class="text-lg uppercase tracking-wide text-gold-dark">{{ p.title }}</h3>
              <p class="mt-2 leading-relaxed text-ink-soft">{{ p.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFÍCIOS -->
    <section class="bg-cream">
      <div class="container-page py-20">
        <h2 class="script-title text-center text-4xl sm:text-5xl">
          O que muda na sua vida depois disso? Absolutamente tudo 🦋
        </h2>

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
          A astrologia dá o diagnóstico de onde dói; o baralho cigano dá o remédio.
          Aqui você não sai só com teoria — sai com a sua magia na mão.
        </p>
      </div>
    </section>

    <!-- PLANOS -->
    <section id="planos" class="scroll-mt-24 bg-cream">
      <div class="container-page py-20">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="script-title text-4xl sm:text-5xl">
            Tá pronta pra essa viagem? Escolhe como quer receber sua magia 🌙
          </h2>
        </div>

        <div class="mt-14 grid items-start gap-6 md:grid-cols-3">
          <PricingCard
            icon="📜"
            name="A Herança Cigana"
            tagline="O essencial"
            description="O seu mapa explicadinho em um áudio gravado e um arquivo lindo, contendo todo o seu céu natal, seu signo cigano e a revelação do seu Mestre regente. Perfeito pra guardar e ouvir no seu tempo!"
            cta-label="Quero a Herança Cigana"
          />
          <PricingCard
            icon="💻"
            name="A Reunião Sagrada"
            featured
            description="A gente senta junta numa chamada de vídeo para ler o seu mapa ao vivo! A taróloga ainda abre as cartas do baralho cigano e tira todas as suas dúvidas ali, olhando no seu olho. Você também leva o áudio gravado dessa conversa maravilhosa."
            cta-label="Quero a Reunião Sagrada"
          />
          <PricingCard
            icon="🌿"
            name="Magia, Constelação e Terapia"
            tagline="A imersão completa"
            description="Tudo do pacote anterior + o verdadeiro remédio pra alma! Além do atendimento ao vivo, você recebe a poderosa Terapia Floral Astrológica e indicações de banhos e magias ciganas focadas pra destravar exatamente o que te impede de crescer e ser feliz."
            cta-label="Quero a Imersão Completa"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-sand">
      <div class="container-page py-20">
        <h2 class="script-title text-center text-4xl sm:text-5xl">
          Ficou com alguma pulga atrás da orelha? A gente explica 💭
        </h2>

        <div class="mx-auto mt-10 max-w-3xl">
          <FaqItem question="O Mapa Astral perde a validade?">
            Nunca, meu bem! O céu estava daquele jeitinho exato no dia em que você
            nasceu e isso não muda. Ele vale para a vida toda.
          </FaqItem>
          <FaqItem question="Preciso ser da Umbanda ou de alguma religião específica?">
            De jeito nenhum! A sabedoria dos ciganos do astral é livre, ecumênica e
            feita de vento e estrelas. Eles dão assistência e amor puro sem
            distinção de credos ou nacionalidades, abraçando a todos.
          </FaqItem>
          <FaqItem question="E se eu tiver medo do que o mapa ou as cartas vão dizer?">
            Aqui não tem espaço pra terrorismo astrológico! O oráculo cigano não
            julga nem condena. Toda sombra ou bloqueio que a gente encontrar no seu
            mapa será tratado com muito respeito e acolhimento, mostrando a cura
            através da terapia, dos elementos da natureza e de conselhos para te
            empoderar.
          </FaqItem>
        </div>

        <div class="mt-12 text-center">
          <NuxtLink to="#planos" class="btn-ink">
            Quero abrir meus caminhos 🔮
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
