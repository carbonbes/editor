import type { Level as HeadingLevel } from '@tiptap/extension-heading'
import type { Attrs } from '@tiptap/pm/model'
import type { EditorRootNodes } from '~/types'

export function useEditorCommands() {
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

  const canToggleBold = computed(
    () => editor.value?.can().toggleBold() || false,
  )

  const canToggleItalic = computed(
    () => editor.value?.can().toggleItalic() || false,
  )

  const canToggleStrike = computed(
    () => editor.value?.can().toggleStrike() || false,
  )

  const canToggleCode = computed(
    () => editor.value?.can().toggleCode() || false,
  )

  const boldActive = computed(() => editor.value?.isActive('bold') || false)
  const italicActive = computed(() => editor.value?.isActive('italic') || false)
  const strikeActive = computed(() => editor.value?.isActive('strike') || false)
  const codeActive = computed(() => editor.value?.isActive('code') || false)

  function toggleBold() {
    editor.value?.chain().focus().toggleBold().run()
  }

  function toggleItalic() {
    editor.value?.chain().focus().toggleItalic().run()
  }

  function toggleStrike() {
    editor.value?.chain().focus().toggleStrike().run()
  }

  function toggleCode() {
    editor.value?.chain().focus().toggleCode().run()
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
    canToggleBold,
    canToggleItalic,
    canToggleStrike,
    canToggleCode,
    boldActive,
    italicActive,
    strikeActive,
    codeActive,
    toggleBold,
    toggleItalic,
    toggleStrike,
    toggleCode,
  }
}
