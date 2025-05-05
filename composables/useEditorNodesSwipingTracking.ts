export type EditorSwipeGestureState = DragGestureState & { node: Element, pos: number }

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

export function useEditorNodesSwipingTracking({ bound = 0, handlers: { onSwipeStart, onSwipe, onSwipeEnd } }: InputArgs) {
  const swipingNode = useState<Element | undefined>()

  const { editor } = useEditor()

  const swipingNodePos = computed(() => {
    if (!editor.value || !swipingNode.value) return

    const view = editor.value.view

    return getEditorNodePos(view, swipingNode.value)
  })

  const { setNodeHtmlAttrs } = useEditorCommands()

  function setNodeTranslateX(x?: number) {
    if (swipingNodePos.value === undefined) return

    setNodeHtmlAttrs(swipingNodePos.value, {
      classes: x ? '!transition-none' : '',
      styles: x ? `transform: translateX(${x}px)` : '',
    })
  }

  const editorView = useState<Element | undefined>()

  function emitSwipe(type: 'start' | 'drag' | 'end', state: DragGestureState) {
    const payload = {
      ...state,
      node: swipingNode.value as Element,
      pos: swipingNodePos.value as number
    }

    if (type === 'start') onSwipeStart?.(payload)
    if (type === 'drag') onSwipe?.(payload)
    if (type === 'end') onSwipeEnd?.(payload)
  }

  function handleDragStart(state: DragGestureState) {
    const {
      cancel,
      xy: [x, y],
    } = state

    const node = getEditorNodeByCoords(x, y)

    if (!node) {
      cancel()

      return
    }

    swipingNode.value = node

    emitSwipe('start', state)
  }

  function handleDrag(state: DragGestureState) {
    const {
      movement: [movementX],
    } = state

    setNodeTranslateX(movementX)

    emitSwipe('drag', state)
  }

  async function handleDragEnd(state: DragGestureState) {
    setNodeTranslateX()

    emitSwipe('end', state)
  }

  useDragGesture({
    target: editorView,

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

  function init() {
    editorView.value = editor.value?.view.dom
  }

  onMounted(init)
}
