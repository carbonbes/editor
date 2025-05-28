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
} from '~/components/Editor/NodeViews/MediaNodeView/Dropdown'
import { PlusIcon, ClipboardPlusIcon } from '~/components/Shared/Icons'

const open = ref(false)
</script>
