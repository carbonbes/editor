<template>
  <BaseMediaNodeView class="p-4 flex flex-col gap-8">
    <MultipleMediaItems :media />
    <MultipleMediaControls />
  </BaseMediaNodeView>
</template>

<script setup lang="ts">
import BaseMediaNodeView from '~/components/Editor/NodeViews/MediaNodeView/BaseMediaNodeView.vue'
import MultipleMediaItems from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaItems/MultipleMediaItems.vue'
import MultipleMediaControls from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaControls/MultipleMediaControls.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem[] }>()
</script>
