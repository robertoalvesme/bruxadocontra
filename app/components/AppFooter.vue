<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative overflow-hidden bg-night-deep text-parchment/80">
    <div class="floresta-only pt-10"><CelestialDivider /></div>
    <BotanicalSprig class="floresta-only pointer-events-none absolute -bottom-16 -right-6 h-[300px] w-[150px] -rotate-12 opacity-40" :bend="50" :leaves="8" :seed="5" />
    <div class="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div class="flex items-center gap-3">
          <img src="/img/mariposa.jpg" alt="" width="56" height="56" loading="lazy" class="h-14 w-14 rounded-full ring-1 ring-gold/60">
          <p class="font-display text-xl tracking-[0.08em] text-parchment">Bruxa do Contra</p>
        </div>
        <p class="mt-5 max-w-sm text-sm leading-relaxed">
          Espiritualidade com os pés na vida real. Leituras de Baralho Cigano, conteúdos e produtos feitos com
          intenção, respeito e cuidado, sem promessas fáceis e sem atalhos.
        </p>
      </div>

      <nav aria-label="Rodapé">
        <p class="eyebrow eyebrow--light">Navegue</p>
        <ul class="mt-4 space-y-2 text-sm">
          <li><NuxtLink to="/consultas" class="hover:text-gold-light">Consultas e leituras</NuxtLink></li>
          <li><NuxtLink to="/consultas#perguntas" class="hover:text-gold-light">Perguntas frequentes</NuxtLink></li>
          <li><NuxtLink to="/sobre" class="hover:text-gold-light">Sobre a Bruxa do Contra</NuxtLink></li>
          <li><NuxtLink to="/loja" class="hover:text-gold-light">Loja</NuxtLink></li>
          <li><NuxtLink to="/minha-conta" class="hover:text-gold-light">Minha conta</NuxtLink></li>
        </ul>
      </nav>

      <div>
        <p class="eyebrow eyebrow--light">Fale comigo</p>
        <ul class="mt-4 space-y-3 text-sm">
          <li>
            <a href="https://www.instagram.com/bruxadocontraveneno/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 hover:text-gold-light">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              @bruxadocontraveneno
            </a>
          </li>
          <li>
            <a href="mailto:julia@bruxadocontra.com.br" class="inline-flex items-center gap-2 break-all hover:text-gold-light">
              <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              julia@bruxadocontra.com.br
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gold/15">
      <div class="container-page flex flex-col gap-2 py-6 text-xs text-parchment/60 sm:flex-row sm:justify-between">
        <p>© {{ year }} Bruxa do Contra. Todos os direitos reservados.</p>
        <p>A leitura é aconselhamento espiritual e não substitui atendimento médico ou psicológico.</p>
      </div>
    </div>
  </footer>
</template>
