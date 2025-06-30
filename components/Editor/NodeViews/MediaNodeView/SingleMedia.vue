<template>
  <BaseNodeView as-child>
    <BaseInnerBorder
      class="relative flex items-center justify-center aspect-video"
    >
      <DropdownMenuTrigger />
      <Media :media />
    </BaseInnerBorder>
  </BaseNodeView>
</template>

<script setup lang="ts">
import BaseNodeView from '~/components/Editor/NodeViews/MediaNodeView/Shared/BaseNodeView.vue'
import { BaseInnerBorder } from '~/components/Shared/Base'
import DropdownMenuTrigger from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/DropdownTrigger.vue'
import Media from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/Media.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem }>()
</script>
