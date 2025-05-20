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

const { init: editorInit, destroy } = useEditor()
const { init: editorCursorTrackingInit } = useEditorNodesCursorTracking()

onMounted(() => {
  editorInit(content)
  editorCursorTrackingInit()
})

onBeforeUnmount(destroy)
</script>
