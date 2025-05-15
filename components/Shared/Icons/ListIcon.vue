<template>
  <Icon :name="`tabler:${type}`" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  bullet?: boolean
  ordered?: boolean
}>()

const type = computed(() => {
  if (props.bullet) return 'list'
  if (props.ordered) return 'list-numbers'

  return 'list-numbers'
})
</script>
