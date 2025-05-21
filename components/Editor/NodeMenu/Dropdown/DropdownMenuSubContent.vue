<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent>
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>

<script setup lang="ts">
import { DropdownMenuSubContent } from '~/components/Shared/DropdownMenu'
import DropdownMenuPortal from './DropdownMenuPortal.vue'
</script>
