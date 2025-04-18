<template>
  <DrawerPortal to="#teleports">
    <DrawerOverlay class="fixed inset-0 bg-black/50" />

    <DrawerContent
      v-bind="$attrs"
      aria-describedby=""
      class="fixed right-0 bottom-0 left-0 w-full h-full max-h-[95%] bg-white rounded-t-3xl"
    >
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>

<script setup lang="ts">
import { DrawerPortal, DrawerOverlay, DrawerContent } from 'vaul-vue'
import { drawerContextKey } from '~/keys'

const { state, updateState } = inject(drawerContextKey)
</script>
