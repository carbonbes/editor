type Node = Ref<Element | null | undefined>

export function useEditorNodePos(node: Node) {
  const { view } = useEditorView()

  return computed(() => {
    if (!view.value || !node.value) return

    const { left, top } = node.value.getBoundingClientRect()

    return view.value.posAtCoords({ left, top })?.inside
  })
}
