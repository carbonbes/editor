export function useEditorNodeActionsListBottomsheet() {
  const open = useState(() => false)

  useEditorNodeMenuBottomsheet({
    open,
    directionTrigger: 'left',
    threshold: 75,
  })

  return { open }
}
