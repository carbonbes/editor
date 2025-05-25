<template>
  <NodeViewWrapper contenteditable="false">
    <div class="rounded-xl overflow-hidden">
      <div v-if="isEmpty" class="p-4 bg-gray-100">
        <div class="flex justify-center">
          <PhotoIcon class="!size-12" />
        </div>
      </div>

      <div v-else class="relative bg-gray-100 flex justify-center">
        <img
          v-if="isSingleMedia"
          :src="props.node.attrs.media[0]"
          alt=""
          class="max-h-[250px]"
        >

        <div class="absolute inset-0 p-4 flex items-end pointer-events-none">
          <div class="flex gap-2">
            <button
              class="p-1.5 bg-white flex items-center justify-center ring-1 ring-gray-200 shadow rounded-xl cursor-pointer pointer-events-auto"
            >
              <PlusIcon class="!size-6" />
            </button>

            <button
              class="p-1.5 bg-white flex items-center justify-center ring-1 ring-gray-200 shadow rounded-xl cursor-pointer pointer-events-auto"
            >
              <ClipboardPlusIcon class="!size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import { PhotoIcon, PlusIcon, ClipboardPlusIcon } from '~/components/Shared/Icons'

const props = defineProps<NodeViewProps>()

const node = computed(() => props.node)
const attrs = computed(() => node.value.attrs)
const isEmpty = computed(() => !attrs.value.media)
const isSingleMedia = computed(() => !isEmpty.value && attrs.value.media.length === 1)
</script>
