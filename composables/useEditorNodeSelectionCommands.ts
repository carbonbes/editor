import type { Level as HeadingLevel } from '@tiptap/extension-heading'
import type { Attrs } from '@tiptap/pm/model'
import type { EditorRootNodes } from '~/types'

export function useEditorNodeSelectionCommands() {
  const { editor } = useEditor()

  function setNodeSelection(pos: number) {
    editor.value?.commands.setNodeSelection(pos)
  }

  function setNodeStylesAttrs(
    pos: number,
    { classes, styles }: { classes?: string; styles?: string },
  ) {
    editor.value?.commands.setNodeStylesAttrs(pos, {
      classes,
      styles,
    })
  }

  const canMoveNodeToUp = computed(() => editor.value?.can().moveUp() || false)

  const canMoveNodeToDown = computed(
    () => editor.value?.can().moveDown() || false,
  )

  function moveNodeToUp() {
    editor.value?.chain().focus().moveUp().run()
  }

  function moveNodeToDown() {
    editor.value?.chain().focus().moveDown().run()
  }

  const canTransformToHeading2 = computed(
    () => editor.value?.can().transformToHeading(2) || false,
  )

  const canTransformToHeading3 = computed(
    () => editor.value?.can().transformToHeading(3) || false,
  )

  const canTransformToParagraph = computed(
    () => editor.value?.can().transformToParagraph() || false,
  )

  const canTransformToBulletList = computed(
    () => editor.value?.can().transformToList('bulletList') || false,
  )

  const canTransformToOrderedList = computed(
    () => editor.value?.can().transformToList('orderedList') || false,
  )

  function transformToHeading(level: HeadingLevel) {
    editor.value?.chain().focus().transformToHeading(level).run()
  }

  function transformToParagraph() {
    editor.value?.chain().focus().transformToParagraph().run()
  }

  function transformToList(type: 'bulletList' | 'orderedList') {
    editor.value?.chain().focus().transformToList(type).run()
  }

  function insertNode(nodeName: EditorRootNodes, nodeAttrs?: Attrs) {
    editor.value?.chain().focus().insertNode(nodeName, nodeAttrs).run()
  }

  function removeNode() {
    editor.value?.chain().focus().deleteSelection().run()
  }

  return {
    setNodeSelection,
    setNodeStylesAttrs,
    canMoveNodeToUp,
    canMoveNodeToDown,
    moveNodeToUp,
    moveNodeToDown,
    canTransformToHeading2,
    canTransformToHeading3,
    canTransformToParagraph,
    canTransformToBulletList,
    canTransformToOrderedList,
    transformToHeading,
    transformToParagraph,
    transformToList,
    insertNode,
    removeNode,
  }
}
