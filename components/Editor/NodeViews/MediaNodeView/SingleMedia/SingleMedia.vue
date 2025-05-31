<template>
  <BaseMediaNodeView as-child>
    <BaseInnerBorder
      class="relative min-h-[100px] flex items-center justify-center aspect-video"
    >
      <DropdownMenuTrigger />

      <Media :media />
    </BaseInnerBorder>
  </BaseMediaNodeView>
</template>

<script setup lang="ts">
import BaseMediaNodeView from '~/components/Editor/NodeViews/MediaNodeView/BaseMediaNodeView.vue'
import { BaseInnerBorder } from '~/components/Shared/Base'
import DropdownMenuTrigger from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/DropdownTrigger.vue'
import Media from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/Media.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()
</script>
