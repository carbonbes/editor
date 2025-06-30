<template>
  <Image
    v-if="isImage"
    :src="media.src"
    class="w-18 aspect-square object-cover"
  />

  <VideoThumbnail
    v-else
    :thumbnail="media.meta.thumbnail!"
    class="w-18 aspect-square object-cover"
  />
</template>

<script lang="ts" setup>
import { Image, VideoThumbnail } from '~/components/Shared/Media'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
