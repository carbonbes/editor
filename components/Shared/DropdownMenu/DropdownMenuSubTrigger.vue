<template>
  <DropdownMenuSubTrigger v-bind="forwarded" as-child>
    <DropdownMenuItemBase sub-trigger>
      <slot />
    </DropdownMenuItemBase>
  </DropdownMenuSubTrigger>
</template>

<script lang="ts" setup>
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'reka-ui'
import DropdownMenuItemBase from '~/components/Shared/DropdownMenu/DropdownMenuItemBase.vue'

const props = defineProps<DropdownMenuSubTriggerProps>()

const forwarded = useForwardProps(props)
</script>
