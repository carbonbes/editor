<template>
  <Bottomsheet v-model:open="open">
    <BottomsheetHeader>
      <TransitionView :index="page">
        <template #controls="{ previous }">
          <BottomsheetHeaderTitle>Настройки узла</BottomsheetHeaderTitle>

          <div class="flex items-center gap-3">
            <Icon
              name="tabler:chevron-left"
              class="!size-6"
              @click="previous"
            />

            <BottomsheetHeaderTitle>Поменять на</BottomsheetHeaderTitle>
          </div>
        </template>
      </TransitionView>
    </BottomsheetHeader>

    <BottomsheetContent>
      <TransitionView :index="page">
        <BottomsheetContentButtons>
          <BottomsheetContentButton
            v-if="canMoveNodeToUp"
            @click="moveNodeToUp"
          >
            <Icon name="tabler:arrow-up" />
            Переместить наверх
          </BottomsheetContentButton>

          <BottomsheetContentButton
            v-if="canMoveNodeToDown"
            @click="moveNodeToDown"
          >
            <Icon name="tabler:arrow-down" />
            Переместить вниз
          </BottomsheetContentButton>

          <BottomsheetContentButtonSub @click="next">
            <Icon name="tabler:refresh" />
            Поменять на
          </BottomsheetContentButtonSub>

          <BottomsheetContentButton class="text-red-500" @click="removeNode">
            <Icon name="tabler:trash" />
            Удалить
          </BottomsheetContentButton>
        </BottomsheetContentButtons>

        <BottomsheetContentButtons>
          <BottomsheetContentButton
            v-if="canTransformToHeading2"
            @click="transformToHeading(2)"
          >
            <Icon name="tabler:h-2" />
            Заголовок 2 уровня
          </BottomsheetContentButton>

          <BottomsheetContentButton
            v-if="canTransformToHeading3"
            @click="transformToHeading(3)"
          >
            <Icon name="tabler:h-3" />
            Заголовок 3 уровня
          </BottomsheetContentButton>

          <BottomsheetContentButton
            v-if="canTransformToParagraph"
            @click="transformToParagraph"
          >
            <Icon name="tabler:letter-case" />
            Текст
          </BottomsheetContentButton>

          <BottomsheetContentButton
            v-if="canTransformToBulletList"
            @click="transformToList('bulletList')"
          >
            <Icon name="tabler:list" />
            Маркированный список
          </BottomsheetContentButton>

          <BottomsheetContentButton
            v-if="canTransformToOrderedList"
            @click="transformToList('orderedList')"
          >
            <Icon name="tabler:list-numbers" />
            Нумерованный список
          </BottomsheetContentButton>
        </BottomsheetContentButtons>
      </TransitionView>
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
import TransitionView from '~/components/Shared/Transitions/TransitionView.vue'

const { open } = useEditorNodeMenuBottomsheet({
  directionTrigger: 'left',
  threshold: 75,
})

watch(open, (open) => {
  if (!open) {
    page.value = 0
  }
})

const page = ref(0)

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
