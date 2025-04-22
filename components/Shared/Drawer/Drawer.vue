<template>
  <DrawerRoot
    v-bind="forwarded"
    v-model:open="open"
    v-model:active-snap-point="activeSnapPoint"
    :snap-points
  >
    <DrawerPortal to="#teleports">
      <DrawerOverlay class="fixed inset-0 bg-black/50" />

      <DrawerContent
        v-bind="$attrs"
        aria-describedby=""
        class="fixed right-0 bottom-0 left-0 w-full h-full max-h-[95%] flex flex-col bg-white rounded-t-3xl"
      >
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>

        <slot />
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>

<script setup lang="ts">
import { createContext, DialogTitle, useForwardPropsEmits, VisuallyHidden } from 'reka-ui'
import {
  DrawerRoot,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  type DrawerRootEmits,
  type DrawerRootProps,
} from 'vaul-vue'

const props = defineProps<DrawerRootProps>()
const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open')

const activeSnapPoint = ref(props.activeSnapPoint && 1)
const YScrollOffset = ref(0)

provideDrawerContext({ open, activeSnapPoint, YScrollOffset })
</script>

<script lang="ts">
export type DrawerContext = {
  open: Ref<boolean>
  activeSnapPoint: Ref<number>
  YScrollOffset: Ref<number>
}

export const [injectDrawerContext, provideDrawerContext]
  = createContext<DrawerContext>('Drawer')
</script>
