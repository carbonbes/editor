<template>
  <Primitive
    ref="bottomsheetScrollableContent"
    class="overflow-y-auto"
    :class="scrollableContentClasses"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { injectBottomsheetContext } from './BottomsheetRoot.vue'

const bottomsheetScrollableContent = useTemplateRef<HTMLElement>(
  'bottomsheetScrollableContent',
)

const { activeSnapPoint, contentScrollOffset } = injectBottomsheetContext()

const { isSwiping, direction: swipeDirection } = usePointerSwipe(
  bottomsheetScrollableContent,
  { threshold: 0 },
)

const { y } = useScroll(bottomsheetScrollableContent)

watch(
  y,
  (scrollOffset) => {
    contentScrollOffset.value = scrollOffset
  },
  { immediate: true },
)

const scrollableContentClasses = computed(() => ({
  '!overflow-y-hidden':
    activeSnapPoint.value !== 1 ||
    (activeSnapPoint.value === 1 &&
      y.value === 0 &&
      isSwiping.value &&
      swipeDirection.value === 'down'),

  '!overflow-y-auto':
    activeSnapPoint.value === 1 &&
    y.value === 0 &&
    isSwiping.value &&
    swipeDirection.value === 'up',
}))
</script>
