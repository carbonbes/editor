<template>
  <DropdownMenu>
    <Button class="absolute top-0 right-0 m-2 z-[1]">
      <DotsIcon class="!size-6" />
    </Button>
  </DropdownMenu>
</template>

<script setup lang="ts">
import DropdownMenu from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/Dropdown.vue'
import Button from '~/components/Editor/NodeViews/MediaNodeView/Shared/Button.vue'
import { DotsIcon } from '~/components/Shared/Icons'
</script>
