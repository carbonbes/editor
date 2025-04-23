<template>
  <DrawerRoot
    v-bind="forwarded"
    v-model:open="open"
    v-model:active-snap-point="activeSnapPoint"
    :snap-points
  >
    <slot />
  </DrawerRoot>
</template>

<script setup lang="ts">
import { createContext, useForwardPropsEmits } from 'reka-ui'
import {
  DrawerRoot,
  type DrawerRootEmits,
  type DrawerRootProps,
} from 'vaul-vue'

const props = defineProps<DrawerRootProps>()
const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open', { default: false })

const activeSnapPoint = ref(props.activeSnapPoint && 1)
const contentScrollOffset = ref(0)

provideDrawerContext({ open, activeSnapPoint, contentScrollOffset })
</script>

<script lang="ts">
export type DrawerContext = {
  open: Ref<boolean>
  activeSnapPoint: Ref<number>
  contentScrollOffset: Ref<number>
}

export const [injectDrawerContext, provideDrawerContext]
  = createContext<DrawerContext>('Drawer')
</script>
