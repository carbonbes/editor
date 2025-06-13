export type EditorSwipeGestureState = DragGestureState

type EditorSwipeGestureHandler = (state: EditorSwipeGestureState) => void

interface EditorSwipeGestureHandlers {
  onSwipeStart?: EditorSwipeGestureHandler
  onSwipe?: EditorSwipeGestureHandler
  onSwipeEnd?: EditorSwipeGestureHandler
}

interface UseEditorNodesSwipingTrackingOptions {
  bound?: number
  handlers: EditorSwipeGestureHandlers
}

export function useEditorNodesSwipingTracking({
  bound = 0,
  handlers: { onSwipeStart, onSwipe, onSwipeEnd },
}: UseEditorNodesSwipingTrackingOptions) {
  const node = useState<Element | null>(() => null)
  const pos = useEditorNodePos(node)

  const { setNodeAttrs } = useEditorNodeSelectionCommands()

  function setNodeTranslateX(x?: number) {
    if (pos.value === undefined) return

    setNodeAttrs(pos.value, {
      style: x ? `transform: translateX(${x}px); transition: none;` : '',
    })
  }

  function handleDragStart(state: DragGestureState) {
    const {
      xy: [x, y],
    } = state

    node.value = getEditorNodeByCoords(x, y)

    onSwipeStart?.(state)
  }

  function handleDrag(state: DragGestureState) {
    const {
      movement: [movementX],
    } = state

    setNodeTranslateX(movementX)
    onSwipe?.(state)
  }

  function handleDragEnd(state: DragGestureState) {
    setNodeTranslateX()
    onSwipeEnd?.(state)
  }

  const { isTouch } = useDevice()

  function handleDragEvent(
    type: 'start' | 'drag' | 'end',
    state: DragGestureState,
  ) {
    const {
      cancel,
      xy: [x, y],
    } = state

    if (!isTouch.value) {
      cancel()

      return
    }

    if (type === 'start') {
      const node = getEditorNodeByCoords(x, y)

      if (!node) {
        cancel()

        return
      }

      handleDragStart(state)
    }
    if (type === 'drag') handleDrag(state)
    if (type === 'end') handleDragEnd(state)
  }

  const { dom } = useEditorView()

  useDragGesture({
    target: dom,

    handlers: {
      onDragStart: (state) => handleDragEvent('start', state),
      onDrag: (state) => handleDragEvent('drag', state),
      onDragEnd: (state) => handleDragEvent('end', state),
    },

    config: {
      axis: 'x',
      bounds: { left: bound * -1, right: bound },
      rubberband: true,
      from: [0, 0],
    },
  })

  return { node }
}
