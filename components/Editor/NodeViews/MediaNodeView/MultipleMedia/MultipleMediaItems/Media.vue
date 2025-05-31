<template>
  <Image
    v-if="isImage"
    :src="media.src"
    class="w-18 aspect-square object-cover"
  />

  <VideoThumbnail
    v-else
    :thumbnail="media.meta.thumbnail as string"
    class="w-18 aspect-square bg-cover"
  />
</template>

<script lang="ts" setup>
import Image from '~/components/Shared/Image.vue'
import VideoThumbnail from '~/components/Shared/Video/VideoThumbnail.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
