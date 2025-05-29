<template>
  <div class="relative">
    <BaseInnerBorder class="bg-white rounded-xl overflow-hidden">
      <Image
        v-if="isImage"
        :src="media.src"
        class="w-20 aspect-square object-cover"
      />

      <VideoThumbnail
        v-else
        :thumbnail="media.meta.thumbnail as string"
        class="w-20 aspect-square bg-cover"
      />
    </BaseInnerBorder>

    <button
      class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 p-0.75 bg-white ring-1 ring-gray-200/50 rounded-full cursor-pointer"
    >
      <CrossIcon class="text-gray-500" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Image from '~/components/Shared/Image.vue'
import VideoThumbnail from '~/components/Shared/Video/VideoThumbnail.vue'
import { CrossIcon } from '~/components/Shared/Icons'
import BaseInnerBorder from '~/components/Shared/Base/BaseInnerBorder.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
