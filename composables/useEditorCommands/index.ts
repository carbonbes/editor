import { NodeSelection, TextSelection } from '@tiptap/pm/state'
import type { Level as HeadingLevel } from '@tiptap/extension-heading'

export function useEditorCommands() {
  const { editor } = useEditor()
  const { pos } = useEditorFocusedNode()

  function setNodeSelection() {
    if (!editor.value) return

    const { view: { dispatch }, state: { tr, doc } } = editor.value

    if (pos.value === undefined) {
      console.error('Невозможно установить выделение узла, потому что отсутствует его позиция')

      return
    }

    dispatch(
      tr
        .setMeta('setNodeSelection', true)
        .setSelection(NodeSelection.create(doc, pos.value)),
    )
  }

  function clearNodeSelection() {
    if (!editor.value) return

    const { view: { dispatch }, state: { tr, doc } } = editor.value

    dispatch(
      tr
        .setMeta('clearNodeSelection', true)
        .setSelection(TextSelection.create(doc, 0, 0)),
    )
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
  const canMoveNodeToDown = computed(() => editor.value?.can().moveDown() || false)

  function moveNodeToUp() {
    editor.value?.chain().focus().moveUp().run()
  }

  function moveNodeToDown() {
    editor.value?.chain().focus().moveDown().run()
  }

  const canChangeToHeading2 = computed(() => editor.value?.can().changeToHeading(2) || false)
  const canChangeToHeading3 = computed(() => editor.value?.can().changeToHeading(3) || false)
  const canChangeToParagraph = computed(() => editor.value?.can().changeToParagraph() || false)
  const canChangeToBulletList = computed(() => editor.value?.can().changeToList('bulletList') || false)
  const canChangeToOrderedList = computed(() => editor.value?.can().changeToList('orderedList') || false)

  function changeToHeading(level: HeadingLevel) {
    editor.value?.chain().focus().changeToHeading(level).run()
  }

  function changeToParagraph() {
    editor.value?.chain().focus().changeToParagraph().run()
  }

  function changeToList(type: 'bulletList' | 'orderedList') {
    editor.value?.chain().focus().changeToList(type).run()
  }

  return {
    setNodeSelection,
    clearNodeSelection,
    setNodeHtmlAttrs,
    canMoveNodeToUp,
    canMoveNodeToDown,
    moveNodeToUp,
    moveNodeToDown,
    canChangeToHeading2,
    canChangeToHeading3,
    canChangeToParagraph,
    canChangeToBulletList,
    canChangeToOrderedList,
    changeToHeading,
    changeToParagraph,
    changeToList,
  }
}
