<template>
  <SwiperContainer v-bind="forwarded" ref="swiperContainerRef">
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

const { swiperContainerRef } = injectLightboxContext()
</script>
