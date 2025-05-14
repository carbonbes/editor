type Node = Ref<Element | null> | Ref<Element | undefined>

export function useEditorNodePos(node: Node) {
  const { view } = useEditorView()

  return computed(() => {
    if (!view.value || !node.value) return

    return view.value.posAtDOM(node.value, 0) - 1
  })
}
