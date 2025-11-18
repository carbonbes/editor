<template>
  <PopoverRoot v-model:open="open">
    <PopoverPortal to="#teleports">
      <PopoverContent
        ref="contentRef"
        align="start"
        side="left"
        :side-offset="15"
        :collision-padding="15"
        :reference="node"
        class="flex gap-1"
        @open-auto-focus="preventDefault"
        @interact-outside="preventDefault"
        @escape-key-down="preventDefault"
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

export type EditorNodeMenuPopoverContext = {
  open: Ref<boolean>,
  contentRef: Ref<InstanceType<typeof PopoverContent> | null>
}

const { open, contentRef } = useEditorNodeMenuPopover()
const { node } = useEditorNodesHoverTracking()

watch(node, (value) => (open.value = !!value))

function preventDefault(e: Event) {
  e.preventDefault()
}
</script>
