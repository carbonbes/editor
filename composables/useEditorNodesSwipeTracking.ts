export type UseEditorNodesSwipeTrackingSwipeState = DragGestureState

type UseEditorNodesSwipeTrackingSwipeGestureHandler = (
  state: UseEditorNodesSwipeTrackingSwipeState,
) => void

interface UseEditorNodesSwipeTrackingSwipeGestureHandlers {
  onSwipeStart?: UseEditorNodesSwipeTrackingSwipeGestureHandler
  onSwipe?: UseEditorNodesSwipeTrackingSwipeGestureHandler
  onSwipeEnd?: UseEditorNodesSwipeTrackingSwipeGestureHandler
}

interface UseEditorNodesSwipeTrackingOptions {
  bound?: number
  handlers: UseEditorNodesSwipeTrackingSwipeGestureHandlers
}

export function useEditorNodesSwipeTracking({
  bound = 0,
  handlers: { onSwipeStart, onSwipe, onSwipeEnd },
}: UseEditorNodesSwipeTrackingOptions) {
  const node = useState<Element | null>(() => null)

  function handleDragStart(state: DragGestureState) {
    const {
      xy: [x, y],
      cancel,
    } = state

    node.value = getEditorNodeByCoords(x, y)
    if (!node.value) {
      cancel()

      return
    }

    onSwipeStart?.(state)
  }

  const { setNodeAttrs } = useEditorNodeSelectionCommands()

  const pos = useEditorNodePos(node)

  function setNodeTranslateX(x?: number) {
    if (pos.value === null) return

    setNodeAttrs(pos.value, {
      style: x ? `transform: translateX(${x}px); transition: none;` : '',
    })
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

  const { isDragging } = useEditorMediaNodeViewItemDragging()

  function handleDragEvent(
    type: 'start' | 'drag' | 'end',
    state: DragGestureState,
  ) {
    const { cancel } = state

    if (isDragging.value) {
      cancel()

      return
    }

    if (type === 'start') handleDragStart(state)
    if (type === 'drag') handleDrag(state)
    if (type === 'end') handleDragEnd(state)
  }

  useEditorSwipeTracking({
    bound,
    handlers: {
      onSwipeStart: (state) => handleDragEvent('start', state),
      onSwipe: (state) => handleDragEvent('drag', state),
      onSwipeEnd: (state) => handleDragEvent('end', state),
    },
  })

  return { node }
}
