<template>
  <DropdownMenuRoot v-model:open="open" :modal="false">
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal to="#teleports">
      <DropdownMenuContent :side-offset="5" :collision-padding="16">
        <DropdownMenuItem @click="openFileDialog">
          <DevicesPlusIcon />
          Добавить еще с устройства
        </DropdownMenuItem>

        <ClipboardMediaInsertionDialog>
          <DropdownMenuItem>
            <ClipboardPlusIcon />
            Добавить еще из буфера
          </DropdownMenuItem>
        </ClipboardMediaInsertionDialog>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
} from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/DropdownMenu'
import ClipboardMediaInsertionDialog from '~/components/Editor/NodeViews/MediaNodeView/ClipboardMediaInsertionDialog.vue'
import { ClipboardPlusIcon, DevicesPlusIcon } from '~/components/Shared/Icons'

const open = ref(false)

const { open: openFileDialog } = useEditorMediaNodeViewFileDialog()
</script>
