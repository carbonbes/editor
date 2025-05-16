<template>
  <Bottomsheet v-model:open="open">
    <BottomsheetHeader>
      <BottomsheetHeaderTitle>Добавить новый узел</BottomsheetHeaderTitle>
    </BottomsheetHeader>

    <BottomsheetContent>
      <BottomsheetContentButtons>
        <BottomsheetContentButton @click="insertNode('heading', { level: 2 })">
          <HeadingIcon 2 />
          Заголовок 2 уровня
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('heading', { level: 3 })">
          <HeadingIcon 3 />
          Заголовок 3 уровня
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('paragraph')">
          <TextIcon />
          Текст
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('bulletList')">
          <ListIcon bullet />
          Маркированный список
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('orderedList')">
          <ListIcon ordered />
          Нумерованный список
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('blockquote')">
          <QuoteIcon />
          Цитата
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('codeBlock')">
          <CodeIcon />
          Код
        </BottomsheetContentButton>

        <BottomsheetContentButton @click="insertNode('horizontalRule')">
          <SeparatorIcon />
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
import {
  CodeIcon,
  HeadingIcon,
  ListIcon,
  QuoteIcon,
  SeparatorIcon,
  TextIcon,
} from '~/components/Shared/Icons'

const { open } = useEditorNodeMenuBottomsheet({
  directionTrigger: 'right',
  threshold: 75,
})

const { insertNode } = useEditorCommands()
</script>
