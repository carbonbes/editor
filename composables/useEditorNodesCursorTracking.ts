export function useEditorNodesCursorTracking() {
  const { isTouch } = useDevice()
  const { node: focusedNode } = useEditorFocusedNode()
  const { setNode } = useEditorHoveredNode()

  function handleMouseMove(e: MouseEvent) {
    if (isTouch.value || focusedNode.value) return

    const { clientX, clientY } = e

    setNode(getEditorNodeByCoords(clientX, clientY))
  }

  function init() {
    useEventListener(window, 'mousemove', handleMouseMove, { passive: true })
  }

  onMounted(init)
}
