export function useEditorNodesListDropdown() {
  const open = useState(() => false)

  useEditorNodeMenuDropdown({ open })

  return { open }
}
