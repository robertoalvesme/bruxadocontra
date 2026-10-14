// https://nuxt.com/docs/api/configuration/nuxt-config
// Site da Bruxa do Contra: layout proprio, com as paginas de loja do
// @ocahub/kit (prateleira em /loja, produto, carrinho, conta e checkout).
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@ocahub/kit'],
  css: ['~/assets/css/main.css', '~/assets/css/loja.css'],

  // Paginas ainda sem conteudo: fora do menu e, se alguem chegar pelo endereco, de volta a home.
  routeRules: Object.fromEntries(
    ['/tarot', '/astrologia', '/midia', '/blog', '/quem-somos', '/assinatura', '/area-exclusiva']
      .map(path => [path, { redirect: { to: '/', statusCode: 302 } }])
  ),

  rhfactor: {
    storeId: process.env.RHFACTOR_STORE_ID ?? '',
    apiBase: process.env.RHFACTOR_API_BASE ?? 'http://localhost:8085',
    iamBase: process.env.RHFACTOR_IAM_BASE ?? 'http://localhost:8080',
    contractsBase: process.env.RHFACTOR_CONTRACTS_BASE ?? 'http://localhost:8082',
    paymentsBase: process.env.RHFACTOR_PAYMENTS_BASE ?? 'http://localhost:8089',
    // A home e da Bruxa; a prateleira do kit fica na Loja.
    pages: { shelf: '/loja' }
  },

  app: {
    head: {
      title: 'Bruxa do Contra — Tarot e Astrologia',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Bruxa do Contra — Tarot, Astrologia, conteúdo exclusivo e loja de produtos para o seu autoconhecimento.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/bruxa-do-contra-logo-solo.svg' },
        { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica:ital@0;1&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap',
        },
      ],
    },
  },
})
