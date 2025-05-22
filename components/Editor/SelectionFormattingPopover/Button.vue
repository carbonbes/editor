<template>
  <button
    class="p-1.5 flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-100 [&>.iconify]:!size-5"
    :class="{ 'text-blue-500 !bg-blue-50': active }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const { active } = defineProps<{ active: boolean }>()
</script>
