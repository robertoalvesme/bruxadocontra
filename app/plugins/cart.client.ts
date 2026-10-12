// O kit grava no carrinho e dispara o hook; o site so confirma com um aviso.
export default defineNuxtPlugin((nuxtApp) => {
  const toast = useState<string | null>('site:toast', () => null)
  let timer: ReturnType<typeof setTimeout> | undefined
  nuxtApp.hook('rhfactor:cart:add', (item) => {
    toast.value = `${item.quantity}× ${item.name} no carrinho`
    clearTimeout(timer)
    timer = setTimeout(() => { toast.value = null }, 3500)
  })
})
