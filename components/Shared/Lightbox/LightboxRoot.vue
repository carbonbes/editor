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
import type Swiper from 'swiper'
import type { SwiperContainer } from '~/components/Shared/Swiper'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open', { default: false })

const swiperContainerRef = ref<InstanceType<typeof SwiperContainer> | null>(
  null,
)

const swiper = computed(() => swiperContainerRef.value?.$el.swiper || null)

provideLightboxContext({ open, swiperContainerRef, swiper })
</script>

<script lang="ts">
export interface LightboxContext {
  open: Ref<boolean>
  swiperContainerRef: Ref<InstanceType<typeof SwiperContainer> | null>
  swiper: Ref<Swiper | null>
}

export const [injectLightboxContext, provideLightboxContext] =
  createContext<LightboxContext>('Lightbox')
</script>
