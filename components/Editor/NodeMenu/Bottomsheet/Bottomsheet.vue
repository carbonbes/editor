<template>
  <Drawer
    v-model:open="open"
    :snap-points="[0.5, 1]"
    :active-snap-point="0.5"
    :fade-from-index="0"
  >
    <DrawerPortal>
      <DrawerOverlay />

      <DrawerBody>
        <slot />
      </DrawerBody>
    </DrawerPortal>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerPortal,
} from '~/components/Shared/Drawer'

const open = defineModel<boolean>('open')
</script>
