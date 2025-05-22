<template>
  <DropdownMenuSubTrigger v-bind="forwarded" as-child>
    <DropdownMenuItemBase>
      <slot />

      <div class="ml-auto flex items-center">
        <ChevronIcon right class="ml-8" />
      </div>
    </DropdownMenuItemBase>
  </DropdownMenuSubTrigger>
</template>

<script lang="ts" setup>
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'reka-ui'
import { DropdownMenuItemBase } from '~/components/Shared/DropdownMenu'
import { ChevronIcon } from '~/components/Shared/Icons'

const props = defineProps<DropdownMenuSubTriggerProps>()

const forwarded = useForwardProps(props)
</script>
