<template>
  <div class="relative" :style="`--transition-between-duration: ${duration}ms`">
    <Transition
      enter-active-class="absolute transition-[translate,opacity] duration-(--transition-between-duration)"
      :enter-from-class
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="absolute transition-[translate,opacity] duration-(--transition-between-duration)"
      leave-from-class="translate-x-0 opacity-100"
      :leave-to-class
      @before-enter="emits('beforeEnter')"
      @enter="emits('enter')"
      @after-enter="emits('afterEnter')"
      @enter-cancelled="emits('enterCancelled')"
      @before-leave="emits('beforeLeave')"
      @leave="emits('leave')"
      @after-leave="emits('afterLeave')"
      @leave-cancelled="emits('leaveCancelled')"
    >
      <slot />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { duration = 250 } = defineProps<{
  duration?: number
}>()

const emits = defineEmits([
  'beforeEnter',
  'enter',
  'afterEnter',
  'enterCancelled',
  'beforeLeave',
  'leave',
  'afterLeave',
  'leaveCancelled',
])

const index = defineModel<number>('index', { default: 0 })

const direction = ref<-1 | 1>()

watch(
  index,
  (newIndex, oldIndex) => {
    if (newIndex > oldIndex) direction.value = 1
    else direction.value = -1
  },
)

const enterFromClass = computed(() =>
  direction.value === 1 ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0',
)

const leaveToClass = computed(() =>
  direction.value === 1 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0',
)
</script>
