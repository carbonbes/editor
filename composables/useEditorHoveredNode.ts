export function useEditorHoveredNode() {
  const node = useState<Element | undefined>()

  function setNode(element: Element | undefined) {
    node.value = element
  }

  return { node, setNode }
}
