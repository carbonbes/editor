<template>
  <div class="flex items-center gap-2">
    <Button @click="open">
      <DevicesPlusIcon />
    </Button>

    <ClipboardDialogTrigger>
      <Button>
        <ClipboardPlusIcon />
      </Button>
    </ClipboardDialogTrigger>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/Editor/NodeViews/MediaNodeView/MultipleMedia/Controls/Button.vue'
import { DevicesPlusIcon, ClipboardPlusIcon } from '~/components/Shared/Icons'
import ClipboardDialogTrigger from '~/components/Editor/NodeViews/MediaNodeView/Shared/ClipboardDialogTrigger.vue'

const { open } = useEditorMediaNodeViewFileDialog()
</script>
