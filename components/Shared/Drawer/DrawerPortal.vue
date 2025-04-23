<template>
  <DrawerPortal to="#teleports">
    <slot />
  </DrawerPortal>
</template>

<script setup lang="ts">
import { DrawerPortal } from 'vaul-vue'
</script>
