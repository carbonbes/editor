<template>
  <Icon :name="`tabler:chevron-${direction}`" />
</template>

<script setup lang="ts">
const props = defineProps<{
  up?: boolean
  down?: boolean
  left?: boolean
  right?: boolean
}>()

const direction = computed(
  () => Object.entries(props).find(([_, value]) => value)?.[0] ?? 'right',
)
</script>
