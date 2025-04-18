<template>
  <DrawerRoot
    v-bind="forwarded"
    v-model:open="open"
    v-model:active-snap-point="state.activeSnapPoint"
  >
    <slot />
  </DrawerRoot>
</template>

<script setup lang="ts">
import { DrawerRoot, type DrawerRootEmits, type DrawerRootProps } from 'vaul-vue'
import { useForwardPropsEmits } from 'reka-ui'
import { drawerContextKey } from '~/keys'

const props = defineProps<DrawerRootProps>()
const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const open = defineModel<boolean>('open')

let state = reactive({
  snapPoints: props.snapPoints,
  activeSnapPoint: props.snapPoints?.[0] || 1,
})

type UpdateStateInputArgs = { open: boolean, snapPoints: number[], activeSnapPoint: number }

function updateState(args: UpdateStateInputArgs) {
  const { open } = args

  state = { ...args }
}

provide(drawerContextKey, { state: { ...state, open }, updateState })
</script>
