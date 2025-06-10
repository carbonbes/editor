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

        <ClipboardDialogTrigger>
          <DropdownMenuItem>
            <ClipboardPlusIcon />
            Добавить еще из буфера
          </DropdownMenuItem>
        </ClipboardDialogTrigger>
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
import { ClipboardPlusIcon, DevicesPlusIcon } from '~/components/Shared/Icons'
import ClipboardDialogTrigger from '~/components/Editor/NodeViews/MediaNodeView/Shared/ClipboardDialogTrigger.vue'

const open = ref(false)

const { open: openFileDialog } = useEditorMediaNodeViewFileDialog()
</script>
