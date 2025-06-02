<template>
  <DialogRoot v-bind="forwarded" v-model:open="open">
    <slot />
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  createContext,
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import type { SwiperContainer } from 'swiper/element'
import type Swiper from 'swiper'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open', { default: false })

const swiperContainerRef = ref<SwiperContainer | null>(null)
const swiper = computed(() => swiperContainerRef.value?.swiper)

provideLightboxContext({ open, swiperContainerRef, swiper })
</script>

<script lang="ts">
export interface LightboxContext {
  open: Ref<boolean>
  swiperContainerRef: Ref<SwiperContainer | null>
  swiper: Ref<Swiper | undefined>
}

export const [injectLightboxContext, provideLightboxContext] =
  createContext<LightboxContext>('Lightbox')
</script>
