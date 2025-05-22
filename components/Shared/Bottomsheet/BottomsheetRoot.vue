<template>
  <DrawerRoot
    v-bind="forwarded"
    v-model:open="open"
    v-model:active-snap-point="activeSnapPoint"
    :snap-points="props.snapPoints"
  >
    <slot />
  </DrawerRoot>
</template>

<script setup lang="ts">
import { createContext, useForwardPropsEmits } from 'reka-ui'
import { DrawerRoot } from '~/components/Shared/Drawer'
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'

const props = withDefaults(defineProps<DrawerRootProps>(), {
  direction: 'bottom',
})

const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open', { default: false })

const activeSnapPoint = ref(props.activeSnapPoint ? props.activeSnapPoint : 1)
const contentScrollOffset = ref(0)

provideBottomsheetContext({ open, activeSnapPoint, contentScrollOffset })
</script>

<script lang="ts">
export interface BottomsheetContext {
  open: Ref<boolean>
  activeSnapPoint: Ref<number | string>
  contentScrollOffset: Ref<number>
}

export const [injectBottomsheetContext, provideBottomsheetContext] =
  createContext<BottomsheetContext>('Bottomsheet')
</script>
