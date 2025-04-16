export default function () {
  const node = useState<Element | undefined>()

  const { editor } = useEditor()

  const pos = computed(() => {
    if (!editor.value || !node.value) return

    const view = editor.value.view

    return getEditorNodePos(view, node.value)
  })

  function setFocusedNode(element: Element | undefined) {
    node.value = element
  }

  return { node, pos, setFocusedNode }
}
