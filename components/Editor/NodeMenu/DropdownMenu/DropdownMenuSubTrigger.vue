<template>
  <DropdownMenuSubTrigger class="flex items-center gap-3 [&>.iconify]:!size-5">
    <slot />
  </DropdownMenuSubTrigger>
</template>

<script setup lang="ts">
import { DropdownMenuSubTrigger } from '~/components/Shared/DropdownMenu'
</script>
