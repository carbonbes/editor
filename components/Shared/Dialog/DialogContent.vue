<template>
  <DialogContent
    v-bind="forwarded"
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col bg-white rounded-xl"
  >
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

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
