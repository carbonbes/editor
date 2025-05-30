<template>
  <div class="relative">
    <BaseInnerBorder class="bg-white rounded-xl overflow-hidden">
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
    </BaseInnerBorder>

    <BaseButton
      as="button"
      class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 p-0.75 bg-white ring-1 ring-gray-200/50 rounded-full"
      @click="remove(media.id)"
    >
      <CrossIcon class="text-gray-500" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import Image from '~/components/Shared/Image.vue'
import VideoThumbnail from '~/components/Shared/Video/VideoThumbnail.vue'
import { CrossIcon } from '~/components/Shared/Icons'
import BaseInnerBorder from '~/components/Shared/Base/BaseInnerBorder.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'
import { injectMediaNodeViewContext } from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'
import BaseButton from '~/components/Shared/Base/BaseButton.vue'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))

const { remove } = injectMediaNodeViewContext()
</script>
