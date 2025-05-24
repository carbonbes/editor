<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuContent :side-offset="5" :collision-padding="16">
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
        <PhotoIcon />
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
} from '~/components/Editor/NodeMenu/Dropdown'
import {
  CodeIcon,
  HeadingIcon,
  ListIcon,
  QuoteIcon,
  SeparatorIcon,
  TextIcon,
} from '~/components/Shared/Icons'
import PhotoIcon from '~/components/Shared/Icons/PhotoIcon.vue'

const open = defineModel<boolean>('open', { default: false })

const { insertNode } = useEditorNodeSelectionCommands()
</script>
