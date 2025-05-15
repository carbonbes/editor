export function useEditorTextSelectionRect() {
  const { textSelection } = useEditorSelection()
  const { view } = useEditorView()

  return computed(() => {
    if (!textSelection.value || !view.value) return

    const { from, to } = textSelection.value

    const start = view.value.domAtPos(from)
    const end = view.value.domAtPos(to)

    const range = document.createRange()
    range.setStart(start.node, start.offset)
    range.setEnd(end.node, end.offset)

    return Array.from(range.getClientRects())[0]
  })
}
