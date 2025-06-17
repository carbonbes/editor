<template>
  <Draggable
    v-model="media"
    item-key="id"
    :animation="200"
    class="flex flex-wrap gap-4"
  >
    <template #item="{ element }">
      <Item
        :media="element"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      />
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import Item from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaItems/Item.vue'
import Draggable from 'vuedraggable'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const props = defineProps<{ media: MediaItem[] }>()

const media = ref(props.media)

const { isDragging } = useEditorMediaNodeViewItemDragging()

function handleTouchStart() {
  isDragging.value = true
}

function handleTouchEnd() {
  isDragging.value = false
}
</script>
