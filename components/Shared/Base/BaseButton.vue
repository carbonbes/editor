<template>
  <Primitive
    v-bind="forwarded"
    class="cursor-pointer disabled:opacity-50 data-disabled:opacity-50 data-disabled:pointer-events-none"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<PrimitiveProps>(),
  {
    as: 'button'
  }
)

const forwarded = useForwardProps(props)
</script>
