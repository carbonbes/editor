<template>
  <Draggable
    v-model="media"
    item-key="id"
    :animation="200"
    class="flex flex-wrap gap-4"
  >
    <template #item="{ element }">
      <MultipleMediaItem :media="element" />
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import MultipleMediaItem from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaItem.vue'
import Draggable from 'vuedraggable'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const props = defineProps<{ media: MediaItem[] }>()

const media = ref(props.media)
</script>
