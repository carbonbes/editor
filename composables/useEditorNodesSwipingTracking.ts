export type EditorSwipeGestureState = DragGestureState

type EditorSwipeGestureHandler = (state: EditorSwipeGestureState) => void

type EditorSwipeGestureHandlers = {
  onSwipeStart?: EditorSwipeGestureHandler
  onSwipe?: EditorSwipeGestureHandler
  onSwipeEnd?: EditorSwipeGestureHandler
}

type InputArgs = {
  bound?: number
  handlers: EditorSwipeGestureHandlers
}

export function useEditorNodesSwipingTracking({
  bound = 0,
  handlers: { onSwipeStart, onSwipe, onSwipeEnd },
}: InputArgs) {
  const node = ref<Element>()

  const pos = useEditorNodePos(node)
  const { setNodeStylesAttrs } = useEditorCommands()

  function setNodeTranslateX(x?: number) {
    if (pos.value === undefined) return

    setNodeStylesAttrs(pos.value, {
      classes: x ? '!transition-none' : '',
      styles: x ? `transform: translateX(${x}px)` : '',
    })
  }

  function handleDragStart(state: DragGestureState) {
    const {
      cancel,
      xy: [x, y],
    } = state

    const editorNode = getEditorNodeByCoords(x, y)

    if (!editorNode) {
      cancel()

      return
    }

    node.value = editorNode

    onSwipeStart?.(state)
  }

  function handleDrag(state: DragGestureState) {
    const {
      movement: [movementX],
    } = state

    setNodeTranslateX(movementX)
    onSwipe?.(state)
  }

  async function handleDragEnd(state: DragGestureState) {
    setNodeTranslateX()
    onSwipeEnd?.(state)
  }

  const { dom } = useEditorView()

  useDragGesture({
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
  })

  return { node }
}
