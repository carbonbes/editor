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

  const { dom } = useEditorView()

  function init() {
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

  const { isTouch } = useDevice()

  watchImmediate(isTouch, (isTouch) => {
    if (isTouch) destroy()
    else init()
  })
}
