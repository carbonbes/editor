<template>
  <Primitive
    v-bind="forwarded"
    class="bg-white ring-1 ring-gray-300/50 shadow-lg"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwarded = useForwardProps(props)
</script>
