<template>
  <div class="flex items-center gap-2">
    <Button @click="open">
      <DevicesPlusIcon />
    </Button>

    <Button>
      <ClipboardPlusIcon />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ClipboardPlusIcon, DevicesPlusIcon } from '~/components/Shared/Icons'
import Button from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaControls/Button.vue'

const { open } = useEditorFileDialog()
</script>
