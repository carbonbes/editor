type SwipeState = DragGestureState

type SwipeHandler = (state: SwipeState) => void

type InputArgs = {
  bound: number
  handlers: {
    onSwipeStart?: SwipeHandler
    onSwipe?: SwipeHandler
    onSwipeEnd?: SwipeHandler
  }
}

export function useEditorNodesSwipingTracking({ bound, handlers: { onSwipeStart, onSwipe, onSwipeEnd } }: InputArgs) {
  const swipingNode = useState<Element | undefined>()

  const { editor } = useEditor()

  const swipingNodePos = computed(() => {
    if (!editor.value || !swipingNode.value) return

    const view = editor.value.view

    return getEditorNodePos(view, swipingNode.value)
  })

  const { setNodeHtmlAttrs } = useEditorCommands()

  function setNodeTranslateX(x: number) {
    if (swipingNodePos.value === undefined) return

    setNodeHtmlAttrs(swipingNodePos.value, {
      classes: '!transition-none',
      styles: `transform: translateX(${x}px)`,
    })
  }

  function clearNodeTranslateX() {
    if (swipingNodePos.value === undefined) return

    setNodeHtmlAttrs(swipingNodePos.value, {
      classes: '',
      styles: '',
    })
  }

  const editorElement = useState<Element | undefined>()

  useDragGesture({
    element: editorElement as Ref<Element>,

    handlers: {
      onDragStart(state) {
        const {
          cancel,
          xy: [x, y],
        } = state

        const node = getEditorNodeByCoords(x, y)

        if (!node) cancel()

        onSwipeStart?.(state)

        swipingNode.value = getEditorNodeByCoords(x, y)
      },

      onDrag(state) {
        onSwipe?.(state)

        const {
          movement: [movementX],
        } = state

        setNodeTranslateX(movementX)
      },

      onDragEnd(state) {
        onSwipeEnd?.(state)

        clearNodeTranslateX()
        swipingNode.value = undefined
      },
    },

    config: {
      axis: 'x',
      bounds: { left: bound * -1, right: bound },
      rubberband: true,
      from: [0, 0],
    },
  })

  async function init() {
    await until(editor).not.toBeUndefined()

    editorElement.value = editor.value!.view.dom
  }

  onMounted(init)
}
