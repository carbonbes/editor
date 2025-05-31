<template>
  <Primitive
    v-bind="forwarded"
    class="ring-2 ring-gray-200 hover:ring-blue-300 focus:ring-blue-500 disabled:opacity-25 disabled:pointer-events-none placeholder:text-gray-400 outline-none"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwarded = useForwardProps(props)
</script>
