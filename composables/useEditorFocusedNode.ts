import { promiseTimeout } from '@vueuse/shared'

export function useEditorFocusedNode() {
  const node = useState<Element | null>(() => null)

  function setFocusedNode(element: Element | null) {
    node.value = element
  }

  const { setNodeSelection, setNodeSelectionAttr } =
    useEditorNodeSelectionCommands()

  const pos = useEditorNodePos(node)

  watch(pos, (pos) => {
    if (pos !== null) {
      setNodeSelection(pos)
    }
  })

  watch(node, async (node) => {
    await promiseTimeout(0)

    setNodeSelectionAttr(!!node)
  })

  return { node, setFocusedNode }
}
