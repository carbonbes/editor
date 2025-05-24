<template>
  <Primitive
    v-bind="forwarded"
    class="bg-black/25 backdrop-blur-[2px]"
  >
    <slot />
  </Primitive>
</template>

<script lang="ts" setup>
import { Primitive, useForwardProps, type PrimitiveProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwarded = useForwardProps(props)
</script>
