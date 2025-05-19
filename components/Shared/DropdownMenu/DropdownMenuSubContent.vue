<template>
  <DropdownMenuSubContent v-bind="forwarded" as-child>
    <DropdownMenuContentBase>
      <slot />
    </DropdownMenuContentBase>
  </DropdownMenuSubContent>
</template>

<script lang="ts" setup>
import {
  DropdownMenuSubContent,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import DropdownMenuContentBase from '~/components/Shared/DropdownMenu/DropdownMenuContentBase.vue'

const props = defineProps<DropdownMenuContentProps>()
const emits = defineEmits<DropdownMenuContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
