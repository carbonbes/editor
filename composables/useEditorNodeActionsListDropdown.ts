export function useEditorNodeActionsListDropdown() {
  const open = useState(() => false)

  useEditorNodeMenuDropdown({ open })

  return { open }
}
