<template>
  <Primitive v-bind="forwarded">{{ index + 1 }}</Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'
import { injectLightboxContext } from './'
import type { SwiperEvents } from 'swiper/types'

export type LightboxActiveItemIndexProps = PrimitiveProps

const props = defineProps<LightboxActiveItemIndexProps>()
const forwarded = useForwardProps(props)

const { swiper } = injectLightboxContext()

const index = ref(swiper.value?.realIndex || 0)

function handleRealIndexChange(
  e: Parameters<SwiperEvents['realIndexChange']>[0],
) {
  index.value = e.realIndex
}

function on() {
  swiper.value?.on('realIndexChange', handleRealIndexChange)
}

function off() {
  swiper.value?.off('realIndexChange', handleRealIndexChange)
}

onMounted(on)
onBeforeUnmount(off)
</script>
