<template>
  <DropdownMenuRoot :modal="false">
    <slot />
  </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import { DropdownMenuRoot } from '~/components/Shared/DropdownMenu'
</script>
