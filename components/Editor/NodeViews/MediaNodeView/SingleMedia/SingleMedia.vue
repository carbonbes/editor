<template>
  <div
    class="relative min-h-[100px] flex items-center justify-center bg-gray-100"
  >
    <div class="absolute top-0 right-0 m-2 z-[1]">
      <NodeActionsListDropdownTrigger />
    </div>

    <Image v-if="isImage" :src="media.src" class="h-full max-h-[300px]" />

    <Video
      v-else
      :src="media.src"
      :thumbnail="media.meta.thumbnail as string"
      class="size-full aspect-video"
    />
  </div>
</template>

<script setup lang="ts">
import NodeActionsListDropdownTrigger from './NodeActionsListDropdownTrigger.vue'
import Image from '~/components/Shared/Image.vue'
import Video from '~/components/Shared/Video/Video.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()

const isImage = computed(() => media.meta.mime.startsWith('image/'))
</script>
