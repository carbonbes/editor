<template>
  <BaseButton
    class="py-1.5 px-2.5 w-full h-10 rounded-lg hover:bg-gray-100 active:bg-gray-300/75 data-[state=open]:bg-blue-50"
  >
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import { BaseButton } from '~/components/Shared/Base'
</script>