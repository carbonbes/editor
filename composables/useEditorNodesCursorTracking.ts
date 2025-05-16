export function useEditorNodesCursorTracking() {
  const node = ref<Element>()

  const { nodeSelection } = useEditorSelection()

  function getNodeByCursor(e: MouseEvent) {
    if (nodeSelection.value) return

    const { clientX: x, clientY: y } = e

    node.value = getEditorNodeByCoords(x, y)
  }

  const { isTouch } = useDevice()

  function init() {
    if (isTouch.value) return

    const listenerOptions = { passive: true }

    useEventListener(window, 'mousemove', getNodeByCursor, listenerOptions)

    useEventListener(
      window,
      'mouseleave',
      () => {
        node.value = undefined
      },
      listenerOptions,
    )
  }

  onMounted(init)

  return { node }
}
