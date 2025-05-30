<template>
  <Image
    v-if="isImage"
    :src="media.src"
    class="w-18 aspect-square object-cover"
    data-multiple-media-item
  />

  <VideoThumbnail
    v-else
    :thumbnail="media.meta.thumbnail as string"
    class="w-18 aspect-square bg-cover"
    data-multiple-media-item
  />
</template>

<script lang="ts" setup>
import Image from '~/components/Shared/Image.vue'
import VideoThumbnail from '~/components/Shared/Video/VideoThumbnail.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
