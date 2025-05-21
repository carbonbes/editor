<template>
  <EditorContent :editor class="h-full" :class="{ 'overflow-x-hidden': isTouch }" />
</template>

<script lang="ts" setup>
import { EditorContent } from '@tiptap/vue-3'

const { editor } = useEditor()
const { isTouch } = useDevice()
</script>
