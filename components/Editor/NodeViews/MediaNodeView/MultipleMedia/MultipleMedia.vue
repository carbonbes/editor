<template>
  <div class="p-4 flex flex-col bg-gray-100">
    <div class="flex flex-wrap gap-4">
      <MultipleMediaItem v-for="(item, i) in media" :key="i" :media="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MultipleMediaItem from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaItem.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const { media } = defineProps<{ media: MediaItem[] }>()
</script>
