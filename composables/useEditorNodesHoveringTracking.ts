export function useEditorNodesHoveringTracking() {
  const node = useState<Element | null>(() => null)

  const { isTouch } = useDevice()
  const { node: focusedNode } = useEditorFocusedNode()
  const { dom } = useEditorView()

  function handleMouseMove(e: MouseEvent) {
    if (isTouch.value || focusedNode.value || !dom.value) return

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

  function handleMouseLeave(e: MouseEvent) {
    const relatedTarget = e.relatedTarget

    if (
      (relatedTarget &&
        contentRef.value &&
        contentRef.value.$el.contains(relatedTarget)) ||
      focusedNode.value
    ) {
      return
    }

    node.value = null
  }

  function init() {
    useEventListener(dom, 'mousemove', handleMouseMove, { passive: true })
    useEventListener(dom, 'mouseleave', handleMouseLeave)
  }

  onMounted(init)

  return { node }
}
