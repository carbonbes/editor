<template>
  <NodesListDropdown>
    <Button>
      <PlusIcon />
    </Button>
  </NodesListDropdown>
</template>

<script setup lang="ts">
import NodesListDropdown from '~/components/Editor/NodeMenu/NodesList/Dropdown.vue'
import Button from '~/components/Editor/NodeMenu/Popover/Button.vue'
import { PlusIcon } from '~/components/Shared/Icons'
</script>
