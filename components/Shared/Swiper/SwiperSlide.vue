<template>
  <swiper-slide v-bind="forwarded">
    <slot />
  </swiper-slide>
</template>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'

export interface SwiperSlideProps {
  lazy?: boolean
}

const props = defineProps<SwiperSlideProps>()
const forwarded = useForwardProps(props)
</script>
