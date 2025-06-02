import { defineNuxtModule, createResolver, addPlugin } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'swiper-element',
  },

  setup(opts, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
      ['swiper-container', 'swiper-slide'].includes(tag)

    addPlugin(resolver.resolve('./components.client.ts'))

    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        path: resolver.resolve('./components.d.ts'),
      })
    })
  },
})
