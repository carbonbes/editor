<template>
  <Image
    v-if="isImage"
    :src="media.src"
    class="w-20 aspect-square object-cover"
  />

  <VideoPlayerThumbnail
    v-else
    :src="media.src"
    :thumbnail="media.meta.thumbnail!"
    class="w-20 aspect-square object-cover"
  />
</template>

<script lang="ts" setup>
import Image from '~/components/Editor/NodeViews/MediaNodeView/Shared/Image.vue'
import VideoPlayerThumbnail from '~/components/Editor/NodeViews/MediaNodeView/Shared/VideoPlayerThumbnail.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
