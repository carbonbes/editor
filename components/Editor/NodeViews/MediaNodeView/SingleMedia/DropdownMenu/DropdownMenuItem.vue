<template>
  <DropdownMenuItem
    class="flex items-center gap-3 [&>.iconify]:!size-5"
    @select="(e) => e.preventDefault()"
  >
    <slot />
  </DropdownMenuItem>
</template>

<script setup lang="ts">
import { DropdownMenuItem } from '~/components/Shared/DropdownMenu'
</script>
