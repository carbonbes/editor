<template>
  <DropdownMenuRoot v-model:open="open" :modal="false">
    <slot />
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import { DropdownMenuRoot } from '~/components/Shared/DropdownMenu'

const open = defineModel<boolean>('open', { default: false })

const { node } = useEditorNodesHoveringTracking()
const { setFocusedNode } = useEditorFocusedNode()

watch(open, (open) => {
  if (open) {
    setFocusedNode(node.value)
  } else {
    setFocusedNode(undefined)
  }
})
</script>
