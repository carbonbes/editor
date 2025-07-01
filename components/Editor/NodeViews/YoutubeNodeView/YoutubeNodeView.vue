<template>
  <NodeViewWrapper>
    <YoutubeVideo :id="node.attrs.id" class="rounded-xl overflow-hidden" />
  </NodeViewWrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/vue-3'
import { YoutubeVideo } from '~/components/Shared/YoutubeVideo'

const { node } = defineProps<NodeViewProps>()
</script>
