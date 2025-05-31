<template>
  <DropdownMenuPortal>
    <DropdownMenuContent v-bind="forwarded">
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>

<script setup lang="ts">
import { type DropdownMenuContentProps, useForwardProps } from 'reka-ui'
import { DropdownMenuContent } from '~/components/Shared/DropdownMenu'
import DropdownMenuPortal from './DropdownMenuPortal.vue'

const props = defineProps<DropdownMenuContentProps>()

const forwarded = useForwardProps(props)
</script>
