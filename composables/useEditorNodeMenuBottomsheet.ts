type InputArgs = {
  directionTrigger: 'left' | 'right'
  threshold: number
}

export function useEditorNodeMenuBottomsheet({
  directionTrigger,
  threshold,
}: InputArgs) {
  const open = ref(false)

  const { setNodeSelection } = useEditorCommands()
  const { setFocusedNode } = useEditorFocusedNode()

  watch(open, (open) => {
    if (open) {
      setFocusedNode(node.value)
      setNodeSelection()
    } else {
      setFocusedNode(null)
    }
  })

  function isExpectedDirection(directionX: number) {
    return directionTrigger === 'left' ? directionX === -1 : directionX === 1
  }

  function handleSwipeEnd({
    direction: [directionX],
    movement: [movementX],
  }: EditorSwipeGestureState) {
    if (isExpectedDirection(directionX) && Math.abs(movementX) >= threshold) {
      open.value = true
    }
  }

  const { node } = useEditorNodesSwipingTracking({
    bound: threshold,
    handlers: {
      onSwipeEnd: handleSwipeEnd,
    },
  })

  return { open }
}
