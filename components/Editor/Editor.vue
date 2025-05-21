<template>
  <EditorContent v-bind="$attrs" />

  <EditorNodeMenuNodesListBottomsheet />
  <EditorNodeMenuNodeActionsListBottomsheet />
  <EditorNodeMenuPopover />
  <EditorSelectionFormattingPopover />
</template>

<script lang="ts" setup>
import type { Content } from '@tiptap/vue-3'

const { content } = defineProps<{ content?: Content }>()

const { init, destroy } = useEditor()

onMounted(() => init(content))
onBeforeUnmount(destroy)
</script>
