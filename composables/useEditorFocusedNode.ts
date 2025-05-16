import { promiseTimeout } from '@vueuse/core'

export function useEditorFocusedNode() {
  const node = ref<Element>()

  function setFocusedNode(element: Element | undefined) {
    node.value = element
  }

  const { setNodeSelection, setNodeStylesAttrs } = useEditorCommands()
  const pos = useEditorNodePos(node)

  watch(node, (node) => {
    if (node && pos.value !== undefined) {
      setNodeSelection(pos.value)
    }
  })

  function setSelectedNodeStyles(pos: number) {
    setNodeStylesAttrs(pos, {
      classes:
        'relative after:absolute after:inset-0 after:-m-2 after:bg-blue-50 after:rounded-xl after:z-[-1]',
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

  return { setFocusedNode }
}
