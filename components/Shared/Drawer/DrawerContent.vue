<template>
  <Primitive
    v-bind="props"
    ref="drawerScrollableContent"
    class="overflow-y-auto"
    :class="scrollableContentClasses"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { usePointerSwipe, useScroll } from '@vueuse/core'
import { injectDrawerContext } from './Drawer.vue'

const props = withDefaults(
  defineProps<PrimitiveProps>(),
  {
    asChild: true,
  },
)

const drawerScrollableContent = useTemplateRef<HTMLElement>('drawerScrollableContent')

const { activeSnapPoint } = injectDrawerContext()

const { isSwiping, direction: swipeDirection } = usePointerSwipe(
  drawerScrollableContent,
  { threshold: 0 },
)

const { y } = useScroll(drawerScrollableContent)

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
