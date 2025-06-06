import { promiseTimeout } from '@vueuse/core'

export function useEditorFocusedNode() {
  const node = useState<Element | null>(() => null)

  function setFocusedNode(element: Element | null) {
    node.value = element
  }

  const { setNodeSelection, setNodeStylesAttrs } = useEditorNodeSelectionCommands()
  const pos = useEditorNodePos(node)

  watch(node, (node) => {
    if (node && pos.value !== undefined) {
      setNodeSelection(pos.value)
    }
  })

  function setSelectedNodeStyles(pos: number) {
    setNodeStylesAttrs(pos, {
      classes:
        'relative before:absolute before:inset-0 before:-m-2 before:bg-blue-50 before:rounded-xl before:z-[-1]',
    })
  }

  function clearSelectedNodeStyles(pos: number) {
    setNodeStylesAttrs(pos, {
      classes: '',
    })
  }

  watch(pos, async (newPos, oldPos) => {
    await promiseTimeout(0)

    if (!oldPos && newPos !== undefined) {
      setSelectedNodeStyles(newPos)
    } else if (!newPos && oldPos !== undefined) {
      clearSelectedNodeStyles(oldPos)
    }
  })

  return { node, setFocusedNode }
}
