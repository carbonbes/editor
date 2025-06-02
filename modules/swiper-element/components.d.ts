import type { DefineComponent, HTMLAttributes, ReservedProps } from 'vue'
import type { SwiperOptions, SwiperEvents } from 'swiper/types'

interface HTMLBaseProps extends HTMLAttributes, ReservedProps {}

interface SwiperContainerProps
  extends HTMLBaseProps,
    Omit<SwiperOptions, 'modules'> {}

type SwiperEmits = {
  [K in keyof SwiperEvents as K extends `_${string}`
    ? never
    : `swiper${Lowercase<K & string>}`]: (
    e: CustomEvent<Parameters<SwiperEvents[K]>>,
  ) => void
}

type SwiperSlideProps = HTMLBaseProps

declare module 'vue' {
  interface GlobalComponents {
    'swiper-container': DefineComponent<
      SwiperContainerProps,
      {},
      {},
      {},
      {},
      {},
      {},
      SwiperEmits
    >
    'swiper-slide': DefineComponent<SwiperSlideProps>
  }
}
