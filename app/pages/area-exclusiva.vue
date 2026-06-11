<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

type View = 'choice' | 'login' | 'signup' | 'success'

const view = ref<View>('choice')
const signupStep = ref<1 | 2 | 3>(1)

// Form state
const login = reactive({ email: '', password: '' })

const signup = reactive({
  // step 1
  email: '',
  // step 2 — placeholders; user will refine the exact fields later
  fullName: '',
  cpf: '',
  phone: '',
  birthDate: '',
  password: '',
  passwordConfirm: '',
  // step 3
  plans: [] as string[],
})

// The 3 subscription products the área exclusiva offers
const subscriptionOptions = [
  {
    id: 'previsao-semanal',
    name: 'Previsão Semanal',
    icon: '🌙',
    description:
      'Toda segunda-feira a leitura energética da semana, com os melhores dias para amor, trabalho e magia.',
    price: 'R$ 19/mês',
  },
  {
    id: 'transitos',
    name: 'Trânsitos Astrológicos',
    icon: '🪐',
    featured: true,
    description:
      'Acompanhe os trânsitos do seu mapa em tempo real e saiba como cada movimento dos astros afeta a sua vida.',
    price: 'R$ 29/mês',
  },
  {
    id: 'mapa-astral',
    name: 'Mapa Astral Vivo',
    icon: '✨',
    description:
      'Uma sessão mensal de leitura do seu mapa atualizado, com indicações de banhos e ritos para o ciclo.',
    price: 'R$ 49/mês',
  },
]

const stepLabels = ['Seu e-mail', 'Seus dados', 'Suas assinaturas']

// Validation per step (kept simple — backend will revalidate)
const emailValid = computed(() => /^\S+@\S+\.\S+$/.test(signup.email.trim()))
const step2Valid = computed(
  () =>
    signup.fullName.trim().length > 1
    && signup.password.length >= 6
    && signup.password === signup.passwordConfirm,
)

// Navigation
function showChoice() {
  view.value = 'choice'
}
function showLogin() {
  view.value = 'login'
}
function showSignup() {
  view.value = 'signup'
  signupStep.value = 1
}
function nextStep() {
  if (signupStep.value < 3) signupStep.value = (signupStep.value + 1) as 1 | 2 | 3
}
function prevStep() {
  if (signupStep.value > 1) signupStep.value = (signupStep.value - 1) as 1 | 2 | 3
  else showChoice()
}
function togglePlan(id: string) {
  const i = signup.plans.indexOf(id)
  if (i === -1) signup.plans.push(id)
  else signup.plans.splice(i, 1)
}

// Submit handlers — TODO: wire to backend / Supabase / Stripe when ready
function submitLogin() {
  // eslint-disable-next-line no-console
  console.log('login →', { ...login })
  view.value = 'success'
}
function finishSignup() {
  // eslint-disable-next-line no-console
  console.log('signup →', { ...signup })
  view.value = 'success'
}

