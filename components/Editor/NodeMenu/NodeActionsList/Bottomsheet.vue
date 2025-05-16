<template>
  <Bottomsheet v-model:open="open">
    <BottomsheetHeader>
      <BottomsheetHeaderPages v-model:page="page">
        <BottomsheetHeaderTitle v-if="page === 1">
          Настройки узла
        </BottomsheetHeaderTitle>

        <div v-else class="flex items-center gap-3">
          <ChevronIcon left class="!size-6" @click="page--" />

          <BottomsheetHeaderTitle>Поменять на</BottomsheetHeaderTitle>
        </div>
      </BottomsheetHeaderPages>
    </BottomsheetHeader>

    <BottomsheetContent>
      <BottomsheetContentPages v-model:page="page">
        <BottomsheetContentButtons v-if="page === 1">
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

          <BottomsheetContentButtonSub @click="page++">
            <RefreshIcon />
            Поменять на
          </BottomsheetContentButtonSub>

          <BottomsheetContentButton class="text-red-500" @click="removeNode">
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
      </BottomsheetContentPages>
    </BottomsheetContent>
  </Bottomsheet>
</template>

<script setup lang="ts">
import {
  Bottomsheet,
  BottomsheetContent,
  BottomsheetHeader,
  BottomsheetHeaderPages,
  BottomsheetHeaderTitle,
  BottomsheetContentButton,
  BottomsheetContentButtonSub,
  BottomsheetContentPages,
  BottomsheetContentButtons,
} from '~/components/Editor/NodeMenu/Bottomsheet'
import {
  HeadingIcon,
  TextIcon,
  ArrowIcon,
  RefreshIcon,
  TrashIcon,
  ListIcon,
  ChevronIcon,
} from '~/components/Shared/Icons'

const { open } = useEditorNodeMenuBottomsheet({
  directionTrigger: 'left',
  threshold: 75,
})

watch(open, (open) => {
  if (!open) {
    page.value = 1
  }
})

const page = ref(1)

const {
  canMoveNodeToUp,
  canMoveNodeToDown,
  moveNodeToUp,
  moveNodeToDown,
  canTransformToHeading2,
  canTransformToHeading3,
  canTransformToParagraph,
  canTransformToBulletList,
  canTransformToOrderedList,
  transformToHeading,
  transformToParagraph,
  transformToList,
  removeNode,
} = useEditorCommands()
</script>
