type InputArgs = {
  direction: 'left' | 'right'
  threshold: number,
}

export function useEditorNodeMenuBottomsheet({ direction, threshold }: InputArgs) {
  const open = ref(false)

  const { setNodeSelection, clearNodeSelection } = useEditorCommands()
  const { setFocusedNode } = useEditorFocusedNode()

  watch(open, (open) => {
    if (open) {
      setNodeSelection()
    } else {
      clearNodeSelection()
      setFocusedNode(null)
    }
  })

  function isExpectedDirection(directionX: number) {
    return direction === 'left' ? directionX === -1 : directionX === 1
  }

  function handleSwipeEnd({ direction: [directionX], movement: [movementX], xy: [x, y] }: DragGestureState) {
    if (isExpectedDirection(directionX) && Math.abs(movementX) >= threshold) {
      const node = getEditorNodeByCoords(x, y)

      if (!node) return

      setFocusedNode(node)
      open.value = true
    }
  }

  useEditorNodesSwipingTracking({
    bound: threshold,
    handlers: {
      onSwipeEnd: handleSwipeEnd,
    },
  })

  return { open }
}
