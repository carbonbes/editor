<template>
  <BottomsheetContentButton ignore-close>
    <slot />

    <div class="ml-auto flex items-center">
      <ChevronIcon right class="ml-8 !size-5" />
    </div>
  </BottomsheetContentButton>
</template>

<script setup lang="ts">
import { BottomsheetContentButton } from '~/components/Editor/NodeMenu/Bottomsheet'
import { ChevronIcon } from '~/components/Shared/Icons'
</script>
