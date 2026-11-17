// https://nuxt.com/docs/api/configuration/nuxt-config
// Site da Bruxa do Contra: layout proprio, com as paginas de loja do
// @ocahub/kit (prateleira em /loja, produto, carrinho, conta e checkout).
const emptyPages = ['/tarot', '/astrologia', '/midia', '/blog', '/assinatura', '/area-exclusiva']

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@ocahub/kit'],
  css: ['~/assets/css/main.css', '~/assets/css/loja.css'],

  // Paginas ainda sem conteudo: fora do menu e do sitemap e, se alguem chegar pelo endereco, de volta a home.
  routeRules: {
    ...Object.fromEntries(emptyPages.map(path => [path, { redirect: { to: '/', statusCode: 302 } }])),
    // "Quem somos" virou "Sobre" (texto da Bruxa, 2026-11).
    '/quem-somos': { redirect: { to: '/sobre', statusCode: 301 } },
    // Mapa astral virou Roda Cigana.
    '/mapa-astral': { redirect: { to: '/roda-cigana', statusCode: 301 } },
    '/minha-conta/mapas-astrais': { redirect: { to: '/minha-conta/rodas-ciganas', statusCode: 301 } },
    '/minha-conta/mapas-astrais/**': { redirect: { to: '/minha-conta/rodas-ciganas/**', statusCode: 301 } },
  },

  rhfactor: {
    storeId: process.env.RHFACTOR_STORE_ID ?? '',
    apiBase: process.env.RHFACTOR_API_BASE ?? 'http://localhost:8085',
    iamBase: process.env.RHFACTOR_IAM_BASE ?? 'http://localhost:8080',
    contractsBase: process.env.RHFACTOR_CONTRACTS_BASE ?? 'http://localhost:8082',
    paymentsBase: process.env.RHFACTOR_PAYMENTS_BASE ?? 'http://localhost:8089',
    // A home e da Bruxa; a prateleira do kit fica na Loja.
    // A Bruxa chama o mapa de Roda Cigana: nomes e enderecos das paginas do kit.
    pages: { shelf: '/loja', birthChartSample: '/roda-cigana', birthCharts: '/minha-conta/rodas-ciganas' },
    birthChartName: { singular: 'Roda Cigana', plural: 'Rodas Ciganas', short: 'roda', shortPlural: 'rodas', feminine: true },
    sitemap: { exclude: [...emptyPages, '/quem-somos', '/mapa-astral'] }
  },

  app: {
    head: {
      title: 'Bruxa do Contra — Baralho Cigano e Bruxaria Natural',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Leituras de Baralho Cigano com presença, respeito e clareza: orientações semanais e mensais, tiragens temáticas, Panorama da Vida e consultas ao vivo pelo Google Meet.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png' },
        { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Josefin+Sans:wght@300;400;600&display=swap',
        },
      ],
    },
  },
})
