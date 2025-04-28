<template>
  <div class="flex items-center justify-between">
    <button class="h-12 flex items-center gap-4 [&>.iconify]:!size-7 " @click="onClick">
      <slot />
    </button>

    <Icon v-if="nextPageTrigger" name="tabler:chevron-right" class="!size-5" />
  </div>
</template>

<script setup lang="ts">
import { injectDrawerContext } from '~/components/Shared/Drawer/DrawerRoot.vue'

const { nextPageTrigger, preventClose } = defineProps<{ nextPageTrigger?: boolean, preventClose?: boolean }>()

const { open } = injectDrawerContext()

function onClick() {
  if (preventClose) return

  open.value = false
}
</script>
