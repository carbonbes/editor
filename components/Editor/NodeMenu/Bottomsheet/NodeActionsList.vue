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
          <TransitionBetween v-model:index="page" class="size-full">
            <div v-if="page === 1" class="flex items-center">
              <p class="text-xl font-bold whitespace-nowrap">Настройки узла</p>
            </div>

            <div v-else class="flex items-center gap-4">
              <button class="flex items-center justify-center" @click="page = 1">
                <Icon name="tabler:chevron-left" class="!size-6" />
              </button>

              <p class="text-xl font-bold whitespace-nowrap">Поменять на</p>
            </div>
          </TransitionBetween>
        </DrawerHeader>

        <DrawerContent class="h-full">
          <TransitionBetween v-model:index="page">
            <EditorNodeMenuBottomsheetButtons v-if="page === 1">
              <EditorNodeMenuBottomsheetButton
                v-for="button in buttons1"
                :key="button.label"
                :next-page-trigger="button.nextPageTrigger"
                :prevent-close="button.preventClose"
                @click="button.action"
              >
                <Icon :name="button.icon" />
                {{ button.label }}
              </EditorNodeMenuBottomsheetButton>
            </EditorNodeMenuBottomsheetButtons>

            <EditorNodeMenuBottomsheetButtons v-else>
              <EditorNodeMenuBottomsheetButton
                v-for="button in buttons2"
                :key="button.label"
              >
                <Icon :name="button.icon" />
                {{ button.label }}
              </EditorNodeMenuBottomsheetButton>
            </EditorNodeMenuBottomsheetButtons>
          </TransitionBetween>
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
import TransitionBetween from '~/components/Shared/Transitions/TransitionBetween.vue'

const page = ref(1)

const { open } = useEditorNodeMenuBottomsheet({
  direction: 'left', threshold: 75,
})

const buttons1 = [
  {
    icon: 'tabler:refresh',
    label: 'Поменять на',
    action: () => page.value = 2,
    nextPageTrigger: true,
    preventClose: true,
  },
]

const buttons2 = [
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
