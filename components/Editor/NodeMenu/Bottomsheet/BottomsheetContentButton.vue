<template>
  <div class="h-12 flex items-center justify-between" @click="onClick">
    <div class="flex items-center gap-3 [&>.iconify]:!size-6">
      <slot />
    </div>

    <ChevronIcon v-if="sub" right class="!size-5" />
  </div>
</template>

<script setup lang="ts">
import { injectBottomsheetContext } from '~/components/Shared/Bottomsheet/BottomsheetRoot.vue'
import { ChevronIcon } from '~/components/Shared/Icons'

const { ignoreClose, sub } = defineProps<{
  ignoreClose?: boolean
  sub?: boolean
}>()

const { open } = injectBottomsheetContext()

function onClick() {
  if (ignoreClose) return

  open.value = false
}
</script>
