<template>
  <DropdownMenu>
    <BaseButton
      class="absolute top-0 right-0 m-2 p-2 bg-white rounded-xl shadow z-[1]"
    >
      <DotsIcon class="!size-6" />
    </BaseButton>
  </DropdownMenu>
</template>

<script setup lang="ts">
import DropdownMenu from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/Dropdown.vue'
import BaseButton from '~/components/Shared/Base/BaseButton.vue'
import { DotsIcon } from '~/components/Shared/Icons'
</script>
