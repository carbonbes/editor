<template>
  <swiper-container v-bind="forwarded">
    <slot />
  </swiper-container>
</template>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
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

const props = defineProps<SwiperContainerProps>()
const emits = defineEmits<SwiperContainerEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
