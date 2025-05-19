<template>
  <PopoverRoot v-model:open="open">
    <PopoverPortal to="#teleports">
      <PopoverContent
        align="start"
        side="left"
        :side-offset="16"
        :reference="node || ref()"
        @open-auto-focus="(e) => e.preventDefault()"
        @interact-outside="(e) => e.preventDefault()"
      >
        <Buttons>
          <Button>
            <PlusIcon />
          </Button>

          <NodeActionsListDropdown>
            <Button>
              <GripVerticalIcon />
            </Button>
          </NodeActionsListDropdown>
        </Buttons>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script setup lang="ts">
import { PopoverRoot, PopoverPortal, PopoverContent } from 'reka-ui'
import Buttons from './Buttons.vue'
import Button from './Button.vue'
import NodeActionsListDropdown from '~/components/Editor/NodeMenu/NodeActionsList/Dropdown.vue'
import { PlusIcon, GripVerticalIcon } from '~/components/Shared/Icons'

const open = ref(false)

const { node } = useEditorNodesCursorTracking()

watch(node, (node) => {
  open.value = !!node
})
</script>
