<script setup lang="ts">
// Produtos em destaque: os primeiros produtos a venda na loja (rhfactor-kit), no visual
// da Bruxa. Serve para a home e outras paginas; sem produto a venda, o bloco nao aparece.
// Quando o painel tiver "destaques da loja", a escolha passa a vir de la.
const props = withDefaults(
  defineProps<{
    title?: string
    eyebrow?: string
    /** Quantos produtos mostrar (de 1 a 3 cabem lado a lado). */
    limit?: number
    /** Fundo da faixa. */
    tone?: 'parchment' | 'light'
  }>(),
  {
    title: 'Escolha a sua leitura',
    eyebrow: 'Leituras disponíveis',
    limit: 3,
    tone: 'parchment',
  },
)

const { data } = await useRhProducts(1, () => props.limit)
const products = computed(() => (data.value?.items ?? []).slice(0, props.limit))
const store = useRhStore()
const links = useRhLinks()
const format = useRhFormat()

// Com menos de tres, os cartoes ficam centralizados; com tres, o do meio sobe.
const grid = computed(() => ({
  1: 'mx-auto max-w-sm',
  2: 'mx-auto max-w-3xl md:grid-cols-2',
}[products.value.length] ?? 'md:grid-cols-3'))
const featured = (i: number) => products.value.length === 3 && i === 1

function priceOf(p: { priceFrom: number, priceTo: number, currency: string }) {
  const from = format.price(p.priceFrom, p.currency)
  return p.priceTo > p.priceFrom ? `A partir de ${from}` : from
}
</script>

<template>
  <section v-if="products.length" :class="tone === 'light' ? 'bg-parchment-light' : 'bg-parchment'" data-bdc="featured-products">
    <div class="container-page py-20">
      <div class="mb-12 text-center">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h2 class="section-title mt-3">{{ title }}</h2>
      </div>

      <div class="grid gap-7" :class="grid">
        <NuxtLink
          v-for="(p, i) in products"
          :key="p.id"
          :to="links.product(p.slug)"
          class="group flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-parchment-light transition-shadow hover:shadow-[0_12px_32px_rgba(32,56,44,.12)]"
          :class="{ 'md:-mt-4 md:mb-4 ring-1 ring-gold/60': featured(i) }"
        >
          <div v-if="p.image" class="overflow-hidden">
            <RhImage :image="p.image" :format="store?.imageFormat ?? 'SQUARE'" :alt="p.name" sizes="(min-width: 768px) 30vw, 90vw" class="transition-transform duration-500 group-hover:scale-[1.03]" />
          </div>
          <div v-else class="flex aspect-[4/3] items-center justify-center bg-night">
            <img src="/img/mariposa.jpg" alt="" loading="lazy" class="h-24 w-24 rounded-full opacity-90 ring-1 ring-gold/60">
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-2xl">{{ p.name }}</h3>
            <p class="mt-2 text-sm text-ink-soft">
              {{ priceOf(p) }}<template v-if="p.serviceMinutes"> · {{ p.serviceMinutes }} min ao vivo</template>
            </p>
            <span class="link-arrow mt-auto pt-6">Ver detalhes <span aria-hidden="true">→</span></span>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-12 text-center">
        <NuxtLink to="/loja" class="btn-outline">Ver todas as leituras e produtos</NuxtLink>
      </div>
    </div>
  </section>
</template>
