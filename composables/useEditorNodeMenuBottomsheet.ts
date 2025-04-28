type InputArgs = {
  direction: 'left' | 'right'
  threshold: number,
}

export function useEditorNodeMenuBottomsheet({ direction, threshold }: InputArgs) {
  const open = ref(false)
  const directionX = ref<number | null>(null)

  const { setNodeSelection, clearNodeSelection } = useEditorCommands()
  const { setFocusedNode } = useEditorFocusedNode()

  watch(open, (open) => {
    if (open) {
      setNodeSelection()
    } else {
      clearNodeSelection()
      setFocusedNode(null)
      directionX.value = null
    }
  })

  function isExpectedDirection(directionX: number) {
    return direction === 'left' ? directionX === -1 : directionX === 1
  }

  function handleSwipeStart({ xy: [x, y], direction: [dirX] }: DragGestureState) {
    directionX.value = dirX

    if (isExpectedDirection(dirX)) {
      const node = getEditorNodeByCoords(x, y)

      if (!node) return

      setFocusedNode(node)
    }
  }

  function handleSwipeEnd({ movement: [movementX] }: DragGestureState) {
    if (isExpectedDirection(directionX.value as number) && Math.abs(movementX) >= threshold) {
      open.value = true
    } else {
      directionX.value = null
      setFocusedNode(null)
    }
  }

  useEditorNodesSwipingTracking({
    bound: threshold,
    handlers: {
      onSwipeStart: handleSwipeStart,
      onSwipeEnd: handleSwipeEnd,
    },
  })

  return { open }
}
