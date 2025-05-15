<template>
  <Icon :name="`tabler:h-${level}`" />
</template>

<script lang="ts" setup>
const props = defineProps<{ '2'?: boolean; '3'?: boolean }>()

const level = computed(
  () => Object.entries(props).find(([_, value]) => value)?.[0] ?? 3,
)
</script>
