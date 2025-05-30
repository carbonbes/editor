<template>
  <Image
    v-if="isImage"
    :src="media.src"
    class="h-full max-h-fit object-contain"
  />

  <Video
    v-else
    :src="media.src"
    :thumbnail="media.meta.thumbnail as string"
    class="size-full"
  />
</template>

<script lang="ts" setup>
import Image from '~/components/Shared/Image.vue'
import Video from '~/components/Shared/Video/Video.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
