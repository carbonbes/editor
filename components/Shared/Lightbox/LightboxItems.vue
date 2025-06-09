<template>
  <SwiperContainer ref="swiperContainerRef" :init="false">
    <slot />
  </SwiperContainer>
</template>

<script setup lang="ts">
import {
  SwiperContainer,
  type SwiperContainerEmits,
  type SwiperContainerProps,
} from '~/components/Shared/Swiper'
import { useForwardPropsEmits } from 'reka-ui'
import { injectLightboxContext } from './'

export type LightboxItemsProps = SwiperContainerProps
export type LightboxItemsEmits = SwiperContainerEmits

const props = defineProps<LightboxItemsProps>()
const emits = defineEmits<LightboxItemsEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const swiperContainerRef =
  useTemplateRef<typeof SwiperContainer>('swiperContainerRef')

const { swiper, activeItemIndex } = injectLightboxContext()

function init() {
  if (!swiperContainerRef.value) return

  Object.assign(swiperContainerRef.value.$el, {
    ...forwarded.value,
    initialSlide: activeItemIndex.value,
  })

  swiperContainerRef.value.$el.initialize()
  swiper.value = swiperContainerRef.value.$el.swiper
}

onMounted(init)
</script>
