<template>
  <BottomsheetRoot
    v-model:open="open"
    :snap-points="[0.5, 1]"
    :active-snap-point="0.5"
    :fade-from-index="0"
  >
    <slot />
  </BottomsheetRoot>
</template>

<script setup lang="ts">
import { BottomsheetRoot } from '~/components/Shared/Bottomsheet'

const open = defineModel<boolean>('open', { default: false })
</script>
