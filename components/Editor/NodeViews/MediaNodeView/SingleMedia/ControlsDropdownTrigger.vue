<template>
  <ControlsDropdown>
    <button class="p-1.5 bg-white rounded-xl shadow cursor-pointer">
      <DotsIcon class="!size-6" />
    </button>
  </ControlsDropdown>
</template>

<script setup lang="ts">
import { DotsIcon } from '~/components/Shared/Icons'
import ControlsDropdown from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/ControlsDropdown.vue'
</script>
