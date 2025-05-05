<template>
  <Bottomsheet v-model:open="open">
    <BottomsheetHeader>
      <BottomsheetHeaderTitle>Настройки узла</BottomsheetHeaderTitle>
    </BottomsheetHeader>

    <BottomsheetContent>
      <BottomsheetContentButtons>
        <BottomsheetContentButton v-if="canMoveNodeToUp" @click="moveNodeToUp">
          <Icon name="tabler:arrow-up" class="!size-6" />
          Переместить наверх
        </BottomsheetContentButton>

        <BottomsheetContentButton v-if="canMoveNodeToDown" @click="moveNodeToDown">
          <Icon name="tabler:arrow-down" class="!size-6" />
          Переместить вниз
        </BottomsheetContentButton>
      </BottomsheetContentButtons>
    </BottomsheetContent>
  </Bottomsheet>
</template>

<script setup lang="ts">
import {
  Bottomsheet,
  BottomsheetContent,
  BottomsheetHeader,
  BottomsheetHeaderTitle,
  BottomsheetContentButton,
  BottomsheetContentButtons,
} from '~/components/Editor/NodeMenu/Bottomsheet'

const { open } = useEditorNodeMenuBottomsheet({
  directionTrigger: 'left', threshold: 75,
})

const { canMoveNodeToUp, canMoveNodeToDown, moveNodeToUp, moveNodeToDown } = useEditorCommands()
</script>
