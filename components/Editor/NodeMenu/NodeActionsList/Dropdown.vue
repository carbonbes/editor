<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuContent @interact-outside="handleInteractOutside">
      <DropdownMenuItem v-if="canMoveNodeToUp" @click="moveNodeToUp">
        <ArrowIcon up />
        Переместить наверх
      </DropdownMenuItem>

      <DropdownMenuItem v-if="canMoveNodeToDown" @click="moveNodeToDown">
        <ArrowIcon down />
        Переместить вниз
      </DropdownMenuItem>

      <DropdownMenuSub v-if="canNodeTransform">
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
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuRoot,
  DropdownMenuSubContent,
} from '~/components/Editor/NodeMenu/DropdownMenu'
import {
  ArrowIcon,
  HeadingIcon,
  RefreshIcon,
  TextIcon,
  TrashIcon,
} from '~/components/Shared/Icons'

const { nodeActionsListDropdownOpen: open } = useEditorNodeMenuDropdown()
const { setFocusedNode } = useEditorFocusedNode()
const { node } = useEditorNodesHoverTracking()

watch(open, (value) => setFocusedNode(value ? node.value : null))

const {
  canMoveNodeToUp,
  canMoveNodeToDown,
  moveNodeToUp,
  moveNodeToDown,
  canNodeTransform,
  canTransformToHeading2,
  canTransformToHeading3,
  transformToHeading,
  canTransformToParagraph,
  transformToParagraph,
  canTransformToOrderedList,
  canTransformToBulletList,
  transformToList,
  removeNode,
} = useEditorNodeSelectionCommands()

const { dom } = useEditorView()
const { open: editorNodeMenuPopover } = useEditorNodeMenuPopover()

function handleInteractOutside(e: Event) {
  if (!dom.value) return

  const target = e.target as HTMLElement

  if (dom.value.contains(target)) return

  editorNodeMenuPopover.value = false
  setFocusedNode(null)
}
</script>
