export type UseEditorMouseTrackingEvent = MouseEvent

type UseEditorMouseTrackingHandler = (e: UseEditorMouseTrackingEvent) => void

interface UseEditorMouseTrackingHandlers {
  onMouseEnter?: UseEditorMouseTrackingHandler
  onMouseMove?: UseEditorMouseTrackingHandler
  onMouseLeave?: UseEditorMouseTrackingHandler
}

interface UseEditorMouseTrackingOptions {
  handlers: UseEditorMouseTrackingHandlers
}

export function useEditorMouseTracking({
  handlers: { onMouseEnter, onMouseMove, onMouseLeave },
}: UseEditorMouseTrackingOptions) {
  function handleMouseEnter(e: MouseEvent) {
    onMouseEnter?.(e)
  }

  function handleMouseMove(e: MouseEvent) {
    onMouseMove?.(e)
  }

  function handleMouseLeave(e: MouseEvent) {
    onMouseLeave?.(e)
  }

  const cleanup = ref<ReturnType<typeof useEventListener>>()

  const { isTouch } = useDevice()
  const { dom } = useEditorView()

  function init() {
    if (isTouch.value) return

    cleanup.value = useEventListener(
      dom,
      ['mouseenter', 'mousemove', 'mouseleave'],
      [handleMouseEnter, handleMouseMove, handleMouseLeave],
    )
  }

  function destroy() {
    if (!cleanup.value) return

    cleanup.value()
  }

  watch(isTouch, (value) => (value ? destroy() : init()))

  onMounted(init)
  onBeforeUnmount(destroy)
}
