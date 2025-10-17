<template>
  <div class="flex items-center gap-1">
    <div
      v-for="(_, i) in 3"
      :key="i"
      class="rounded-full animate-loader nth-2:animation-delay-100 nth-3:animation-delay-200"
      :class="[size, color]"
    />
  </div>
</template>

<script setup lang="ts">
const { size = 'size-2', color = 'bg-gray-500' } = defineProps<{
  size?: string
  color?: string
}>()
</script>
