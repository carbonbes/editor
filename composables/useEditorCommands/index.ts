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

  return {
    setNodeSelection,
    clearNodeSelection,
    setNodeHtmlAttrs,
  }
}
