<template>
  <EditorContent :editor />
</template>

<script lang="ts" setup>
import { EditorContent, type Content } from '@tiptap/vue-3'

const { content } = defineProps<{ content?: Content }>()

const { editor, init, destroy } = useEditor()

onMounted(async () => {
  init(content)
})

onBeforeUnmount(destroy)

useEditorNodesSwipingTracking({
  onSwipeEnd({ xy: [x, y] }) {
    const node = getEditorNodeByCoords(x, y)

    console.log(node)
  },
})
</script>
