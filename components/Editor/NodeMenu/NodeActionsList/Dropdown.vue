<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuContent :side-offset="5">
      <DropdownMenuItem v-if="canMoveNodeToUp" @click="moveNodeToUp">
        <ArrowIcon up />
        Переместить наверх
      </DropdownMenuItem>

      <DropdownMenuItem v-if="canMoveNodeToDown" @click="moveNodeToDown">
        <ArrowIcon down />
        Переместить вниз
      </DropdownMenuItem>

      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <RefreshIcon />
          Поменять на
        </DropdownMenuSubTrigger>

        <DropdownMenuSubContent>
          <DropdownMenuItem
            v-if="canTransformToHeading2"
            @click="transformToHeading(2)"
          >
            <HeadingIcon 2 />
            Заголовок 2 уровня
          </DropdownMenuItem>

          <DropdownMenuItem
            v-if="canTransformToHeading3"
            @click="transformToHeading(3)"
          >
            <HeadingIcon 3 />
            Заголовок 3 уровня
          </DropdownMenuItem>

          <DropdownMenuItem
            v-if="canTransformToParagraph"
            @click="transformToParagraph"
          >
            <TextIcon />
            Текст
          </DropdownMenuItem>

          <DropdownMenuItem
            v-if="canTransformToBulletList"
            @click="transformToList('bulletList')"
          >
            <Icon name="tabler:list" />
            Маркированный список
          </DropdownMenuItem>

          <DropdownMenuItem
            v-if="canTransformToOrderedList"
            @click="transformToList('orderedList')"
          >
            <Icon name="tabler:list-numbers" />
            Нумерованный список
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>

      <DropdownMenuItem class="text-red-500" @click="removeNode">
        <TrashIcon />
        Удалить
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuSubContent,
} from '~/components/Editor/NodeMenu/Dropdown'
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
} from '~/components/Shared/DropdownMenu'
import {
  ArrowIcon,
  HeadingIcon,
  RefreshIcon,
  TextIcon,
  TrashIcon,
} from '~/components/Shared/Icons'

const open = defineModel<boolean>('open', { default: false })

const {
  canMoveNodeToUp,
  canMoveNodeToDown,
  moveNodeToUp,
  moveNodeToDown,
  canTransformToHeading2,
  canTransformToHeading3,
  transformToHeading,
  canTransformToParagraph,
  transformToParagraph,
  canTransformToOrderedList,
  canTransformToBulletList,
  transformToList,
  removeNode,
} = useEditorCommands()
</script>
