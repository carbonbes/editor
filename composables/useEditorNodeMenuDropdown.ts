export function useEditorNodeMenuDropdown() {
  const nodesListDropdownOpen = useState(() => false)
  const nodeActionsListDropdownOpen = useState(() => false)

  return { nodesListDropdownOpen, nodeActionsListDropdownOpen }
}
