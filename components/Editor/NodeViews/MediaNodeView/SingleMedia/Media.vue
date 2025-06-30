<template>
  <Image
    v-if="isImage"
    :src="media.src"
    class="h-full max-h-fit object-contain"
  />

  <Video
    v-else
    :src="media.src"
    controls
    class="size-full"
  />
</template>

<script lang="ts" setup>
import { Image, Video } from '~/components/Shared/Media'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
