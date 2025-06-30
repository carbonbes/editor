<template>
  <Image :src="thumbnail" />
</template>

<script setup lang="ts">
import Image from '~/components/Shared/Media/Image.vue'

export interface VideoThumbnailProps {
  thumbnail: string
}

const { thumbnail } = defineProps<VideoThumbnailProps>()
</script>