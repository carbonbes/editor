<template>
  <BottomsheetRoot
    v-model:open="open"
    :snap-points="[0.5, 1]"
    :active-snap-point="0.5"
    :fade-from-index="0"
  >
    <slot />
  </BottomsheetRoot>
</template>

<script setup lang="ts">
import { BottomsheetRoot } from '~/components/Shared/Bottomsheet'

const { directionTrigger, threshold } = defineProps<{
  directionTrigger: 'left' | 'right'
  threshold: number
}>()

const open = defineModel<boolean>('open', { default: false })

function isExpectedDirection(directionX: number) {
  return directionTrigger === 'left' ? directionX === -1 : directionX === 1
}

function handleSwipeEnd({
  direction: [directionX],
  movement: [movementX],
}: UseEditorNodesSwipeTrackingSwipeState) {
  if (isExpectedDirection(directionX) && Math.abs(movementX) >= threshold) {
    open.value = true
  }
}

const { node } = useEditorNodesSwipeTracking({
  bound: threshold,
  handlers: {
    onSwipeEnd: handleSwipeEnd,
  },
})

const { setFocusedNode } = useEditorFocusedNode()

watch(open, (open) => {
  setFocusedNode(open ? node.value : null)
})
</script>
