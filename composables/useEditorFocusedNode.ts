export default function () {
  const node = useState<Element | undefined>()

  const { editor } = useEditor()

  const pos = computed(() => {
    if (!editor.value || !node.value) return

    const view = editor.value.view

    const pos = getEditorNodePos(view, node.value)

    return pos && pos >= 0 ? pos : undefined
  })

  function setFocusedNode(element: Element | undefined) {
    node.value = element
  }

  return { node, pos, setFocusedNode }
}
