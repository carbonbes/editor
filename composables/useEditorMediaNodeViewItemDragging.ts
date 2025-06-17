export function useEditorMediaNodeViewItemDragging() {
  const isDragging = useState(() => false)

  return { isDragging }
}
