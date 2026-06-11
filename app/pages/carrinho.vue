<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

type ItemType = 'produto' | 'atendimento' | 'assinatura'

interface CartItem {
  id: string
  type: ItemType
  name: string
  variant?: string
  unitPrice: number // BRL in cents — avoids float drama
  quantity: number
  tone: 'sand' | 'gold' | 'grape' | 'ink'
}

// Mock cart — to be replaced by a Pinia store / API later.
const items = reactive<CartItem[]>([
  {
    id: 'vela-lavanda',
    type: 'produto',
    name: 'Vela Aromática Lavanda',
    variant: '180g · ardência 30h',
    unitPrice: 10000,
    quantity: 2,
    tone: 'sand',
  },
  {
    id: 'spray-bamboo',
    type: 'produto',
    name: 'Home Spray Bamboo',
    variant: '250ml',
    unitPrice: 1525,
    quantity: 1,
    tone: 'sand',
  },
  {
    id: 'reuniao-sagrada',
    type: 'atendimento',
    name: 'Mapa Astral — Reunião Sagrada',
    variant: 'Online · videochamada · 90min',
    unitPrice: 29700,
    quantity: 1,
    tone: 'ink',
  },
  {
    id: 'assinatura-transitos',
    type: 'assinatura',
    name: 'Trânsitos Astrológicos',
    variant: 'Mensal · cancela quando quiser',
    unitPrice: 2900,
    quantity: 1,
    tone: 'grape',
  },
])

// Frete & cupom
const cep = ref('')
const shippingComputed = ref(false)
const couponCode = ref('')
const appliedCoupon = ref<{ code: string, percentOff: number } | null>(null)
const couponError = ref('')

// Catálogo simplificado de cupons mock
const VALID_COUPONS: Record<string, number> = {
  BRUXA10: 10,
  AXEDOCIGANO: 15,
}

// Mock "quem sabe você também gosta"
const sugestoes = [
  { name: 'Vela Aromática Canela', price: 'R$ 100,00', tone: 'sand' as const },
  { name: 'Banho de Sal Grosso', price: 'R$ 38,00', tone: 'sand' as const },
  { name: 'Defumador Palo Santo', price: 'R$ 52,00', tone: 'sand' as const },
]

// Helpers
function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function typeLabel(t: ItemType): string {
  if (t === 'produto') return 'Produto'
  if (t === 'atendimento') return 'Atendimento'
  return 'Assinatura'
}

function typeChipClass(t: ItemType): string {
  if (t === 'atendimento') return 'bg-grape/15 text-grape-dark'
  if (t === 'assinatura') return 'bg-gold/20 text-gold-dark'
  return 'bg-sand text-ink-soft'
}

function increment(item: CartItem) {
  if (item.type !== 'produto') return
  item.quantity++
}
function decrement(item: CartItem) {
  if (item.type !== 'produto') return
  if (item.quantity > 1) item.quantity--
}
function removeItem(id: string) {
  const i = items.findIndex(it => it.id === id)
  if (i !== -1) items.splice(i, 1)
}
function clearCart() {
  items.splice(0, items.length)
}

function applyCoupon() {
  const code = couponCode.value.trim().toUpperCase()
  if (!code) return
  const pct = VALID_COUPONS[code]
  if (pct) {
    appliedCoupon.value = { code, percentOff: pct }
    couponError.value = ''
    couponCode.value = ''
  } else {
    appliedCoupon.value = null
    couponError.value = 'Esse cupom não tá pegando, meu bem.'
  }
}
function removeCoupon() {
  appliedCoupon.value = null
}

function calculateShipping() {
  // Mock — backend depois vai calcular frete real por CEP
  if (cep.value.replace(/\D/g, '').length >= 8) {
    shippingComputed.value = true
  }
}

// Computeds
const hasPhysical = computed(() => items.some(i => i.type === 'produto'))
const isEmpty = computed(() => items.length === 0)

