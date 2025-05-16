<template>
  <EditorContent :editor class="h-full" />
</template>

<script lang="ts" setup>
import { EditorContent } from '@tiptap/vue-3'

const { editor } = useEditor()
</script>
