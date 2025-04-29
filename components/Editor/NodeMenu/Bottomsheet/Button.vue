<template>
  <button class="h-12 flex items-center justify-between" @click="onClick">
    <div class="flex items-center gap-4 [&>.iconify]:!size-7 ">
      <slot />
    </div>

    <Icon v-if="nextPageTrigger" name="tabler:chevron-right" class="!size-5" />
  </button>
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
