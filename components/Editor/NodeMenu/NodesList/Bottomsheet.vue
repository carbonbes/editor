<template>
  <BottomsheetRoot v-model:open="open">
    <BottomsheetPortal>
      <BottomsheetOverlay />

      <BottomsheetContent>
        <BottomsheetContentHeader>
          <BottomsheetContentHeaderTitle>
            Добавить новый узел
          </BottomsheetContentHeaderTitle>
        </BottomsheetContentHeader>

        <BottomsheetContentScrollable>
          <BottomsheetContentButtons>
            <BottomsheetContentButton
              @click="insertNode('heading', { level: 2 })"
            >
              <HeadingIcon 2 />
              Заголовок 2 уровня
            </BottomsheetContentButton>

            <BottomsheetContentButton
              @click="insertNode('heading', { level: 3 })"
            >
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

            <BottomsheetContentButton @click="insertNode('media')">
              <LibraryPhotoIcon />
              Картинка / видео
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
  BottomsheetContentScrollable,
  BottomsheetContentHeader,
  BottomsheetContentHeaderTitle,
  BottomsheetPortal,
  BottomsheetRoot,
  BottomsheetOverlay,
} from '~/components/Editor/NodeMenu/Bottomsheet'
import {
  CodeIcon,
  HeadingIcon,
  ListIcon,
  QuoteIcon,
  SeparatorIcon,
  TextIcon,
  LibraryPhotoIcon,
} from '~/components/Shared/Icons'

const { open } = useEditorNodesListBottomsheet()

const { insertNode } = useEditorNodeSelectionCommands()
</script>
