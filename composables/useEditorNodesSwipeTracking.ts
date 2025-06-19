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

  function handleSwipeStart(state: DragGestureState) {
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

  function handleSwipe(state: DragGestureState) {
    const {
      movement: [movementX],
    } = state

    setNodeTranslateX(movementX)
    onSwipe?.(state)
  }

  function handleSwipeEnd(state: DragGestureState) {
    setNodeTranslateX()
    onSwipeEnd?.(state)
  }

  const { isDragging } = useEditorMediaNodeViewItemDragging()

  function handleSwipeEvent(
    type: 'start' | 'swipe' | 'end',
    state: DragGestureState,
  ) {
    const { cancel } = state

    if (isDragging.value) {
      cancel()

      return
    }

    if (type === 'start') handleSwipeStart(state)
    if (type === 'swipe') handleSwipe(state)
    if (type === 'end') handleSwipeEnd(state)
  }

  useEditorSwipeTracking({
    bound,
    handlers: {
      onSwipeStart: (state) => handleSwipeEvent('start', state),
      onSwipe: (state) => handleSwipeEvent('swipe', state),
      onSwipeEnd: (state) => handleSwipeEvent('end', state),
    },
  })

  return { node }
}
