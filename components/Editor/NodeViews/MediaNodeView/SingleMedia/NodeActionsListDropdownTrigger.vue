<template>
  <NodeActionsListDropdown>
    <button class="p-1.5 bg-white rounded-xl shadow cursor-pointer">
      <DotsIcon class="!size-6" />
    </button>
  </NodeActionsListDropdown>
</template>

<script setup lang="ts">
import { DotsIcon } from '~/components/Shared/Icons'
import NodeActionsListDropdown from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/NodeActionsListDropdown.vue'
</script>
