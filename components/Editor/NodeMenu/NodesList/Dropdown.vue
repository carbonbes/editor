<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <HeadingIcon />
          Заголовок
        </DropdownMenuSubTrigger>

        <DropdownMenuSubContent>
          <DropdownMenuItem @click="insertNode('heading', { level: 2 })">
            <HeadingIcon 2 />
            Заголовок 2 уровня
          </DropdownMenuItem>

          <DropdownMenuItem @click="insertNode('heading', { level: 3 })">
            <HeadingIcon 3 />
            Заголовок 3 уровня
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>

      <DropdownMenuItem @click="insertNode('paragraph')">
        <TextIcon />
        Текст
      </DropdownMenuItem>

      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <ListIcon />
          Список
        </DropdownMenuSubTrigger>

        <DropdownMenuSubContent>
          <DropdownMenuItem @click="insertNode('bulletList')">
            <ListIcon bullet />
            Маркированный список
          </DropdownMenuItem>

          <DropdownMenuItem @click="insertNode('orderedList')">
            <ListIcon ordered />
            Нумерованный список
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>

      <DropdownMenuItem @click="insertNode('media')">
        <LibraryPhotoIcon />
        Картинка / видео
      </DropdownMenuItem>

      <DropdownMenuItem @click="insertNode('blockquote')">
        <QuoteIcon />
        Цитата
      </DropdownMenuItem>

      <DropdownMenuItem @click="insertNode('codeBlock')">
        <CodeIcon />
        Код
      </DropdownMenuItem>

      <DropdownMenuItem @click="insertNode('horizontalRule')">
        <SeparatorIcon />
        Разделитель
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuRoot,
  DropdownMenuSubContent,
} from '~/components/Editor/NodeMenu/DropdownMenu'
import {
  CodeIcon,
  HeadingIcon,
  ListIcon,
  QuoteIcon,
  SeparatorIcon,
  TextIcon,
  LibraryPhotoIcon,
} from '~/components/Shared/Icons'

const { open } = useEditorNodesListDropdownMenu()

const { insertNode } = useEditorNodeSelectionCommands()
</script>
