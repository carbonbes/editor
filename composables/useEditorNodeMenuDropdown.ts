interface UseEditorNodeMenuDropdownOptions {
  open: Ref<boolean>
}

export function useEditorNodeMenuDropdown({
  open,
}: UseEditorNodeMenuDropdownOptions) {
  const { node } = useEditorNodesCursorTracking()
  const { setFocusedNode } = useEditorFocusedNode()

  watch(open, (open) => {
    if (open) {
      setFocusedNode(node.value)
    } else {
      setFocusedNode(undefined)
    }
  })
}
