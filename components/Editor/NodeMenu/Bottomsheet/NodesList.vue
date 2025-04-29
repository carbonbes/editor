<template>
  <Drawer
    v-model:open="open"
    :snap-points="[0.5, 1]"
    :active-snap-point="0.5"
    :fade-from-index="0"
  >
    <DrawerPortal>
      <DrawerOverlay />

      <DrawerBody>
        <DrawerHeader class="p-6">
          <p class="text-xl font-bold whitespace-nowrap">Добавить новый узел</p>
        </DrawerHeader>

        <DrawerContent class="h-full">
          <EditorNodeMenuBottomsheetButtons>
            <EditorNodeMenuBottomsheetButton
              v-for="button in buttons"
              :key="button.label"
            >
              <Icon :name="button.icon" />
              {{ button.label }}
            </EditorNodeMenuBottomsheetButton>
          </EditorNodeMenuBottomsheetButtons>
        </DrawerContent>
      </DrawerBody>
    </DrawerPortal>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
} from '~/components/Shared/Drawer'

const { open } = useEditorNodeMenuBottomsheet({
  direction: 'right', threshold: 75,
})

const buttons = [
  {
    icon: 'tabler:heading',
    label: 'Заголовок',
  },
  {
    icon: 'tabler:letter-case',
    label: 'Текст',
  },
]
</script>
