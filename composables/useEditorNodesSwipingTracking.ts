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
  const node = useState<Element | null>(() => null)

  const { editor } = useEditor()

  const nodePos = computed(() => {
    if (!editor.value || !node.value) return

    const view = editor.value.view

    return getEditorNodePos(view, node.value)
  })

  const { setNodeStyles } = useEditorCommands()

  function setNodeTranslateX(x?: number) {
    if (nodePos.value === undefined) return

    setNodeStyles(nodePos.value, {
      styles: x ? `transition: none; transform: translateX(${x}px)` : '',
    })
  }

  const editorView = useState<Element | undefined>()

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

  return { node }
}
