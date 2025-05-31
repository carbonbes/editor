<template>
  <PopoverRoot v-model:open="open">
    <PopoverPortal to="#teleports">
      <PopoverContent
        align="start"
        side="left"
        :side-offset="16"
        :reference="node"
        @open-auto-focus="(e) => e.preventDefault()"
        @interact-outside="(e) => e.preventDefault()"
        @escape-key-down="(e) => e.preventDefault()"
      >
        <Buttons>
          <NodesListDropdownTrigger />
          <NodeActionsListDropdownTrigger />
        </Buttons>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script setup lang="ts">
import { PopoverRoot, PopoverPortal, PopoverContent } from 'reka-ui'
import Buttons from './Buttons.vue'
import NodesListDropdownTrigger from '~/components/Editor/NodeMenu/Popover/NodesListDropdownTrigger.vue'
import NodeActionsListDropdownTrigger from '~/components/Editor/NodeMenu/Popover/NodeActionsListDropdownTrigger.vue'

const open = ref(false)

const { node } = useEditorNodesHoveringTracking()

watch(node, (node) => {
  open.value = !!node
})
</script>
