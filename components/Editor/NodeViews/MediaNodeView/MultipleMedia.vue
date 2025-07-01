<template>
  <BaseNodeView class="p-4 flex flex-col gap-8">
    <MultipleMediaItems v-model="media" />
    <MultipleMediaControls />
  </BaseNodeView>
</template>

<script setup lang="ts">
import BaseNodeView from '~/components/Editor/NodeViews/MediaNodeView/Shared/BaseNodeView.vue'
import MultipleMediaItems from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/Items.vue'
import MultipleMediaControls from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/Controls.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const media = defineModel<MediaItem[]>()
</script>
