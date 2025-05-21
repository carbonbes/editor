<template>
  <NodesListDropdown v-model:open="open">
    <Button :active="open">
      <PlusIcon />
    </Button>
  </NodesListDropdown>
</template>

<script setup lang="ts">
import Button from '~/components/Editor/NodeMenu/Popover/Button.vue'
import { PlusIcon } from '~/components/Shared/Icons'
import NodesListDropdown from '~/components/Editor/NodeMenu/NodesList/Dropdown.vue'

const open = ref(false)
</script>
