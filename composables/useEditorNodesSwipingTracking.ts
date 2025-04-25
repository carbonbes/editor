type SwipeState = DragGestureState

type SwipeHandler = (state: SwipeState) => void

type InputArgs = {
  onSwipeStart?: SwipeHandler
  onSwipe?: SwipeHandler
  onSwipeEnd?: SwipeHandler
}

export default function ({ onSwipeStart, onSwipe, onSwipeEnd }: InputArgs) {
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
          tap,
          cancel,
          xy: [x, y],
        } = state

        if (tap) cancel()

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
      bounds: { left: -100, right: 100 },
      rubberband: true,
      from: [0, 0],
      filterTaps: true,
    },
  })

  async function init() {
    await until(editor).toBeTruthy()

    editorElement.value = editor.value!.view.dom
  }

  onMounted(init)
}
