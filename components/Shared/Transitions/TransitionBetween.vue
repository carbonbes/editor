<template>
  <div class="relative" :style="`--transition-between-duration: ${duration}ms`">
    <Transition
      :enter-active-class="enterLeaveActiveClass"
      :leave-active-class="enterLeaveActiveClass"
      :enter-to-class="enterToLeaveFromClass"
      :leave-from-class="enterToLeaveFromClass"
      :enter-from-class
      :leave-to-class
    >
      <slot />
    </Transition>
  </div>
</template>

<script setup lang="ts">
export interface TransitionBetweenProps {
  index: number
  duration?: number
}

const { index, duration = 250 } = defineProps<TransitionBetweenProps>()

const direction = ref<-1 | 1>()

watch(
  () => index,
  (newIndex, oldIndex) => {
    direction.value = newIndex > oldIndex ? 1 : -1
  },
)

const enterLeaveActiveClass =
  'absolute transition-[translate,opacity] duration-(--transition-between-duration) ease-in-out'

const enterToLeaveFromClass = 'translate-x-0 opacity-100'

const enterFromClass = computed(() =>
  direction.value === 1
    ? 'translate-x-full opacity-0'
    : '-translate-x-full opacity-0',
)

const leaveToClass = computed(() =>
  direction.value === 1
    ? '-translate-x-full opacity-0'
    : 'translate-x-full opacity-0',
)
</script>
