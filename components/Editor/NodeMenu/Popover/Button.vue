<template>
  <BaseFloating
    as-child
    class="p-1.5 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100"
    :class="{ '!bg-gray-200': active }"
  >
    <button>
      <slot />
    </button>
  </BaseFloating>
</template>

<script setup lang="ts">
import BaseFloating from '~/components/Shared/BaseFloating.vue'

const { active } = defineProps<{ active: boolean }>()
</script>
