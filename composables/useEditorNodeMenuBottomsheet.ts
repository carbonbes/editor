type InputArgs = {
  directionTrigger: 'left' | 'right'
  threshold: number,
}

export function useEditorNodeMenuBottomsheet({ directionTrigger, threshold }: InputArgs) {
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
    return directionTrigger === 'left' ? directionX === -1 : directionX === 1
  }

  function handleSwipeEnd({ direction: [directionX], movement: [movementX], node }: EditorSwipeGestureState) {
    if (isExpectedDirection(directionX) && Math.abs(movementX) >= threshold) {
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
