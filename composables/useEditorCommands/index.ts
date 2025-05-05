import { NodeSelection, TextSelection } from '@tiptap/pm/state'

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

  const canMoveNodeToUp = computed(() => {
    if (!editor.value) return false

    return editor.value.can().moveUp()
  })

  const canMoveNodeToDown = computed(() => {
    if (!editor.value) return false

    return editor.value.can().moveDown()
  })

  function moveNodeToUp() {
    editor.value?.chain().focus().moveUp().run()
  }

  function moveNodeToDown() {
    editor.value?.chain().focus().moveDown().run()
  }

  return {
    setNodeSelection,
    clearNodeSelection,
    setNodeHtmlAttrs,
    canMoveNodeToUp,
    canMoveNodeToDown,
    moveNodeToUp,
    moveNodeToDown,
  }
}
