<template>
  <PopoverRoot v-model:open="open">
    <PopoverPortal to="#teleports">
      <PopoverContent
        ref="contentRef"
        align="start"
        side="left"
        :side-offset="16"
        :reference="node"
        class="flex gap-1"
        @open-auto-focus="(e) => e.preventDefault()"
        @interact-outside="(e) => e.preventDefault()"
        @pointer-down-outside="handlePointerDownOutside"
        @escape-key-down="(e) => e.preventDefault()"
      >
        <NodesListDropdownTrigger />
        <NodeActionsListDropdownTrigger />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script setup lang="ts">
import { PopoverRoot, PopoverPortal, PopoverContent } from 'reka-ui'
import NodesListDropdownTrigger from '~/components/Editor/NodeMenu/Popover/NodesListDropdownTrigger.vue'
import NodeActionsListDropdownTrigger from '~/components/Editor/NodeMenu/Popover/NodeActionsListDropdownTrigger.vue'
import type { PointerDownOutsideEvent } from '~/types'

const open = ref(false)

const { contentRef } = useEditorNodeMenuPopover()
const { node } = useEditorNodesHoveringTracking()

watch(node, (node) => {
  open.value = !!node
})

const { dom } = useEditorView()

function handlePointerDownOutside(e: PointerDownOutsideEvent) {
  const eventTarget = e.target as HTMLElement

  if (!dom.value || !eventTarget || dom.value.contains(eventTarget)) {
    e.preventDefault()

    return
  }

  open.value = false
}
</script>
