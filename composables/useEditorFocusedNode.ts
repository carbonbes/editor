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

  watch(node, (node) => {
    if (pos.value === undefined) return

    if (node) {
      editor.value?.commands.setNodeHtmlAttrs(pos.value, {
        classes:
          'relative after:absolute after:inset-0 after:-m-2 after:bg-blue-50 after:rounded-xl after:z-[-1]',
      })
    } else {
      editor.value?.commands.setNodeHtmlAttrs(pos.value, { classes: '' })
    }
  })

  return { node, pos, setFocusedNode }
}
