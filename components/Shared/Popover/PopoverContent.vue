<template>
  <PopoverPortal to="#teleports">
    <PopoverContent v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>

<script setup lang="ts">
import {
  type PopoverContentEmits,
  type PopoverContentProps,
  PopoverPortal,
  PopoverContent,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<PopoverContentProps>()
const emits = defineEmits<PopoverContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
