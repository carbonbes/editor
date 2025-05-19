<template>
  <DropdownMenuRoot v-model:open="open" :modal="false">
    <DropdownMenuTrigger>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal to="#teleports">
      <DropdownMenuContent>
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

          <DropdownMenuPortal to="#teleports">
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
          </DropdownMenuPortal>
        </DropdownMenuSub>
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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '~/components/Shared/DropdownMenu'
import {
  ArrowIcon,
  HeadingIcon,
  RefreshIcon,
  TextIcon,
} from '~/components/Shared/Icons'

const { open } = useEditorNodeMenuDropdown()

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
} = useEditorCommands()
</script>
