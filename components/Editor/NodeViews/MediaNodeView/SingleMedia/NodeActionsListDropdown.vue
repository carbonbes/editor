<template>
  <DropdownMenuRoot v-model:open="open" :modal="false">
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal to="#teleports">
      <DropdownMenuContent :side-offset="5" :collision-padding="16">
        <DropdownMenuItem @click="deviceMediaInsertionDialogOpen = true">
          <DevicesPlusIcon />
          Добавить еще с устройства
        </DropdownMenuItem>

        <DropdownMenuItem @click="clipboardMediaInsertionDialogOpen = true">
          <ClipboardPlusIcon />
          Добавить еще из буфера
        </DropdownMenuItem>
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
} from '~/components/Editor/NodeViews/MediaNodeView/DropdownMenu'
import { ClipboardPlusIcon, DevicesPlusIcon } from '~/components/Shared/Icons'
import { injectMediaNodeViewContext } from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'

const open = ref(false)

const { deviceMediaInsertionDialogOpen, clipboardMediaInsertionDialogOpen } =
  injectMediaNodeViewContext()
</script>
