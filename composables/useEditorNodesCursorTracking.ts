export function useEditorNodesCursorTracking() {
  const { isTouch } = useDevice()
  const { node: focusedNode } = useEditorFocusedNode()
  const { dom } = useEditorView()
  const { setNode } = useEditorHoveredNode()

  function handleMouseMove(e: MouseEvent) {
    if (isTouch.value || focusedNode.value || !dom.value) return

    const { clientX, clientY } = e

    const rect = dom.value.getBoundingClientRect()

    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      setNode(undefined)

      return
    }

    const children = dom.value.children

    for (const child of children) {
      const childRect = child.getBoundingClientRect()

      if (clientY >= childRect.top && clientY < childRect.bottom) {
        setNode(child)

        return
      }
    }

    setNode(undefined)
  }

  function init() {
    useEventListener(window, 'mousemove', handleMouseMove, { passive: true })
  }

  onMounted(init)
}
