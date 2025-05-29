<template>
  <NodeViewWrapper>
    <div class="rounded-xl overflow-hidden">
      <EmptyMedia v-if="!media" />
      <SingleMedia v-else-if="singleMedia" :media="singleMedia" />
      <MultipleMedia v-else-if="multipleMedia" :media="multipleMedia" />
    </div>
  </NodeViewWrapper>

  <ClipboardMediaInsertionDialog
    v-model:open="clipboardMediaInsertionDialogOpen"
  />
</template>

<script lang="ts" setup>
import { createContext } from 'reka-ui'
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import EmptyMedia from '~/components/Editor/NodeViews/MediaNodeView/EmptyMedia.vue'
import { SingleMedia } from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia'
import MultipleMedia from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMedia.vue'
import {
  getMediaItemsFromFiles,
  type MediaItem,
  type MediaItemId,
  type MediaNodeAttrs,
} from '~/tiptap-extensions/mediaNode'
import ClipboardMediaInsertionDialog from '~/components/Editor/NodeViews/MediaNodeView/ClipboardMediaInsertionDialog.vue'

const { node } = defineProps<NodeViewProps>()

const attrs = computed(() => node.attrs as MediaNodeAttrs)

const media = ref(
  attrs.value.media
    ? Object.assign<MediaItem[], MediaItem[]>([], attrs.value.media)
    : null,
)

const singleMedia = computed(
  () => (media.value && media.value.length === 1 && media.value[0]) || null,
)

const multipleMedia = computed(
  () => (media.value && media.value.length > 1 && media.value) || null,
)

async function add(files: File[]) {
  const items = await getMediaItemsFromFiles(files)
  if (!items) return

  media.value?.push(...items)
}

function remove(id: MediaItemId) {}

const clipboardMediaInsertionDialogOpen = ref(false)

provideMediaNodeViewContext({ add, remove, clipboardMediaInsertionDialogOpen })
</script>

<script lang="ts">
export interface MediaNodeViewContext {
  add: (files: File[]) => void
  remove: (id: MediaItemId) => void
  clipboardMediaInsertionDialogOpen: Ref<boolean>
}

export const [injectMediaNodeViewContext, provideMediaNodeViewContext] =
  createContext<MediaNodeViewContext>('MediaNodeView')
</script>
