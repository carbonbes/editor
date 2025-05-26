<template>
  <img v-bind="props" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ src: string; alt?: string }>(), {
  alt: '',
})
</script>
