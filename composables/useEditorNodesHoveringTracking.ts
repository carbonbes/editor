export function useEditorNodesHoveringTracking() {
  const node = useState<Element | undefined>()

  const { isTouch } = useDevice()
  const { node: focusedNode } = useEditorFocusedNode()
  const { dom } = useEditorView()

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
      node.value = undefined

      return
    }

    const children = dom.value.children

    for (const child of children) {
      const childRect = child.getBoundingClientRect()

      if (clientY >= childRect.top && clientY <= childRect.bottom) {
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