const subtotal = computed(() =>
  items.reduce((sum, it) => sum + it.unitPrice * it.quantity, 0),
)

const shippingCents = computed(() => {
  if (!hasPhysical.value) return 0
  if (!shippingComputed.value) return null // ainda não calculado
  if (subtotal.value >= 20000) return 0 // frete grátis acima de R$ 200
  return 1990 // R$ 19,90 mock
})

const discountCents = computed(() => {
  if (!appliedCoupon.value) return 0
  return Math.round((subtotal.value * appliedCoupon.value.percentOff) / 100)
})

const totalCents = computed(
  () => subtotal.value + (shippingCents.value ?? 0) - discountCents.value,
)

const totalItemsCount = computed(() =>
  items.reduce((n, it) => n + it.quantity, 0),
)
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden bg-ink text-cream">
      <SunBurst class="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 text-gold/25" />
      <span class="absolute right-16 top-12 text-2xl text-gold/60">✦</span>
      <span class="absolute bottom-12 left-20 text-xl text-gold/40">✦</span>

      <div class="container-page relative z-10 flex min-h-[260px] flex-col items-center justify-center py-14 text-center">
        <p class="text-xs uppercase tracking-[0.4em] text-gold-light">
          Seu cesto de magia
        </p>
        <h1 class="mt-4 font-script text-5xl leading-tight text-white sm:text-6xl">
          Carrinho
        </h1>
        <p v-if="!isEmpty" class="mt-3 text-sm text-cream/80">
          {{ totalItemsCount }} {{ totalItemsCount === 1 ? 'item' : 'itens' }} esperando você nessa cesta ✨
        </p>
      </div>
    </section>

    <!-- EMPTY STATE -->
    <section v-if="isEmpty" class="bg-cream">
      <div class="container-page flex flex-col items-center justify-center py-24 text-center">
        <div class="flex h-20 w-20 items-center justify-center rounded-full bg-grape/15 text-4xl">
          🪶
        </div>
        <h2 class="mt-6 script-title text-4xl sm:text-5xl">
          Seu cesto ainda tá levinho
        </h2>
        <p class="mt-3 max-w-md text-ink-soft">
          Dá uma volta pela loja, escolhe um atendimento ou uma assinatura — a
          gente cuida do resto pra encher essa cesta de axé.
        </p>
        <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <NuxtLink to="/loja" class="btn-gold">Ver a loja</NuxtLink>
          <NuxtLink to="/astrologia" class="btn-outline">Agendar atendimento</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CART CONTENT -->
    <section v-else class="bg-cream">
      <div class="container-page grid gap-10 py-16 lg:grid-cols-[1fr_400px]">
        <!-- LEFT — itens -->
        <div>
          <div class="flex items-end justify-between border-b border-sand pb-4">
            <h2 class="display-title text-sm text-ink-soft">
              Itens no carrinho
            </h2>
            <button
              type="button"
              class="text-xs uppercase tracking-wider text-ink-soft transition-colors hover:text-grape-dark"
              @click="clearCart"
            >
              Limpar carrinho
            </button>
          </div>

          <ul class="divide-y divide-sand">
            <li
              v-for="item in items"
              :key="item.id"
              class="grid grid-cols-[88px_1fr] items-start gap-4 py-6 sm:grid-cols-[112px_1fr_auto]"
            >
              <!-- Imagem -->
              <PlaceholderImage
                :label="item.name"
                ratio="aspect-square"
                :tone="item.tone"
                class="w-full"
              />

              <!-- Nome / variante / quantidade -->
              <div class="min-w-0">
                <span
                  class="inline-block rounded-full px-2 py-0.5 text-[0.65rem] uppercase tracking-wider"
                  :class="typeChipClass(item.type)"
                >
                  {{ typeLabel(item.type) }}
                </span>
                <h3 class="mt-2 text-base text-ink sm:text-lg">{{ item.name }}</h3>
                <p v-if="item.variant" class="mt-1 text-sm text-ink-soft">
                  {{ item.variant }}
                </p>

                <!-- Quantidade (só pra produto físico) -->
                <div v-if="item.type === 'produto'" class="mt-3 flex items-center gap-2">
                  <span class="text-xs uppercase tracking-wider text-ink-soft">
                    Quantidade:
                  </span>
                  <div class="inline-flex items-center rounded border border-sand">
                    <button
                      type="button"
                      class="flex h-8 w-8 items-center justify-center text-ink-soft transition-colors hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
                      :disabled="item.quantity <= 1"
                      aria-label="Diminuir quantidade"
                      @click="decrement(item)"
                    >
                      −
                    </button>
                    <span class="w-10 text-center text-sm text-ink">{{ item.quantity }}</span>
                    <button
                      type="button"
                      class="flex h-8 w-8 items-center justify-center text-ink-soft transition-colors hover:bg-sand"
                      aria-label="Aumentar quantidade"
                      @click="increment(item)"
                    >
                      +
                    </button>
                  </div>
                </div>

                <!-- Preço + remover no mobile -->
                <div class="mt-3 flex items-center justify-between sm:hidden">
                  <p class="text-base text-ink">
                    {{ formatBRL(item.unitPrice * item.quantity) }}
                  </p>
                  <button
                    type="button"
                    class="text-xs uppercase tracking-wider text-ink-soft hover:text-grape-dark"
                    @click="removeItem(item.id)"
                  >
                    Remover
                  </button>
                </div>
              </div>

              <!-- Preço + remover (desktop) -->
              <div class="hidden flex-col items-end gap-3 sm:flex">
                <p class="text-lg text-ink">
                  {{ formatBRL(item.unitPrice * item.quantity) }}
                </p>
                <p v-if="item.quantity > 1" class="text-xs text-ink-soft">
                  {{ formatBRL(item.unitPrice) }} cada
                </p>
                <button
                  type="button"
                  class="text-ink-soft transition-colors hover:text-grape-dark"
                  aria-label="Remover item"
                  @click="removeItem(item.id)"
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>

          <NuxtLink
            to="/loja"
            class="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold-dark hover:underline"
          >
            ← Continuar comprando
          </NuxtLink>
        </div>

        <!-- RIGHT — resumo -->
        <aside class="lg:sticky lg:top-24 lg:self-start">
          <div class="rounded-2xl border border-sand bg-white p-6 shadow-sm sm:p-8">
            <h2 class="script-title text-3xl">Resumo do pedido</h2>

            <!-- CEP -->
            <div v-if="hasPhysical" class="mt-6">
              <label for="cep" class="form-label">Calcular frete</label>
              <div class="mt-2 flex gap-2">
                <input
                  id="cep"
                  v-model="cep"
                  type="text"
                  inputmode="numeric"
                  placeholder="00000-000"
                  class="form-input mt-0 flex-1"
                >
                <button
                  type="button"
                  class="rounded border border-sand px-4 text-xs uppercase tracking-wider text-ink-soft transition-colors hover:border-gold hover:text-gold-dark"
                  @click="calculateShipping"
                >
                  OK
                </button>
              </div>
              <p class="mt-2 text-xs text-ink-soft/80">
                Frete grátis em compras acima de {{ formatBRL(20000) }}.
              </p>
            </div>

            <!-- Cupom -->
            <div class="mt-6">
              <label for="cupom" class="form-label">Tem um cupom de magia?</label>
              <div v-if="!appliedCoupon" class="mt-2 flex gap-2">
                <input
                  id="cupom"
                  v-model="couponCode"
                  type="text"
                  placeholder="Ex.: BRUXA10"
                  class="form-input mt-0 flex-1 uppercase"
                  @keydown.enter.prevent="applyCoupon"
                >
                <button
                  type="button"
                  class="rounded border border-sand px-4 text-xs uppercase tracking-wider text-ink-soft transition-colors hover:border-gold hover:text-gold-dark"
                  @click="applyCoupon"
                >
                  Aplicar
                </button>
              </div>
              <div
                v-else
                class="mt-2 flex items-center justify-between rounded border border-grape/40 bg-grape/5 px-3 py-2"
              >
                <span class="text-sm text-grape-dark">
                  🎟️ {{ appliedCoupon.code }} · −{{ appliedCoupon.percentOff }}%
                </span>
                <button
                  type="button"
                  class="text-xs uppercase tracking-wider text-ink-soft hover:text-grape-dark"
                  @click="removeCoupon"
                >
                  Remover
                </button>
              </div>
              <p v-if="couponError" class="mt-2 text-xs text-grape-dark">
                {{ couponError }}
              </p>
            </div>

            <!-- Totais -->
            <div class="mt-8 space-y-3 border-t border-sand pt-6 text-sm">
              <div class="flex justify-between text-ink-soft">
                <span>Subtotal</span>
                <span>{{ formatBRL(subtotal) }}</span>
              </div>
              <div v-if="hasPhysical" class="flex justify-between text-ink-soft">
                <span>Frete</span>
                <span v-if="shippingCents === null">A calcular</span>
                <span v-else-if="shippingCents === 0" class="text-grape-dark">Grátis ✨</span>
                <span v-else>{{ formatBRL(shippingCents) }}</span>
              </div>
              <div v-if="appliedCoupon" class="flex justify-between text-grape-dark">
                <span>Desconto ({{ appliedCoupon.code }})</span>
                <span>−{{ formatBRL(discountCents) }}</span>
              </div>
            </div>

            <div class="mt-6 flex items-end justify-between border-t border-sand pt-6">
              <span class="text-xs uppercase tracking-wider text-ink-soft">Total</span>
              <span class="font-script text-3xl text-grape leading-none">
                {{ formatBRL(totalCents) }}
              </span>
            </div>
            <p class="mt-1 text-right text-xs text-ink-soft/80">
              ou em até 6x sem juros
            </p>

            <NuxtLink to="/area-exclusiva" class="btn-gold mt-6 w-full">
              Finalizar compra ✨
            </NuxtLink>

            <ul class="mt-6 space-y-2 text-xs text-ink-soft">
              <li class="flex items-center gap-2">
                <span aria-hidden="true">🔒</span>
                Pagamento seguro · Pix, cartão ou boleto
              </li>
              <li class="flex items-center gap-2">
                <span aria-hidden="true">📦</span>
                Envio em até 3 dias úteis
              </li>
              <li class="flex items-center gap-2">
                <span aria-hidden="true">💌</span>
                Atendimentos confirmados no e-mail
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <!-- SUGESTÕES -->
    <section v-if="!isEmpty" class="bg-sand">
      <div class="container-page py-16">
        <div class="flex items-end justify-between gap-4">
          <h2 class="script-title text-3xl sm:text-4xl">
            Quem sabe você também gostaria…
          </h2>
          <NuxtLink to="/loja" class="hidden text-xs uppercase tracking-wider text-gold-dark hover:underline sm:inline">
            Ver loja completa →
          </NuxtLink>
        </div>

        <div class="mt-8 grid gap-6 sm:grid-cols-3">
          <article
            v-for="p in sugestoes"
            :key="p.name"
            class="group rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <PlaceholderImage :label="p.name" ratio="aspect-square" :tone="p.tone" />
            <div class="mt-4 flex items-center justify-between">
              <div>
                <h3 class="text-sm uppercase tracking-wide text-gold-dark">{{ p.name }}</h3>
                <p class="mt-1 text-sm text-ink-soft">{{ p.price }}</p>
              </div>
              <button
                type="button"
                class="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-gold-dark transition-colors hover:bg-gold hover:text-white"
                aria-label="Adicionar ao carrinho"
              >
                +
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
