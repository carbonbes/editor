<template>
  <NodeViewWrapper>
    <div class="my-8 text-black">
      <EmptyMedia v-if="!media" />
      <SingleMedia v-else-if="singleMedia" :media="singleMedia" />
      <MultipleMedia v-else-if="multipleMedia" :media="multipleMedia" />
    </div>
  </NodeViewWrapper>

  <ClipboardDialog v-model:open="clipboardDialogOpen" />
</template>

<script lang="ts" setup>
import { createContext } from 'reka-ui'
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import {
  EmptyMedia,
  SingleMedia,
  MultipleMedia,
  ClipboardDialog
} from '~/components/Editor/NodeViews/MediaNodeView'
import {
  getMediaItemsFromFiles,
  type MediaItem,
  type MediaItemId,
} from '~/tiptap-extensions/mediaNode'

const { node } = defineProps<NodeViewProps>()

const media = ref((node.attrs.media as MediaItem[]) || null)

const singleMedia = computed(
  () => (media.value && media.value.length === 1 && media.value[0]) || null,
)

const multipleMedia = computed(
  () => (media.value && media.value.length > 1 && media.value) || null,
)

async function add(files: File[]) {
  const items = await getMediaItemsFromFiles(files)
  if (!items) return

  if (!media.value) {
    media.value = []
    media.value.push(...items)

    return
  }

  media.value.push(...items)
}

function remove(id: MediaItemId) {
  const index = media.value?.findIndex((item) => item.id === id)
  if (index === undefined || index === -1) return

  media.value?.splice(index, 1)
}

const clipboardDialogOpen = ref(false)

provideMediaNodeViewContext({ add, remove, clipboardDialogOpen })
</script>

<script lang="ts">
export interface MediaNodeViewContext {
  add: (files: File[]) => void
  remove: (id: MediaItemId) => void
  clipboardDialogOpen: Ref<boolean>
}

export const [injectMediaNodeViewContext, provideMediaNodeViewContext] =
  createContext<MediaNodeViewContext>('MediaNodeView')
</script>
