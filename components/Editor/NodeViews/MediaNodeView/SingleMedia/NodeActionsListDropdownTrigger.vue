<template>
  <NodeActionsListDropdown>
    <BaseButton as="button" class="p-1.5 bg-white rounded-xl shadow">
      <DotsIcon class="!size-6" />
    </BaseButton>
  </NodeActionsListDropdown>
</template>

<script setup lang="ts">
import { DotsIcon } from '~/components/Shared/Icons'
import NodeActionsListDropdown from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/NodeActionsListDropdown.vue'
import BaseButton from '~/components/Shared/Base/BaseButton.vue'
</script>
