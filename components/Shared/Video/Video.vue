<template>
  <div class="size-full">
    <VideoThumbnail
      v-if="!isPlaying"
      :media="props.src"
      class="size-full"
      @click="isPlaying = true"
    />
    <video v-else v-bind="props" />
  </div>
</template>

<script setup lang="ts">
import VideoThumbnail from '~/components/Shared/Video/VideoThumbnail.vue'

const props = withDefaults(
  defineProps<{
    src: string
    controls?: boolean
    muted?: boolean
    playsInline?: boolean
    autoPlay?: boolean
  }>(),
  {
    controls: true,
    muted: true,
    playsInline: true,
    autoplay: true,
  },
)

const isPlaying = ref(false)
</script>
