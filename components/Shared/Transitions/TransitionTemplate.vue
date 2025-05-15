<template>
  <TransitionBetween v-bind="props">
    <Component :is="activeNode" :key="props.index" />
  </TransitionBetween>
</template>

<script setup lang="ts">
import TransitionBetween, {
  type TransitionBetweenProps,
} from '~/components/Shared/Transitions/TransitionBetween.vue'

const props = defineProps<TransitionBetweenProps>()

const slots = useSlots()

const nodes = ref<VNode[]>([])

onMounted(() => {
  nodes.value = slots.default?.() || []
})

const activeNode = computed(() => nodes.value[props.index])

watch(activeNode, (node) => {
  console.log(node)
})
</script>
