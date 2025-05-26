<template>
  <video v-bind="props" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    controls?: boolean
    muted?: boolean
    playsInline?: boolean
  }>(),
  {
    controls: true,
    muted: true,
    playsInline: true,
  },
)
</script>
