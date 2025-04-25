<template>
  <button class="h-12 flex items-center gap-4 [&>.iconify]:!size-7 " @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { injectDrawerContext } from '~/components/Shared/Drawer/DrawerRoot.vue'

const { preventClose } = defineProps<{ preventClose?: boolean }>()

const { open } = injectDrawerContext()

function onClick() {
  if (preventClose) return

  open.value = false
}
</script>
