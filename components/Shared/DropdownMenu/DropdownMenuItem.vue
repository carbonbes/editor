<template>
  <DropdownMenuItem v-bind="forwarded" as-child @select="handleSelect">
    <DropdownMenuItemBase>
      <slot />
    </DropdownMenuItemBase>
  </DropdownMenuItem>
</template>

<script lang="ts" setup>
import {
  DropdownMenuItem,
  type DropdownMenuItemEmits,
  type DropdownMenuItemProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { DropdownMenuItemBase } from '~/components/Shared/DropdownMenu'

const props = defineProps<DropdownMenuItemProps & { preventClose?: boolean }>()
const emits = defineEmits<DropdownMenuItemEmits>()

const { preventClose, ...dropdownMenuItemProps } = props

const forwarded = useForwardPropsEmits(dropdownMenuItemProps, emits)

function handleSelect(e: Event) {
  if (preventClose) e.preventDefault()
}
</script>
