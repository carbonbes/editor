import type { Level as HeadingLevel } from '@tiptap/extension-heading'
import type { Attrs } from '@tiptap/pm/model'
import type { EditorRootNodes } from '~/types'

export function useEditorCommands() {
  const { editor } = useEditor()
  const { pos } = useEditorFocusedNode()

  function setNodeSelection() {
    if (pos.value === undefined) {
      console.error(
        'Невозможно установить выделение узла, потому что отсутствует его позиция',
      )

      return
    }

    editor.value?.commands.setNodeSelection(pos.value)
  }

  function setNodeHtmlAttrs(
    pos: number,
    { classes, styles }: { classes?: string; styles?: string },
  ) {
    editor.value?.commands.setNodeHtmlAttrs(pos, {
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
    setNodeHtmlAttrs,
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
