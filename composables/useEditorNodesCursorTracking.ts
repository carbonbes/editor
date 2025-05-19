export function useEditorNodesCursorTracking() {
  const node = ref<Element>()

  const { isTouch } = useDevice()

  function handleMouseMove(e: MouseEvent) {
    if (isTouch.value) return

    const { clientX, clientY } = e

    node.value = getEditorNodeByCoords(clientX, clientY)
  }

  function init() {
    useEventListener(window, 'mousemove', handleMouseMove, { passive: true })
  }

  onMounted(init)

  return { node }
}
