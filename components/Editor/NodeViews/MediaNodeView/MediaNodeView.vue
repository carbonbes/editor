<template>
  <NodeViewWrapper>
    <div class="rounded-xl overflow-hidden">
      <EmptyMedia v-if="!media" />
      <SingleMedia v-else-if="singleMedia" :single-media />
      <MultipleMedia v-else-if="multipleMedia" :multiple-media />
    </div>
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { createContext } from 'reka-ui'
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import EmptyMedia from '~/components/Editor/NodeViews/MediaNodeView/EmptyMedia.vue'
import { SingleMedia } from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia'
import MultipleMedia from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMedia.vue'

const { node } = defineProps<NodeViewProps>()

const media = ref<string[] | null>(
  node.attrs.media ? Object.assign([], node.attrs.media) : null
)

const singleMedia = computed<string | null>(
  () => (media.value && media.value.length === 1 && media.value[0]) || null,
)

const multipleMedia = computed<string[] | null>(
  () => (media.value && media.value.length > 1 && media.value) || null,
)

provideMediaNodeViewContext({ media })
</script>

<script lang="ts">
export interface MediaNodeViewContext {
  media: Ref<string[] | null>
}

export const [injectMediaNodeViewContext, provideMediaNodeViewContext] =
  createContext<MediaNodeViewContext>('MediaNodeView')
</script>
