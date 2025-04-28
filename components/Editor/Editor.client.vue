<template>
  <EditorContent :editor class="h-full" />

  <EditorNodeMenuBottomsheetNodesList />
  <EditorNodeMenuBottomsheetNodeActionsList />
</template>

<script lang="ts" setup>
import { EditorContent, type Content } from '@tiptap/vue-3'

const { content } = defineProps<{ content?: Content }>()

const { editor, init, destroy } = useEditor()

onMounted(() => {
  init(content)
})

onBeforeUnmount(destroy)
</script>
