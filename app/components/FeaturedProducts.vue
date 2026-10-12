<script setup lang="ts">
// Produtos em destaque: os primeiros produtos a venda na loja (rhfactor-kit), no visual
// da Bruxa. Serve para a home e outras paginas; sem produto a venda, o bloco nao aparece.
// Quando o painel tiver "destaques da loja", a escolha passa a vir de la.
const props = withDefaults(
  defineProps<{
    title?: string
    /** Quantos produtos mostrar (de 1 a 3 cabem lado a lado). */
    limit?: number
    /** Fundo da faixa. */
    tone?: 'cream' | 'white'
  }>(),
  {
    title: 'Destaques da loja',
    limit: 3,
    tone: 'cream',
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
  <section v-if="products.length" :class="tone === 'white' ? 'bg-white' : 'bg-cream'" data-bdc="featured-products">
    <div class="container-page py-16">
      <div class="mb-10 flex justify-center">
        <span class="display-title rounded bg-sand px-8 py-2 text-sm text-ink-soft">{{ title }}</span>
      </div>

      <div class="grid gap-6" :class="grid">
        <NuxtLink
          v-for="(p, i) in products"
          :key="p.id"
          :to="links.product(p.slug)"
          class="group relative block rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          :class="{ 'md:-mt-6 md:mb-6 ring-1 ring-sand': featured(i) }"
        >
          <div v-if="p.image" class="overflow-hidden rounded-lg">
            <RhImage :image="p.image" :format="store?.imageFormat ?? 'SQUARE'" :alt="p.name" sizes="(min-width: 768px) 30vw, 90vw" />
          </div>
          <PlaceholderImage v-else :label="p.name" ratio="aspect-square" tone="sand" />
          <div class="mt-4">
            <h3 class="text-sm uppercase tracking-wide text-gold-dark">{{ p.name }}</h3>
            <p class="mt-1 text-sm text-ink-soft">
              {{ priceOf(p) }}<template v-if="p.serviceMinutes"> · {{ p.serviceMinutes }} min</template>
            </p>
          </div>
          <span class="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-gold-dark opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" stroke-linecap="round" /></svg>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
