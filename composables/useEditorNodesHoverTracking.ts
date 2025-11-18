export function useEditorNodesHoverTracking() {
  const node = useState<Element | null>(() => null)

  const { dom } = useEditorView()

  function handleMouseMove(e: UseEditorMouseTrackingEvent) {
    if (!dom.value) return

    const { clientY } = e

    for (const child of dom.value.children) {
      const { top: childTop, bottom: childBottom } =
        child.getBoundingClientRect()

      if (clientY >= childTop && clientY <= childBottom) {
        node.value = child

        return
      }
    }

    node.value = null
  }

  const { contentRef } = useEditorNodeMenuPopover()

  function handleMouseLeave(e: UseEditorMouseTrackingEvent) {
    if (!e.relatedTarget || !contentRef.value) return

    const popoverContent = contentRef.value.$el as HTMLElement
    const relatedTarget = e.relatedTarget as HTMLElement

    if (popoverContent.contains(relatedTarget)) {
      return
    }

    node.value = null
  }

  useEditorMouseTracking({
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  })

  return { node }
}
