import { defineNuxtModule, createResolver, addPlugin } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'swiper-element',
  },

  setup(opts, nuxt) {
    nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
      ['swiper-container', 'swiper-slide'].includes(tag)

    const resolver = createResolver(import.meta.url)

    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        path: resolver.resolve('./types'),
      })
    })

    addPlugin(resolver.resolve('./plugins/register.ts'))
  },
})
