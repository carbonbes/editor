<template>
  <div class="relative flex justify-center">
    <div class="absolute top-0 right-0 m-2 z-[1]">
      <ControlsDropdownTrigger />
    </div>

    <Media :media image-class="max-h-80" video-class="aspect-video" />
  </div>
</template>

<script setup lang="ts">
import ControlsDropdownTrigger from './ControlsDropdownTrigger.vue'
import Media from '../Media.vue'

const { media } = defineProps<{ media: string }>()
</script>
