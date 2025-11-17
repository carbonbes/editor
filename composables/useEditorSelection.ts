import { TextSelection, NodeSelection } from '@tiptap/pm/state'

export function useEditorSelection() {
  const editor = useEditor()

  const selection = computed(() => editor.value?.state.selection)

  const textSelection = computed(() =>
    selection.value instanceof TextSelection ? selection.value : undefined,
  )

  const nodeSelection = computed(() =>
    selection.value instanceof NodeSelection ? selection.value : undefined,
  )

  const textSelectionIsEmpty = computed(() => {
    if (!textSelection.value) return true

    const { from, to } = textSelection.value

    return from === to
  })

  return {
    selection,
    textSelection,
    nodeSelection,
    textSelectionIsEmpty,
  }
}
