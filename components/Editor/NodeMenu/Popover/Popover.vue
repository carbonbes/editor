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
        @open-auto-focus="(e) => e.preventDefault()"
        @interact-outside="(e) => e.preventDefault()"
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

const open = ref(false)

const { contentRef } = useEditorNodeMenuPopover()

const { node } = useEditorNodesHoverTracking()
watch(node, (node) => (open.value = !!node))
</script>
