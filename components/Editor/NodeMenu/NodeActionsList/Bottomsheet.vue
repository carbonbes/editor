<template>
  <Bottomsheet v-model:open="open">
    <BottomsheetHeader>
      <BottomsheetHeaderPages v-model:page="page">
        <BottomsheetHeaderTitle v-if="page === 1">Настройки узла</BottomsheetHeaderTitle>

        <div v-else class="flex items-center gap-3">
          <Icon name="tabler:chevron-left" class="!size-6" @click="page--" />

          <BottomsheetHeaderTitle>Поменять на</BottomsheetHeaderTitle>
        </div>
      </BottomsheetHeaderPages>
    </BottomsheetHeader>

    <BottomsheetContent>
      <BottomsheetContentPages v-model:page="page">
        <BottomsheetContentButtons v-if="page === 1">
          <BottomsheetContentButton v-if="canMoveNodeToUp" @click="moveNodeToUp">
            <Icon name="tabler:arrow-up" />
            Переместить наверх
          </BottomsheetContentButton>

          <BottomsheetContentButton v-if="canMoveNodeToDown" @click="moveNodeToDown">
            <Icon name="tabler:arrow-down" />
            Переместить вниз
          </BottomsheetContentButton>

          <BottomsheetContentButtonSub @click="page++">
            <Icon name="tabler:refresh" />
            Поменять на
          </BottomsheetContentButtonSub>
        </BottomsheetContentButtons>

        <BottomsheetContentButtons v-else>
          <BottomsheetContentButton v-if="canSetHeading2" @click="setHeading(2)">
            <Icon name="tabler:h-2" />
            Заголовок 2 уровня
          </BottomsheetContentButton>

          <BottomsheetContentButton v-if="canSetHeading3" @click="setHeading(3)">
            <Icon name="tabler:h-3" />
            Заголовок 3 уровня
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

const { open } = useEditorNodeMenuBottomsheet({
  directionTrigger: 'left', threshold: 75,
})

const page = ref(1)

const {
  canMoveNodeToUp,
  canMoveNodeToDown,
  moveNodeToUp,
  moveNodeToDown,
  canSetHeading2,
  canSetHeading3,
  setHeading,
} = useEditorCommands()
</script>
