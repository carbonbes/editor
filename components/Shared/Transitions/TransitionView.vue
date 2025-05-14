<template>
  <TransitionBetween :index :duration>
    <Component :is="activeNode" :key="index" />
  </TransitionBetween>
</template>

<script setup lang="ts">
import TransitionBetween, {
  type TransitionBetweenProps,
} from '~/components/Shared/Transitions/TransitionBetween.vue'

export interface TransitionViewProps {
  initialIndex?: number
  duration?: TransitionBetweenProps['duration']
}

const { initialIndex = 0, duration } = defineProps<TransitionViewProps>()

const slots = useSlots()

const index = ref(initialIndex)
const nodes = ref<VNode[]>([])

onMounted(() => {
  nodes.value = slots.default?.() || []
})

const activeNode = computed(() => nodes.value[index.value])

function previous() {
  if (index.value > 0) index.value--
}

function next() {
  if (index.value < nodes.value.length - 1) {
    index.value++
  }
}

defineExpose({ index, previous, next })
</script>
