<template>
  <Bottomsheet v-model:open="open">
    <BottomsheetHeader>
      <BottomsheetHeaderTitle>Добавить новый узел</BottomsheetHeaderTitle>
    </BottomsheetHeader>

    <BottomsheetContent>
      <BottomsheetContentButtons>
        <BottomsheetContentButton @click="insertNode('heading', { level: 2 })">
          <Icon name="tabler:h-2" />
          Заголовок 2 уровня
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('heading', { level: 3 })">
          <Icon name="tabler:h-3" />
          Заголовок 3 уровня
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('paragraph')">
          <Icon name="tabler:letter-case" />
          Текст
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('bulletList')">
          <Icon name="tabler:list" />
          Маркированный список
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('orderedList')">
          <Icon name="tabler:list-numbers" />
          Нумерованный список
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('blockquote')">
          <Icon name="tabler:quote" />
          Цитата
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('codeBlock')">
          <Icon name="tabler:code" />
          Код
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('horizontalRule')">
          <Icon name="tabler:separator" />
          Разделитель
        </BottomsheetContentButton>
      </BottomsheetContentButtons>
    </BottomsheetContent>
  </Bottomsheet>
</template>

<script setup lang="ts">
import {
  Bottomsheet,
  BottomsheetContent,
  BottomsheetContentButton,
  BottomsheetContentButtons,
  BottomsheetHeader,
  BottomsheetHeaderTitle,
} from '~/components/Editor/NodeMenu/Bottomsheet'

const { open } = useEditorNodeMenuBottomsheet({
  directionTrigger: 'right', threshold: 75,
})

const { insertNode } = useEditorCommands()
</script>
