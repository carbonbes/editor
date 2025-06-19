interface UseEditorNodeMenuBottomsheetOptions {
  open: Ref<boolean>
  directionTrigger: 'left' | 'right'
  threshold: number
}

export function useEditorNodeMenuBottomsheet({
  open,
  directionTrigger,
  threshold,
}: UseEditorNodeMenuBottomsheetOptions) {
  function isExpectedDirection(directionX: number) {
    return directionTrigger === 'left' ? directionX === -1 : directionX === 1
  }

  function handleSwipeEnd({
    direction: [directionX],
    movement: [movementX],
  }: UseEditorNodesSwipeTrackingSwipeState) {
    if (isExpectedDirection(directionX) && Math.abs(movementX) >= threshold) {
      open.value = true
    }
  }

  const { node } = useEditorNodesSwipeTracking({
    bound: threshold,
    handlers: {
      onSwipeEnd: handleSwipeEnd,
    },
  })

  const { setFocusedNode } = useEditorFocusedNode()

  watch(open, (open) => setFocusedNode(open ? node.value : null))
}
