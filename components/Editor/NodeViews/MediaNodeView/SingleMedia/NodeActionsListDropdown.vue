<template>
  <DropdownMenuRoot v-model:open="open" :modal="false">
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal to="#teleports">
      <DropdownMenuContent :side-offset="5" :collision-padding="16">
        <DropdownMenuItem>
          <PlusIcon />
          Добавить еще с устройства
        </DropdownMenuItem>

        <DropdownMenuItem>
          <ClipboardMediaInsertionDialogTrigger />
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
} from '~/components/Editor/NodeViews/MediaNodeView/Dropdown'
import { PlusIcon } from '~/components/Shared/Icons'
import ClipboardMediaInsertionDialogTrigger from '~/components/Editor/NodeViews/MediaNodeView/SingleMedia/ClipboardMediaInsertionDialogTrigger.vue'

const open = ref(false)
</script>
