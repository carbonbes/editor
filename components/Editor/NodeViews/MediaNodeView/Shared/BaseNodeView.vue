<template>
  <Primitive
    v-bind="forwarded"
    class="bg-gray-100 rounded-2xl overflow-hidden"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, useForwardProps, type PrimitiveProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwarded = useForwardProps(props)
</script>