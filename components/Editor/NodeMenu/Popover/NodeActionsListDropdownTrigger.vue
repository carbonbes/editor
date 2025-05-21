<template>
  <NodeActionsListDropdown v-model:open="open">
    <Button :active="open">
      <GripVerticalIcon />
    </Button>
  </NodeActionsListDropdown>
</template>

<script setup lang="ts">
import Button from '~/components/Editor/NodeMenu/Popover/Button.vue'
import { GripVerticalIcon } from '~/components/Shared/Icons'
import NodeActionsListDropdown from '~/components/Editor/NodeMenu/NodeActionsList/Dropdown.vue'

const open = ref(false)
</script>
