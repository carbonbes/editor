<template>
  <DropdownMenuRoot v-model:open="open" :modal="false">
    <slot />
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import { DropdownMenuRoot } from '~/components/Shared/DropdownMenu'

const open = defineModel<boolean>('open', { default: false })

const { setFocusedNode } = useEditorFocusedNode()
const { node } = useEditorNodesHoveringTracking()

watch(open, (open) => {
  setFocusedNode(open ? node.value : undefined)
})
</script>
