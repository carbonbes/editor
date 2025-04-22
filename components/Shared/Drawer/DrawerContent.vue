<template>
  <Primitive
    ref="drawerScrollableContent"
    as-child
    class="overflow-y-auto"
    :class="scrollableContentClasses"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { injectDrawerContext } from './Drawer.vue'
import { usePointerSwipe, useScroll } from '@vueuse/core'

const drawerScrollableContent = useTemplateRef<HTMLElement>('drawerScrollableContent')

const { activeSnapPoint, YScrollOffset } = injectDrawerContext()

const { isSwiping, direction: swipeDirection } = usePointerSwipe(
  drawerScrollableContent,
  { threshold: 0 },
)

const { y } = useScroll(drawerScrollableContent)

watch(y, (y) => {
  YScrollOffset.value = y
}, { immediate: true })

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
