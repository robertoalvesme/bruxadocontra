<template>
  <footer class="mt-20">
    <div class="gold-rule" />
    <div class="container-page grid grid-cols-1 gap-10 py-12 md:grid-cols-3 md:items-center">
      <!-- Brand + tagline -->
      <div>
        <p class="font-logo text-4xl leading-none text-ink">Bruxa do Contra</p>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
          Julia é a bruxa
        </p>
      </div>

      <!-- Center crest -->
      <div class="flex justify-center">
        <div class="flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 text-gold">
          <!-- Bee crest placeholder -->
          <svg class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-1.1 0-2 .9-2 2 0 .6.3 1.1.7 1.5C9.6 6.2 9 7.3 9 8.5V9H7a1 1 0 0 0 0 2h2v2H7a1 1 0 0 0 0 2h2v.5c0 2 1.3 3.5 3 3.5s3-1.5 3-3.5V15h2a1 1 0 0 0 0-2h-2v-2h2a1 1 0 0 0 0-2h-2v-.5c0-1.2-.6-2.3-1.7-3C13.7 5.1 14 4.6 14 4c0-1.1-.9-2-2-2Z" />
          </svg>
        </div>
      </div>

      <!-- Contact -->
      <div class="md:justify-self-end md:text-right">
        <div class="flex gap-3 md:justify-end">
          <a href="#" aria-label="YouTube" class="flex h-10 w-10 items-center justify-center rounded bg-grape text-white transition-colors hover:bg-grape-dark">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7Zm-13 3V9l5.2 3-5.2 3Z" /></svg>
          </a>
          <a href="#" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded bg-grape text-white transition-colors hover:bg-grape-dark">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
          </a>
        </div>
        <p class="mt-4 text-sm text-ink-soft">(11) 94146-9000</p>
        <p class="text-sm text-ink-soft">CONTATO@BRUXADOCONTRA.COM.BR</p>
      </div>
    </div>
  </footer>
</template>
