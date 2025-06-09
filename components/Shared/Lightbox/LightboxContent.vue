<template>
  <DialogContent v-bind="forwarded">
    <slot />
  </DialogContent>
</template>

<script setup lang="ts">
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  useForwardPropsEmits,
} from 'reka-ui'

export type LightboxContentProps = DialogContentProps
export type LightboxContentEmits = DialogContentEmits

const props = defineProps<LightboxContentProps>()
const emits = defineEmits<LightboxContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
