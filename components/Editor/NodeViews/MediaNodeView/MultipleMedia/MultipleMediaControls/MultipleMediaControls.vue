<template>
  <div class="flex items-center gap-2">
    <Button @click="open">
      <DevicesPlusIcon />
    </Button>

    <Button @click="clipboardDialogOpen = true">
      <ClipboardPlusIcon />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { injectMediaNodeViewContext } from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'
import Button from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaControls/Button.vue'
import { DevicesPlusIcon, ClipboardPlusIcon } from '~/components/Shared/Icons'

const { open } = useEditorMediaNodeViewFileDialog()
const { clipboardDialogOpen } = injectMediaNodeViewContext()
</script>
