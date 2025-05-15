import { TextSelection, NodeSelection } from '@tiptap/pm/state'

export function useEditorSelection() {
  const { editor } = useEditor()

  const selection = computed(() => editor.value?.state.selection)

  const textSelection = computed(() =>
    selection.value instanceof TextSelection ? selection.value : undefined,
  )

  const nodeSelection = computed(() =>
    selection.value instanceof NodeSelection ? selection.value : undefined,
  )

  return { selection, textSelection, nodeSelection }
}
