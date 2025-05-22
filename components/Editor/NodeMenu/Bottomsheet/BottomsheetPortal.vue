<template>
  <BottomsheetPortal to="#teleports">
    <slot />
  </BottomsheetPortal>
</template>

<script setup lang="ts">
import { BottomsheetPortal } from '~/components/Shared/Bottomsheet'
</script>
