type Node = Ref<Element | null | undefined>

export function useEditorNodePos(node: Node) {
  const { view } = useEditorView()

  return computed(() => {
    if (!view.value || !node.value) return null

    return view.value.posAtDOM(node.value, 0) - 1
  })
}
