export function useEditorNodeMenuDropdown(open: Ref<boolean>) {
  const { setFocusedNode } = useEditorFocusedNode()
  const { node } = useEditorNodesHoverTracking()

  watch(open, (open) => setFocusedNode(open ? node.value : null))
}
