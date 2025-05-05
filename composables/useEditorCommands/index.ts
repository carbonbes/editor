import { NodeSelection, TextSelection } from '@tiptap/pm/state'
import type { Level as HeadingLevel } from '@tiptap/extension-heading'

export function useEditorCommands() {
  const { editor, nodeSelection } = useEditor()
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

  const canSetHeading2 = computed(() => {
    if (!editor.value) return false

    return editor.value.can().setHeading(2)
  })

  const canSetHeading3 = computed(() => {
    if (!editor.value) return false

    return editor.value.can().setHeading(3)
  })

  function setHeading(level: HeadingLevel) {
    editor.value?.chain().focus().setHeading(level).run()
  }

  function setParagraph() {
    editor.value?.chain().focus().setParagraph().run()
  }

  function setList(type?: 'bullet' | 'ordered') {
    if (type === 'bullet') {
      editor.value?.chain().focus().setList('bulletList').run()
    } else {
      editor.value?.chain().focus().setList('orderedList').run()
    }
  }

  return {
    setNodeSelection,
    clearNodeSelection,
    setNodeHtmlAttrs,
    canMoveNodeToUp,
    canMoveNodeToDown,
    moveNodeToUp,
    moveNodeToDown,
    canSetHeading2,
    canSetHeading3,
    setHeading,
    setParagraph,
    setList,
  }
}
