<template>
  <DropdownMenuItem class="[&>.iconify]:!size-6">
    <slot />
  </DropdownMenuItem>
</template>

<script setup lang="ts">
import { DropdownMenuItem } from '~/components/Shared/DropdownMenu'
</script>
