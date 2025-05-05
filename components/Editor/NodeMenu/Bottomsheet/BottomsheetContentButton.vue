<template>
  <div class="h-12 flex items-center justify-between" @click="onClick">
    <div class="flex items-center gap-3 [&>.iconify]:!size-6">
      <slot />
    </div>

    <Icon v-if="sub" name="tabler:chevron-right" class="!size-5" />
  </div>
</template>

<script setup lang="ts">
import { injectDrawerContext } from '~/components/Shared/Drawer/DrawerRoot.vue'

const { ignoreClose, sub } = defineProps<{ ignoreClose?: boolean, sub?: boolean }>()

const { open } = injectDrawerContext()

function onClick() {
  if (ignoreClose) return

  open.value = false
}
</script>
