<template>
  <NodeViewWrapper contenteditable="false">
    <div class="p-4 bg-gray-100 rounded-xl overflow-hidden">
      <div v-if="isEmpty" class="flex justify-center">
        <PhotoIcon class="!size-12" />
      </div>

      <img v-if="isSingleMedia" :src="props.node.attrs.media[0]" alt="">
    </div>
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import PhotoIcon from '~/components/Shared/Icons/PhotoIcon.vue'

const props = defineProps<NodeViewProps>()

const isEmpty = computed(() => !props.node.attrs.media)
const isSingleMedia = computed(() => !isEmpty.value && props.node.attrs.media.length === 1)
</script>
