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

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open', { default: false })

const swiper = ref<Swiper | null>(null)
const activeItemIndex = ref(0)

provideLightboxContext({
  open,
  swiper,
  activeItemIndex,
})
</script>

<script lang="ts">
export interface LightboxContext {
  open: Ref<boolean>
  swiper: Ref<Swiper | null>
  activeItemIndex: Ref<number>
}

export const [injectLightboxContext, provideLightboxContext] =
  createContext<LightboxContext>('Lightbox')
</script>
