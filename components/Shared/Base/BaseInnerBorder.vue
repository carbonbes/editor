<template>
  <Primitive
    v-bind="forwarded"
    class="relative after:absolute after:inset-0 after:ring-1 after:ring-inset after:ring-black/5 after:rounded-[inherit] after:pointer-events-none"
  >
    <slot />
  </Primitive>
</template>
<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwarded = useForwardProps(props)
</script>
