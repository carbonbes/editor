<template>
  <slot />
</template>

<script setup lang="ts">
import { injectLightboxContext } from './LightboxRoot.vue'

const { open } = injectLightboxContext()

const slots = useSlots()

function init() {
  const vnodes = slots.default?.()

  if (!vnodes) return

  vnodes.forEach((vnode) => {
    const el = vnode.el as HTMLElement | null

    if (!el) return

    useEventListener(el, 'click', () => {
      open.value = true
    })
  })
}

onMounted(init)
</script>
