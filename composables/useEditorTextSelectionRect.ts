import type { VirtualElement } from '@floating-ui/core'

export function useEditorTextSelectionRect() {
  const { textSelection } = useEditorSelection()
  const { view } = useEditorView()

  const rect = computed(() => {
    if (!textSelection.value || !view.value) return

    const { from, to } = textSelection.value

    const start = view.value.domAtPos(from)
    const end = view.value.domAtPos(to)

    const range = document.createRange()
    range.setStart(start.node, start.offset)
    range.setEnd(end.node, end.offset)

    return range.getBoundingClientRect()
  })

  const virtualEl = computed<VirtualElement | undefined>(() => {
    if (!rect.value) return

    return {
      getBoundingClientRect() {
        return rect.value
      },
    }
  })

  return { rect, virtualEl }
}
