<template>
  <PhotoSwipeContainer
    gallery=".media-items"
    child-selector="a"
    class="media-items"
  >
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
  </PhotoSwipeContainer>
</template>

<script setup lang="ts">
import { PhotoSwipeContainer } from '~/components/Shared/PhotoSwipe'
import Draggable from 'vuedraggable'
import Item from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/Items/Item.vue'
import type { MediaItem } from '~/tiptap-extensions/mediaNode'

const media = defineModel<MediaItem[]>()

const { isDragging } = useEditorMediaNodeViewItemDragging()

function handleTouchStart() {
  isDragging.value = true
}

function handleTouchEnd() {
  isDragging.value = false
}
</script>
