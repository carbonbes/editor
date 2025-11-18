<template>
  <BottomsheetRoot v-model:open="open" @animation-end="handleAnimationEnd">
    <BottomsheetPortal>
      <BottomsheetOverlay />

      <BottomsheetContent>
        <BottomsheetContentHeader>
          <TransitionBetween :index="page" class="h-full flex items-center">
            <BottomsheetContentHeaderTitle v-if="page === 0">
              Настройки узла
            </BottomsheetContentHeaderTitle>

            <div v-else class="flex items-center gap-3">
              <ChevronIcon left class="!size-6" @click="page--" />

              <BottomsheetContentHeaderTitle>
                Поменять на
              </BottomsheetContentHeaderTitle>
            </div>
          </TransitionBetween>
        </BottomsheetContentHeader>

        <BottomsheetContentScrollable>
          <TransitionBetween :index="page" class="h-full">
            <BottomsheetContentButtons v-if="page === 0">
              <BottomsheetContentButton
                v-if="canMoveNodeToUp"
                @click="moveNodeToUp"
              >
                <ArrowIcon up />
                Переместить наверх
              </BottomsheetContentButton>

              <BottomsheetContentButton
                v-if="canMoveNodeToDown"
                @click="moveNodeToDown"
              >
                <ArrowIcon down />
                Переместить вниз
              </BottomsheetContentButton>

              <BottomsheetContentButtonSub
                v-if="canNodeTransform"
                @click="page++"
              >
                <RefreshIcon />
                Поменять на
              </BottomsheetContentButtonSub>

              <BottomsheetContentButton
                class="text-red-500"
                @click="removeNode"
              >
                <TrashIcon />
                Удалить
              </BottomsheetContentButton>
            </BottomsheetContentButtons>

            <BottomsheetContentButtons v-else>
              <BottomsheetContentButton
                v-if="canTransformToHeading2"
                @click="transformToHeading(2)"
              >
                <HeadingIcon 2 />
                Заголовок 2 уровня
              </BottomsheetContentButton>

              <BottomsheetContentButton
                v-if="canTransformToHeading3"
                @click="transformToHeading(3)"
              >
                <HeadingIcon 3 />
                Заголовок 3 уровня
              </BottomsheetContentButton>

              <BottomsheetContentButton
                v-if="canTransformToParagraph"
                @click="transformToParagraph"
              >
                <TextIcon />
                Текст
              </BottomsheetContentButton>

              <BottomsheetContentButton
                v-if="canTransformToBulletList"
                @click="transformToList('bulletList')"
              >
                <ListIcon bullet />
                Маркированный список
              </BottomsheetContentButton>

              <BottomsheetContentButton
                v-if="canTransformToOrderedList"
                @click="transformToList('orderedList')"
              >
                <ListIcon ordered />
                Нумерованный список
              </BottomsheetContentButton>
            </BottomsheetContentButtons>
          </TransitionBetween>
        </BottomsheetContentScrollable>
      </BottomsheetContent>
    </BottomsheetPortal>
  </BottomsheetRoot>
</template>

<script setup lang="ts">
import {
  BottomsheetContent,
  BottomsheetContentButton,
  BottomsheetContentButtons,
  BottomsheetContentButtonSub,
  BottomsheetContentScrollable,
  BottomsheetContentHeader,
  BottomsheetContentHeaderTitle,
  BottomsheetPortal,
  BottomsheetRoot,
  BottomsheetOverlay,
} from '~/components/Editor/NodeMenu/Bottomsheet'
import TransitionBetween from '~/components/Shared/Transitions/TransitionBetween.vue'
import {
  HeadingIcon,
  TextIcon,
  ArrowIcon,
  RefreshIcon,
  TrashIcon,
  ListIcon,
  ChevronIcon,
} from '~/components/Shared/Icons'

const open = ref(false)

useEditorNodeMenuBottomsheet({
  open,
  directionTrigger: 'left',
  threshold: 75,
})

const page = ref(0)

function handleAnimationEnd() {
  if (!open.value) page.value = 0
}

const {
  canMoveNodeToUp,
  canMoveNodeToDown,
  moveNodeToUp,
  moveNodeToDown,
  canNodeTransform,
  canTransformToHeading2,
  canTransformToHeading3,
  canTransformToParagraph,
  canTransformToBulletList,
  canTransformToOrderedList,
  transformToHeading,
  transformToParagraph,
  transformToList,
  removeNode,
} = useEditorNodeSelectionCommands()
</script>
