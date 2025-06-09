<template>
  <template v-for="(vnode, i) in vnodes" :key="i">
    <Primitive v-bind="forwarded">
      <Component :is="vnode" @click="(e) => handleClick(e, i)" />
    </Primitive>
  </template>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'
import { injectLightboxContext } from './'

export type LightboxTriggerProps = PrimitiveProps

const props = defineProps<LightboxTriggerProps>()
const forwarded = useForwardProps(props)

const slots = useSlots()

const vnodes = computed(() => slots.default?.())

const { open, activeItemIndex } = injectLightboxContext()

function handleClick(e: PointerEvent, i: number) {
  if ((e.target as HTMLElement).dataset.lightboxTrigger === undefined) return

  activeItemIndex.value = i
  open.value = true
}
</script>
