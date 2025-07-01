<template>
  <div class="relative flex items-center justify-center">
    <Image :src="thumbnail" v-bind="$attrs" />

    <div class="absolute p-2.5 bg-black/50 rounded-full backdrop-blur">
      <PlayerPlayIcon class="!size-8 text-white [&>path]:fill-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '~/components/Shared/Media/Image.vue'
import { PlayerPlayIcon } from '~/components/Shared/Icons'

export interface VideoPlayerThumbnailProps {
  thumbnail: string
}

const { thumbnail } = defineProps<VideoPlayerThumbnailProps>()
</script>
