import { NodeSelection, TextSelection } from '@tiptap/pm/state'
import { type Editor } from '@tiptap/vue-3'

export default function () {
  const { editor } = useEditor()
  const { pos } = useEditorFocusedNode()

  function setNodeSelection() {
    const { view, state } = editor.value as Editor

    if (pos.value === undefined) {
      console.warn(
        'Невозможно установить выделение узла, потому что отсутствует его позиция'
      )

      return
    }

    view.dispatch(
      state.tr
        .setMeta('setNodeSelection', true)
        .setSelection(NodeSelection.create(state.doc, pos.value))
    )
  }

  function clearNodeSelection() {
    const { view, state } = editor.value as Editor

    view.dispatch(
      state.tr
        .setMeta('clearNodeSelection', true)
        .setSelection(TextSelection.create(state.doc, 0))
    )
  }

  function setNodeHtmlAttrs(
    pos: number,
    { classes, styles }: { classes?: string; styles?: string }
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
