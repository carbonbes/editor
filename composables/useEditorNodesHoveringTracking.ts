export function useEditorNodesHoveringTracking() {
  const node = useState<Element | undefined>()

  const { isTouch } = useDevice()
  const { node: focusedNode } = useEditorFocusedNode()
  const { dom } = useEditorView()

  function handleMouseMove(e: MouseEvent) {
    if (isTouch.value || focusedNode.value || !dom.value) return

    const { clientX, clientY } = e
    const { left, right, top, bottom } = dom.value.getBoundingClientRect()

    if (
      clientX < left ||
      clientX > right ||
      clientY < top ||
      clientY > bottom
    ) {
      node.value = undefined

      return
    }

    for (const child of dom.value.children) {
      const { top: childTop, bottom: childBottom } =
        child.getBoundingClientRect()

      if (clientY >= childTop && clientY <= childBottom) {
        node.value = child

        return
      }
    }

    node.value = undefined
  }

  function init() {
    useEventListener(window, 'mousemove', handleMouseMove, { passive: true })
  }

  onMounted(init)

  return { node }
}
