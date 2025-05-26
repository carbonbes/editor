<template>
  <NodeViewWrapper contenteditable="false">
    <div class="rounded-xl overflow-hidden">
      <EmptyMedia v-if="isEmpty" />

      <div v-else class="bg-gray-100">
        <SingleMedia v-if="singleMedia" :media="singleMedia" />
      </div>
    </div>
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import EmptyMedia from '~/components/Editor/NodeViews/MediaNodeView/EmptyMedia.vue'
import SingleMedia from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/SingleMedia.vue'

const props = defineProps<NodeViewProps>()

const node = computed(() => props.node)
const attrs = computed(() => node.value.attrs)
const isEmpty = computed(() => !attrs.value.media)

const singleMedia = computed(
  () =>
    !isEmpty.value && attrs.value.media.length === 1 && attrs.value.media[0],
)
</script>
