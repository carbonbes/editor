<template>
  <Image
    v-if="isImage"
    :src="media.src"
    class="h-full max-h-fit object-contain image"
  />

  <Video
    v-else
    :src="media.src"
    controls
    class="size-full"
  />
</template>

<script lang="ts" setup>
import Image from '~/components/Editor/NodeViews/MediaNodeView/Shared/Image.vue'
import { Video } from '~/components/Shared/Media'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))

usePhotoSwipe({ gallery: '.image' })
</script>
