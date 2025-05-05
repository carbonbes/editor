export function useEditorFocusedNode() {
  const node = useState<Element | null>(() => null)

  const { editor } = useEditor()

  const pos = computed(() => {
    if (!editor.value || !node.value) return

    const view = editor.value.view

    return getEditorNodePos(view, node.value)
  })

  function setFocusedNode(element: Element | null) {
    node.value = element
  }

  return { node, pos, setFocusedNode }
}
