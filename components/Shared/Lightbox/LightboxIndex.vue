<template>
  <Primitive v-bind="forwarded">{{ index + 1 }}</Primitive>
</template>

<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import type { LightboxIndexProps } from '~/components/Shared/Lightbox'
import { injectLightboxContext } from './LightboxRoot.vue'
import type { SwiperEvents } from 'swiper/types'

const props = defineProps<LightboxIndexProps>()
const forwarded = useForwardProps(props)

const index = ref(0)

function handleRealIndexChange(
  e: Parameters<SwiperEvents['realIndexChange']>[0],
) {
  index.value = e.realIndex
}

const { swiper } = injectLightboxContext()

function on() {
  swiper.value?.on('realIndexChange', handleRealIndexChange)
}

function off() {
  swiper.value?.off('realIndexChange', handleRealIndexChange)
}

onMounted(on)
onBeforeUnmount(off)
</script>
