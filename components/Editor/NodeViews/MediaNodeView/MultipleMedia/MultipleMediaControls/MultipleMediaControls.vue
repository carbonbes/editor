<template>
  <div class="flex items-center gap-2">
    <Button @click="open">
      <DevicesPlusIcon />
    </Button>

    <ClipboardMediaInsertionDialog>
      <Button>
        <ClipboardPlusIcon />
      </Button>
    </ClipboardMediaInsertionDialog>
  </div>
</template>

<script setup lang="ts">
import { DevicesPlusIcon, ClipboardPlusIcon } from '~/components/Shared/Icons'
import Button from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/MultipleMediaControls/Button.vue'
import ClipboardMediaInsertionDialog from '~/components/Editor/NodeViews/MediaNodeView/ClipboardMediaInsertionDialog.vue'

const { open } = useEditorMediaNodeViewFileDialog()
</script>
