export function useEditorNodesCursorTracking() {
  const node = useState<Element | undefined>()

  const { isTouch } = useDevice()
  const { node: focusedNode } = useEditorFocusedNode()

  function handleMouseMove(e: MouseEvent) {
    if (isTouch.value || focusedNode.value) return

    const { clientX, clientY } = e

    node.value = getEditorNodeByCoords(clientX, clientY)
  }

  function init() {
    useEventListener(window, 'mousemove', handleMouseMove, { passive: true })
  }

  return { node, init }
}
