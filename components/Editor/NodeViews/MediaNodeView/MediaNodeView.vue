<template>
  <NodeViewWrapper class="not-first:mt-8 not-last:mb-8 text-black">
    <EmptyMedia v-if="isEmptyMedia" />
    <SingleMedia v-else-if="isSingleMedia" :media="media[0]" />
    <MultipleMedia v-else-if="isMultipleMedia" v-model="media" />
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { createContext } from 'reka-ui'
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import {
  EmptyMedia,
  SingleMedia,
  MultipleMedia,
} from '~/components/Editor/NodeViews/MediaNodeView'
import {
  getMediaItemsFromFiles,
  type MediaItem,
  type MediaItemId,
} from '~/tiptap-extensions/mediaNode'

const { node, updateAttributes } = defineProps<NodeViewProps>()

const media = ref((node.attrs.media as MediaItem[]) ?? [])

watch(
  media,
  (media) => {
    updateAttributes({ media })
  },
  { deep: true },
)

const isEmptyMedia = computed(() => !media.value.length)

const isSingleMedia = computed(
  () => !isEmptyMedia.value && media.value.length === 1,
)

const isMultipleMedia = computed(
  () => !isEmptyMedia.value && media.value.length > 1,
)

async function add(files: File[]) {
  const items = await getMediaItemsFromFiles(files)
  if (!items) return

  media.value.push(...items)
}

function remove(id: MediaItemId) {
  const index = media.value.findIndex((item) => item.id === id)
  if (index === -1) return

  media.value.splice(index, 1)
}

provideMediaNodeViewContext({ add, remove })
</script>

<script lang="ts">
export interface MediaNodeViewContext {
  add: (files: File[]) => void
  remove: (id: MediaItemId) => void
}

export const [injectMediaNodeViewContext, provideMediaNodeViewContext] =
  createContext<MediaNodeViewContext>('MediaNodeView')
</script>
