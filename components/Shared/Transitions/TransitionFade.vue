<template>
  <Transition
    :style="`--transition-fade-duration: ${duration}ms`"
    :enter-active-class="enterActiveLeaveClass"
    :leave-active-class="enterActiveLeaveClass"
    :enter-from-class="enterFromLeaveToClass"
    :leave-to-class="enterFromLeaveToClass"
    :enter-to-class="enterToLeaveFromClass"
    :leave-from-class="enterToLeaveFromClass"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import type { TransitionFadeProps } from '~/components/Shared/Transitions'

const { duration = 250 } = defineProps<TransitionFadeProps>()

const enterActiveLeaveClass =
  'transition-opacity duration-(--transition-fade-duration)'

const enterFromLeaveToClass = 'opacity-0'
const enterToLeaveFromClass = 'opacity-100'
</script>
