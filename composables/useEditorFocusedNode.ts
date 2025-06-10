export function useEditorFocusedNode() {
  const node = useState<Element | null>(() => null)

  function setFocusedNode(element: Element | null) {
    node.value = element
  }

  const { setNodeSelection, setNodeSelectionAttr } =
    useEditorNodeSelectionCommands()

  const pos = useEditorNodePos(node)

  watch(pos, (pos) => {
    if (pos !== undefined) {
      setNodeSelection(pos)
    }
  })

  watch(node, async (node) => {
    await nextTick()

    setNodeSelectionAttr(!!node)
  })

  return { node, setFocusedNode }
}
