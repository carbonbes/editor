export function useEditorNodesListBottomsheet() {
  const open = useState(() => false)

  useEditorNodeMenuBottomsheet({
    open,
    directionTrigger: 'right',
    threshold: 75,
  })

  return { open }
}
