import { promiseTimeout } from '@vueuse/core'

export function useEditorFocusedNode() {
  const node = useState<Element | null>(() => null)

  const { editor } = useEditor()

  const pos = computed(() => {
    if (!editor.value || !node.value) return

    const view = editor.value.view

    return getEditorNodePos(view, node.value)
  })

  function setFocusedNode(element: Element | null) {
    node.value = element
  }

  const { setNodeSelection, setNodeStyles } = useEditorCommands()

  watch(node, (node) => {
    if (node) {
      setNodeSelection(pos.value!)
    }
  })

  watch(pos, async (newPos, oldPos) => {
    await promiseTimeout(0)

    if (oldPos === undefined) {
      setNodeStyles(newPos!, {
        classes:
          'relative after:absolute after:inset-0 after:-m-2 after:bg-blue-50 after:rounded-xl after:z-[-1]',
      })
    } else if (newPos !== oldPos) {
      setNodeStyles(oldPos!, {
        classes: '',
      })
    }
  })

  return { setFocusedNode }
}
