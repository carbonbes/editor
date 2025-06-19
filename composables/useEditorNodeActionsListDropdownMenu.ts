export function useEditorNodeActionsListDropdownMenu() {
  const open = useState(() => false)

  useEditorNodeMenuDropdown(open)

  return { open }
}
