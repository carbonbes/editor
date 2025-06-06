<template>
  <LightboxNavigationControl @click="handleClick">
    <slot />
  </LightboxNavigationControl>
</template>

<script setup lang="ts">
import LightboxNavigationControl from '~/components/Shared/Lightbox/LightboxNavigationControl.vue'
import { injectLightboxContext } from './'

const { swiper } = injectLightboxContext()

function handleClick() {
  if (!swiper.value) return

  swiper.value.slidePrev()
}
</script>