// Helpers for the stepper
function circleClass(n: 1 | 2 | 3) {
  if (signupStep.value === n) return 'bg-grape text-white ring-4 ring-grape/20'
  if (signupStep.value > n) return 'bg-gold text-white'
  return 'bg-sand text-ink-soft'
}
function labelClass(n: 1 | 2 | 3) {
  return signupStep.value >= n ? 'text-ink' : 'text-ink-soft/60'
}
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden bg-ink text-cream">
      <SunBurst class="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-gold/25" />
      <span class="absolute right-16 top-16 text-2xl text-gold/60">✦</span>
      <span class="absolute bottom-16 left-20 text-xl text-gold/40">✦</span>

      <div class="container-page relative z-10 flex min-h-[320px] flex-col items-center justify-center py-16 text-center">
        <p class="text-xs uppercase tracking-[0.4em] text-gold-light">
          Acesso de bruxa
        </p>
        <h1 class="mt-4 font-script text-5xl leading-tight text-white sm:text-6xl">
          Área Exclusiva
        </h1>
        <p class="mt-4 max-w-xl text-cream/80">
          Entra no nosso refúgio mágico — sua previsão semanal, seus trânsitos e
          o seu mapa estão te esperando.
        </p>
      </div>
    </section>

    <!-- PANEL -->
    <section class="bg-cream py-16">
      <div class="container-page max-w-2xl">
        <div class="rounded-2xl border border-sand bg-white p-8 shadow-sm sm:p-10">
          <!-- ESCOLHA -->
          <div v-if="view === 'choice'">
            <h2 class="script-title text-3xl sm:text-4xl">
              Como você quer entrar, meu bem?
            </h2>
            <p class="mt-3 leading-relaxed text-ink-soft">
              Já tem conta com a Bruxa do Contra ou está vindo pela primeira vez?
              Escolhe o seu caminho aí embaixo.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                class="group rounded-2xl border border-sand bg-white p-6 text-left transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gold/40"
                @click="showLogin"
              >
                <span class="text-3xl" aria-hidden="true">🗝️</span>
                <h3 class="mt-3 font-script text-2xl text-grape">Já tenho conta</h3>
                <p class="mt-1 text-sm text-ink-soft">
                  Entrar com e-mail e senha.
                </p>
                <span class="mt-4 inline-block text-xs uppercase tracking-wider text-gold-dark group-hover:underline">
                  Entrar →
                </span>
              </button>

              <button
                type="button"
                class="group rounded-2xl border border-grape bg-grape/5 p-6 text-left transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-grape/40"
                @click="showSignup"
              >
                <span class="text-3xl" aria-hidden="true">✨</span>
                <h3 class="mt-3 font-script text-2xl text-grape">Quero me cadastrar</h3>
                <p class="mt-1 text-sm text-ink-soft">
                  Criar minha conta em 3 passinhos.
                </p>
                <span class="mt-4 inline-block text-xs uppercase tracking-wider text-grape-dark group-hover:underline">
                  Criar conta →
                </span>
              </button>
            </div>
          </div>

          <!-- LOGIN -->
          <form
            v-else-if="view === 'login'"
            class="space-y-6"
            @submit.prevent="submitLogin"
          >
            <div>
              <button
                type="button"
                class="text-xs uppercase tracking-wider text-ink-soft hover:text-gold-dark"
                @click="showChoice"
              >
                ← Voltar
              </button>
              <h2 class="mt-3 script-title text-3xl sm:text-4xl">Entrar na sua conta</h2>
              <p class="mt-2 text-ink-soft">Que bom te ver de novo por aqui. ✨</p>
            </div>

            <div>
              <label for="login-email" class="form-label">E-mail</label>
              <input
                id="login-email"
                v-model="login.email"
                type="email"
                required
                autocomplete="email"
                placeholder="voce@email.com"
                class="form-input"
              >
            </div>

            <div>
              <label for="login-password" class="form-label">Senha</label>
              <input
                id="login-password"
                v-model="login.password"
                type="password"
                required
                autocomplete="current-password"
                placeholder="••••••••"
                class="form-input"
              >
              <a href="#" class="mt-2 inline-block text-xs uppercase tracking-wider text-gold-dark hover:underline">
                Esqueci minha senha
              </a>
            </div>

            <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                class="text-sm text-ink-soft hover:text-gold-dark"
                @click="showSignup"
              >
                Não tenho conta — criar agora
              </button>
              <button type="submit" class="btn-gold">Entrar</button>
            </div>
          </form>

          <!-- CADASTRO -->
          <div v-else-if="view === 'signup'">
            <!-- Stepper -->
            <div>
              <div class="grid grid-cols-3 gap-3">
                <div
                  v-for="(label, i) in stepLabels"
                  :key="label"
                  class="flex flex-col items-center text-center"
                >
                  <span
                    class="flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors"
                    :class="circleClass((i + 1) as 1 | 2 | 3)"
                  >
                    <svg
                      v-if="signupStep > (i + 1)"
                      class="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                    </svg>
                    <span v-else>{{ i + 1 }}</span>
                  </span>
                  <span
                    class="mt-2 text-[0.7rem] uppercase tracking-wider"
                    :class="labelClass((i + 1) as 1 | 2 | 3)"
                  >
                    {{ label }}
                  </span>
                </div>
              </div>
              <div class="mt-4 h-1 overflow-hidden rounded-full bg-sand">
                <div
                  class="h-full bg-gold transition-all duration-300"
                  :style="{ width: `${(signupStep / 3) * 100}%` }"
                />
              </div>
            </div>

            <!-- Step 1 — e-mail -->
            <form
              v-if="signupStep === 1"
              class="mt-10 space-y-6"
              @submit.prevent="nextStep"
            >
              <div>
                <h2 class="script-title text-3xl sm:text-4xl">
                  Primeiro, me conta seu e-mail
                </h2>
                <p class="mt-2 text-ink-soft">
                  É por ele que a gente vai mandar suas leituras e confirmar a
                  conta.
                </p>
              </div>

              <div>
                <label for="signup-email" class="form-label">E-mail</label>
                <input
                  id="signup-email"
                  v-model="signup.email"
                  type="email"
                  required
                  autocomplete="email"
                  placeholder="voce@email.com"
                  class="form-input"
                >
              </div>

              <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  class="text-sm text-ink-soft hover:text-gold-dark"
                  @click="showChoice"
                >
                  ← Voltar
                </button>
                <button
                  type="submit"
                  class="btn-gold disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="!emailValid"
                >
                  Próximo passo
                </button>
              </div>
            </form>

            <!-- Step 2 — dados da conta -->
            <form
              v-else-if="signupStep === 2"
              class="mt-10 space-y-6"
              @submit.prevent="nextStep"
            >
              <div>
                <h2 class="script-title text-3xl sm:text-4xl">
                  Agora seus dados de bruxa
                </h2>
                <p class="mt-2 text-ink-soft">
                  Esses dados servem pra emitir notinha, te chamar pelo nome e
                  proteger sua conta.
                </p>
              </div>

              <div>
                <label for="full-name" class="form-label">Nome completo</label>
                <input
                  id="full-name"
                  v-model="signup.fullName"
                  type="text"
                  required
                  autocomplete="name"
                  placeholder="Como aparece no seu documento"
                  class="form-input"
                >
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label for="cpf" class="form-label">CPF</label>
                  <input
                    id="cpf"
                    v-model="signup.cpf"
                    type="text"
                    inputmode="numeric"
                    placeholder="000.000.000-00"
                    class="form-input"
                  >
                </div>
                <div>
                  <label for="phone" class="form-label">Celular</label>
                  <input
                    id="phone"
                    v-model="signup.phone"
                    type="tel"
                    autocomplete="tel"
                    placeholder="(00) 00000-0000"
                    class="form-input"
                  >
                </div>
              </div>

              <div>
                <label for="birth-date" class="form-label">Data de nascimento</label>
                <input
                  id="birth-date"
                  v-model="signup.birthDate"
                  type="date"
                  class="form-input"
                >
                <p class="mt-2 text-xs text-ink-soft/80">
                  Usamos pra calcular seu mapa astral e seu signo cigano.
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label for="password" class="form-label">Senha</label>
                  <input
                    id="password"
                    v-model="signup.password"
                    type="password"
                    required
                    autocomplete="new-password"
                    minlength="6"
                    placeholder="No mínimo 6 caracteres"
                    class="form-input"
                  >
                </div>
                <div>
                  <label for="password-confirm" class="form-label">Confirmar senha</label>
                  <input
                    id="password-confirm"
                    v-model="signup.passwordConfirm"
                    type="password"
                    required
                    autocomplete="new-password"
                    minlength="6"
                    placeholder="Repete pra confirmar"
                    class="form-input"
                  >
                  <p
                    v-if="signup.passwordConfirm && signup.password !== signup.passwordConfirm"
                    class="mt-2 text-xs text-grape-dark"
                  >
                    As senhas não estão batendo.
                  </p>
                </div>
              </div>

              <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  class="text-sm text-ink-soft hover:text-gold-dark"
                  @click="prevStep"
                >
                  ← Voltar
                </button>
                <button
                  type="submit"
                  class="btn-gold disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="!step2Valid"
                >
                  Próximo passo
                </button>
              </div>
            </form>

            <!-- Step 3 — assinaturas -->
            <form
              v-else-if="signupStep === 3"
              class="mt-10 space-y-6"
              @submit.prevent="finishSignup"
            >
              <div>
                <h2 class="script-title text-3xl sm:text-4xl">
                  Quais assinaturas você quer ativar?
                </h2>
                <p class="mt-2 text-ink-soft">
                  Pode escolher uma, duas, todas ou nenhuma agora — a sua conta
                  fica criada do mesmo jeito e você assina quando quiser.
                </p>
              </div>

              <ul class="space-y-3">
                <li v-for="plan in subscriptionOptions" :key="plan.id">
                  <label
                    class="flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-colors"
                    :class="signup.plans.includes(plan.id)
                      ? 'border-grape bg-grape/5'
                      : 'border-sand bg-white hover:border-gold'"
                  >
                    <input
                      type="checkbox"
                      class="mt-1 h-5 w-5 shrink-0 accent-grape"
                      :checked="signup.plans.includes(plan.id)"
                      @change="togglePlan(plan.id)"
                    >
                    <div class="flex-1">
                      <div class="flex items-center gap-2">
                        <span class="text-2xl" aria-hidden="true">{{ plan.icon }}</span>
                        <h3 class="font-script text-2xl text-grape leading-none">{{ plan.name }}</h3>
                        <span
                          v-if="plan.featured"
                          class="rounded-full bg-grape px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white"
                        >
                          mais querido
                        </span>
                      </div>
                      <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ plan.description }}</p>
                    </div>
                    <span class="shrink-0 text-sm text-ink">{{ plan.price }}</span>
                  </label>
                </li>
              </ul>

              <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  class="text-sm text-ink-soft hover:text-gold-dark"
                  @click="prevStep"
                >
                  ← Voltar
                </button>
                <button type="submit" class="btn-gold">
                  Finalizar cadastro ✨
                </button>
              </div>
            </form>
          </div>

          <!-- SUCESSO -->
          <div v-else-if="view === 'success'" class="text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-grape/15 text-3xl">
              ✨
            </div>
            <h2 class="mt-6 script-title text-3xl sm:text-4xl">
              Pronto, meu amor!
            </h2>
            <p class="mx-auto mt-3 max-w-md text-ink-soft">
              A sua conta foi criada e o backend vai te conectar à área exclusiva
              em instantes. Em breve aqui aparecerá o seu dashboard com Previsão
              Semanal, Trânsitos e Mapa Astral.
            </p>
            <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <NuxtLink to="/" class="btn-outline">Voltar para a home</NuxtLink>
              <button type="button" class="btn-gold" @click="showChoice">
                Entrar com minha conta
              </button>
            </div>
          </div>
        </div>

        <!-- Reassurance line below the card -->
        <p class="mt-6 text-center text-xs uppercase tracking-wider text-ink-soft/70">
          Seus dados ficam protegidos por aqui. Nenhum cigano do astral entrega seus segredos. 🔒
        </p>
      </div>
    </section>
  </div>
</template>
