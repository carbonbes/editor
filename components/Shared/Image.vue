<template>
  <img :src :alt>
</template>

<script setup lang="ts">
const { src, alt } = withDefaults(
  defineProps<{ src: string; alt?: string }>(),
  {
    alt: '',
  },
)
</script>
