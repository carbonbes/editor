<template>
  <Icon :name="`tabler-${type}`" />
</template>

<script setup lang="ts">
const props = defineProps<{
  bold?: boolean
  italic?: boolean
  strikethrough?: boolean
  code?: boolean
}>()

const type = computed(
  () => Object.entries(props).find(([_, value]) => value)?.[0] ?? 'bold',
)
</script>
