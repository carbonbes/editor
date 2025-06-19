export function useEditorNodesListDropdownMenu() {
  const open = useState(() => false)

  useEditorNodeMenuDropdown(open)

  return { open }
}
