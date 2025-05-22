<template>
  <div
    class="h-12 flex items-center gap-4 font-medium [&>.iconify]:!size-6"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { injectBottomsheetContext } from '~/components/Shared/Bottomsheet/BottomsheetRoot.vue'

const { ignoreClose } = defineProps<{
  ignoreClose?: boolean
}>()

const { open } = injectBottomsheetContext()

function onClick() {
  if (ignoreClose) return

  open.value = false
}
</script>
