<template>
  <SwiperContainer
    v-bind="forwarded"
    ref="swiperContainerRef"
    class="absolute inset-0"
  >
    <slot />
  </SwiperContainer>
</template>

<script setup lang="ts">
import { SwiperContainer } from '~/components/Shared/Swiper'
import type {
  LightboxItemsEmits,
  LightboxItemsProps,
} from '~/components/Shared/Lightbox'
import { useForwardPropsEmits } from 'reka-ui'
import { injectLightboxContext } from './LightboxRoot.vue'

const props = defineProps<LightboxItemsProps>()
const emits = defineEmits<LightboxItemsEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const { swiperContainerRef } = injectLightboxContext()
</script>
