import type { SwiperOptions, SwiperEvents } from 'swiper/types'

export type SwiperContainerProps = Omit<SwiperOptions, 'modules'>

export type SwiperContainerEmits = /* @vue-ignore */ {
  [K in keyof SwiperEvents as K extends `_${string}`
    ? never
    : `swiper${Lowercase<K & string>}`]: SwiperEvents[K] extends (
    ...args: infer R
  ) => void
    ? [CustomEvent<R>]
    : never
}

export { default as SwiperContainer } from './SwiperContainer.vue'
export { default as SwiperSlide } from './SwiperSlide.vue'
