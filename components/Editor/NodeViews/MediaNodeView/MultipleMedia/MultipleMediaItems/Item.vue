<template>
  <div class="relative">
    <BaseInnerBorder class="bg-white rounded-xl overflow-hidden">
      <Media :media />
    </BaseInnerBorder>

    <BaseButton
      class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 p-0.75 bg-white ring-1 ring-gray-200/50 rounded-full"
      @click="remove(media.id)"
    >
      <CrossIcon class="text-gray-500" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { BaseButton, BaseInnerBorder } from '~/components/Shared/Base'
import Media from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaItems/Media.vue'
import { CrossIcon } from '~/components/Shared/Icons'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'
import { injectMediaNodeViewContext } from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'

const { media } = defineProps<{ media: MediaItem }>()

const { remove } = injectMediaNodeViewContext()
</script>
