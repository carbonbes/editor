<template>
  <Primitive
    v-bind="forwarded"
    class="cursor-pointer disabled:opacity-50 data-disabled:opacity-50 data-disabled:pointer-events-none"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, useForwardProps } from 'reka-ui'
import type { BaseButtonProps } from '~/components/Shared/Base/BaseButton'

const props = withDefaults(defineProps<BaseButtonProps>(), {
  as: 'button',
})

const forwarded = useForwardProps(props)
</script>
