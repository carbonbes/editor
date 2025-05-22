<template>
  <DropdownMenuPortal to="#teleports">
    <slot />
  </DropdownMenuPortal>
</template>

<script setup lang="ts">
import { DropdownMenuPortal } from '~/components/Shared/DropdownMenu'
</script>
