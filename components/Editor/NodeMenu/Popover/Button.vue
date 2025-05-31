<template>
  <BaseFloating
    as="button"
    class="p-1.5 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 data-[state='open']:bg-gray-200"
  >
    <slot />
  </BaseFloating>
</template>

<script setup lang="ts">
import { BaseFloating } from '~/components/Shared/Base'
</script>
