<template>
  <VideoThumbnail
    v-if="!isPlaying"
    :thumbnail="props.thumbnail"
    @click="isPlaying = true"
  />
  <video v-else v-bind="props" />
</template>

<script setup lang="ts">
import VideoThumbnail from '~/components/Shared/Video/VideoThumbnail.vue'

const props = withDefaults(
  defineProps<{
    src: string
    thumbnail: string
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
