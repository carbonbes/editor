<template>
  <DialogContent v-bind="forwarded" class="fixed inset-0">
    <VisuallyHidden>
      <DialogTitle />
    </VisuallyHidden>

    <slot />
  </DialogContent>
</template>

<script setup lang="ts">
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogTitle,
  useForwardPropsEmits,
  VisuallyHidden,
} from 'reka-ui'

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
