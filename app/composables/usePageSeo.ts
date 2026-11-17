// SEO de cada pagina do site: titulo, descricao, compartilhamento e, quando
// houver, dados estruturados (schema.org). A imagem padrao e o logotipo.
export function usePageSeo(opts: {
  title: string
  description: string
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}) {
  const origin = useRequestURL().origin
  const image = `${origin}${opts.image ?? '/img/logo-bruxa.jpg'}`
  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogImage: image,
    ogImageAlt: 'Bruxa do Contra',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
  })
  if (opts.jsonLd) {
    const items = Array.isArray(opts.jsonLd) ? opts.jsonLd : [opts.jsonLd]
    useHead({
      script: items.map((data, i) => ({
        type: 'application/ld+json',
        key: `bdc-ld-${i}`,
        innerHTML: JSON.stringify({ '@context': 'https://schema.org', ...data }),
      })),
    })
  }
}
