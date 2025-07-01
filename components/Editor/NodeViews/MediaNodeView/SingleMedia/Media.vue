<template>
  <PhotoSwipeContainer
    v-if="isImage"
    gallery=".media-item"
    class="h-full max-h-fit media-item"
  >
    <Image :src="media.src" class="h-full max-h-fit object-contain" />
  </PhotoSwipeContainer>

  <VideoPlayer
    v-else
    :src="media.src"
    :thumbnail="media.meta.thumbnail!"
    auto-play
    muted
    plays-inline
    controls
    class="size-full object-contain cursor-pointer"
  />
</template>

<script lang="ts" setup>
import { PhotoSwipeContainer } from '~/components/Shared/PhotoSwipe'
import Image from '~/components/Editor/NodeViews/MediaNodeView/Shared/Image.vue'
import { VideoPlayer } from '~/components/Shared/VideoPlayer'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
