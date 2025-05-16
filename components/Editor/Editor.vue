<template>
  <EditorContent :content />

  <EditorNodeMenuNodesListBottomsheet />
  <EditorNodeMenuNodeActionsListBottomsheet />
  <EditorSelectionFormattingPopover />
</template>

<script lang="ts" setup>
import type { Content } from '@tiptap/vue-3'

const { content } = defineProps<{ content?: Content }>()
</script>
