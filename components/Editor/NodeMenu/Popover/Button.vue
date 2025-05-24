<template>
  <BaseFloating
    as="button"
    class="p-1.5 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100"
    :class="{ '!bg-gray-200': active }"
  >
    <slot />
  </BaseFloating>
</template>

<script setup lang="ts">
import { BaseFloating } from '~/components/Shared/Base'

const { active } = defineProps<{ active: boolean }>()
</script>
