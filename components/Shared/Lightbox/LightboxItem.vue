<template>
  <SwiperSlide v-bind="forwarded">
    <slot />
  </SwiperSlide>
</template>

<script setup lang="ts">
import { SwiperSlide, type SwiperSlideProps } from '~/components/Shared/Swiper'
import { useForwardProps } from 'reka-ui'

export type LightboxItemProps = SwiperSlideProps

const props = defineProps<LightboxItemProps>()
const forwarded = useForwardProps(props)
</script>
