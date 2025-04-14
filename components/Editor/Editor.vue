<template>
  <EditorContent :editor />
</template>

<script lang="ts" setup>
import { EditorContent, useEditor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { EditorKey } from '~/keys'

const { content = undefined } = defineProps<{ content?: Content }>()

const editor = useEditor({
  content,

  extensions: [StarterKit],
})

provide(EditorKey, editor)
</script>
