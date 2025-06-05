export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', async () => {
    ;(await import('swiper/element/bundle')).register()
  })
})
