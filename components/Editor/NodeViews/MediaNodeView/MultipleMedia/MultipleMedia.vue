<template>
  <div class="p-4 flex flex-col gap-8 bg-gray-100 rounded-2xl">
    <MultipleMediaItems :media />
    <MultipleMediaControls />
  </div>
</template>

<script setup lang="ts">
import type { MediaItem } from '~/tiptap-extensions/mediaNode'
import MultipleMediaItems from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaItems.vue'
import MultipleMediaControls from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaControls.vue'

const { media } = defineProps<{ media: MediaItem[] }>()
</script>
