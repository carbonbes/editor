<template>
  <TransitionBetween v-model:index="page">
    <slot />
  </TransitionBetween>
</template>

<script setup lang="ts">
import TransitionBetween from '~/components/Shared/Transitions/TransitionBetween.vue'

const page = defineModel<number>('page', { default: 1 })
</script>
