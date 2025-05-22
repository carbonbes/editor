<template>
  <DropdownMenuContent v-bind="forwarded" as-child>
    <DropdownMenuContentBase>
      <slot />
    </DropdownMenuContentBase>
  </DropdownMenuContent>
</template>

<script lang="ts" setup>
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { DropdownMenuContentBase } from '~/components/Shared/DropdownMenu'

const props = defineProps<DropdownMenuContentProps>()
const emits = defineEmits<DropdownMenuContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
