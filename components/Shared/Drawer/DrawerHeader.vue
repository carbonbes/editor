<template>
  <div class="flex items-center" :class="{ 'shadow': contentScrollOffset > 0 }">
    <slot />

    <DrawerClose as="button" class="ml-auto p-1.5 flex items-center justify-center bg-gray-200/50 rounded-full">
      <Icon name="tabler:x" class="size-5" />
    </DrawerClose>
  </div>
</template>

<script setup lang="ts">
import { injectDrawerContext } from './DrawerRoot.vue'
import { DrawerClose } from 'vaul-vue'

const { contentScrollOffset } = injectDrawerContext()
</script>
