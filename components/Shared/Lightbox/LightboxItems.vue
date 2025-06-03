<template>
  <swiper-container
    ref="swiperContainerRef"
    :allow-touch-move="isTouch"
    class="absolute inset-0"
  >
    <slot />
  </swiper-container>
</template>

<script setup lang="ts">
import { injectLightboxContext } from './LightboxRoot.vue'

const { swiperContainerRef } = injectLightboxContext()

const { isTouch } = useDevice()
</script>
