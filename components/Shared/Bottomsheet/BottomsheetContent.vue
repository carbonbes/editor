<template>
  <DrawerContent
    class="fixed right-0 bottom-0 left-0 w-full h-full max-h-[95%] flex flex-col bg-white rounded-t-3xl"
  >
    <slot />
  </DrawerContent>
</template>

<script setup lang="ts">
import { DrawerContent } from '~/components/Shared/Drawer'
</script>
