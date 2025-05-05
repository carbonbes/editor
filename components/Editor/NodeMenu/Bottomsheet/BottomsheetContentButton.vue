<template>
  <button class="h-12 flex items-center gap-3" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { injectDrawerContext } from '~/components/Shared/Drawer/DrawerRoot.vue'

const { ignoreClose } = defineProps<{ ignoreClose?: boolean }>()

const { open } = injectDrawerContext()

function onClick() {
  if (ignoreClose) return

  open.value = false
}
</script>
