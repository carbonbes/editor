<template>
  <TransitionFade>
    <div v-if="open" class="absolute inset-0">
      <slot />
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
import { TransitionFade } from '~/components/Shared/Transitions'
import { promiseTimeout } from '@vueuse/core'

const open = ref(true)

function setOpen(value: boolean) {
  open.value = value
}

const { isTouch } = useDevice()

onMounted(async () => {
  if (isTouch.value) {
    await promiseTimeout(2000)
    setOpen(false)
  }
})
</script>
