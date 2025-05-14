<template>
  <TransitionView ref="transitionViewRef" :index>
    <slot :previous="transitionViewRef.previous" />
  </TransitionView>
</template>

<script setup lang="ts">
import TransitionView from '~/components/Shared/Transitions/TransitionView.vue'

const { index } = defineProps<{ index: number }>()

const transitionViewRef = useTemplateRef('transitionViewRef')
</script>
