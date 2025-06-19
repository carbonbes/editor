export type UseEditorSwipeTrackingSwipeEvent = DragGestureState

type UseEditorSwipeTrackingHandler = (
  state: UseEditorSwipeTrackingSwipeEvent,
) => void

interface UseEditorSwipeTrackingHandlers {
  onSwipeStart?: UseEditorSwipeTrackingHandler
  onSwipe?: UseEditorSwipeTrackingHandler
  onSwipeEnd?: UseEditorSwipeTrackingHandler
}

interface UseEditorSwipeTrackingOptions {
  bound?: number
  handlers: UseEditorSwipeTrackingHandlers
}

export function useEditorSwipeTracking({
  bound = 0,
  handlers: { onSwipeStart, onSwipe, onSwipeEnd },
}: UseEditorSwipeTrackingOptions) {
  function handleDragStart(state: DragGestureState) {
    onSwipeStart?.(state)
  }

  function handleDrag(state: DragGestureState) {
    onSwipe?.(state)
  }

  function handleDragEnd(state: DragGestureState) {
    onSwipeEnd?.(state)
  }

  const { dom } = useEditorView()

  const { init: initDragGesture, destroy: destroyDragGesture } = useDragGesture(
    {
      target: dom,

      handlers: {
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragEnd: handleDragEnd,
      },

      config: {
        axis: 'x',
        bounds: { left: bound * -1, right: bound },
        rubberband: true,
        from: [0, 0],
      },
    },
  )

  function init() {
    if (!isTouch.value) return

    initDragGesture()
  }

  function destroy() {
    destroyDragGesture()
  }

  const { isTouch } = useDevice()

  watch(isTouch, (isTouch) => {
    if (!isTouch) destroy()
    else init()
  })

  onMounted(init)
  onBeforeUnmount(destroy)
}
