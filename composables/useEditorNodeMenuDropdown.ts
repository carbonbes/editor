export function useEditorNodeMenuDropdown() {
  const open = ref(false)

  const { node } = useEditorNodesCursorTracking()
  const { setFocusedNode } = useEditorFocusedNode()

  watch(open, (open) => {
    if (open) {
      setFocusedNode(node.value)
    } else {
      setFocusedNode(undefined)
    }
  })

  return { open }
}
