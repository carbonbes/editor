<template>
  <EditorContent :editor />
</template>

<script lang="ts" setup>
import { EditorContent, type Content } from '@tiptap/vue-3'

const { content } = defineProps<{ content?: Content }>()

const { editor, init, destroy } = useEditor()

onMounted(() => {
  init(content)
})

onBeforeUnmount(destroy)

useEditorNodesSwipingTracking({
  onSwipeStart({ xy: [x, y] }) {
    const node = getEditorNodeByCoords(x, y)

    console.log(node)
  },

  onSwipeEnd() {
    
  },
})
</script>
