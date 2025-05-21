<template>
  <div class="flex items-center" :class="{ shadow: contentScrollOffset > 0 }">
    <slot />

    <BottomsheetClose
      as="button"
      class="ml-auto p-1.5 flex items-center justify-center bg-gray-200/50 rounded-full"
      data-testid="bottomsheet-content-header/close-button"
    >
      <CrossIcon class="size-5" />
    </BottomsheetClose>
  </div>
</template>

<script setup lang="ts">
import { BottomsheetClose } from '~/components/Shared/Bottomsheet'
import { injectBottomsheetContext } from './BottomsheetRoot.vue'
import { CrossIcon } from '~/components/Shared/Icons'

const { contentScrollOffset } = injectBottomsheetContext()
</script>
