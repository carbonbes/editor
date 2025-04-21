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
        as-child
        class="fixed right-0 bottom-0 left-0 w-full h-full max-h-[95%] bg-white rounded-t-3xl"
      >
        <Flex col>
          <slot />
        </Flex>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>

<script lang="ts">
import { createContext, useForwardPropsEmits } from 'reka-ui'

export type DrawerContext = {
  open: Ref<boolean>
  activeSnapPoint: Ref<number>
}

export const [injectDrawerContext, provideDrawerContext]
  = createContext<DrawerContext>('Drawer')
</script>

<script setup lang="ts">
import {
  DrawerRoot,
  DrawerContent,
  DrawerPortal,
  DrawerOverlay,
  type DrawerRootEmits,
  type DrawerRootProps,
} from 'vaul-vue'
import Flex from '~/components/Shared/Flex.vue'

const props = defineProps<DrawerRootProps>()
const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open')

const activeSnapPoint = ref(props.activeSnapPoint && 1)

provideDrawerContext({ open, activeSnapPoint })
</script>
