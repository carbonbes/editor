<template>
  <DropdownMenuRoot v-model:open="open" :modal="false">
    <DropdownMenuTrigger>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal to="#teleports">
      <DropdownMenuContent :side-offset="5">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <HeadingIcon />
            Заголовок
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal to="#teleports">
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
          </DropdownMenuPortal>
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

          <DropdownMenuPortal to="#teleports">
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
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuItem @click="insertNode('blockquote')">
          <QuoteIcon />
          Цитата
        </DropdownMenuItem>

        <DropdownMenuItem @click="insertNode('orderedList')">
          <CodeIcon />
          Код
        </DropdownMenuItem>

        <DropdownMenuItem @click="insertNode('orderedList')">
          <SeparatorIcon />
          Разделитель
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '~/components/Shared/DropdownMenu'
import {
  CodeIcon,
  HeadingIcon,
  ListIcon,
  QuoteIcon,
  SeparatorIcon,
  TextIcon,
} from '~/components/Shared/Icons'
import { DropdownMenuSub } from 'reka-ui'

const { open } = useEditorNodesListDropdown()
const { insertNode } = useEditorCommands()
</script>
