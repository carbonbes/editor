<template>
  <Primitive v-bind="forwarded" class="text-xl font-bold whitespace-nowrap">
    <slot />
  </Primitive>
</template>
<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<PrimitiveProps>(), {
  as: 'p',
})

const forwarded = useForwardProps(props)
</script>
