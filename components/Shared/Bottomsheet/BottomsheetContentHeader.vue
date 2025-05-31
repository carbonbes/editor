<template>
  <div
    class="flex items-center justify-between"
    :class="{ shadow: contentScrollOffset > 0 }"
  >
    <slot />

    <BottomsheetClose as-child data-testid="bottomsheet-content-header/close-button">
      <ModalClose class="ml-8" />
    </BottomsheetClose>
  </div>
</template>

<script setup lang="ts">
import { BottomsheetClose } from '~/components/Shared/Bottomsheet'
import { ModalClose } from '~/components/Shared/Modal'
import { injectBottomsheetContext } from './BottomsheetRoot.vue'

const { contentScrollOffset } = injectBottomsheetContext()
</script>
