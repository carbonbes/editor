export function useEditorView() {
  const { editor } = useEditor()

  const view = computed(() => editor.value?.view)
  const dom = computed(() => view.value?.dom)

  return { view, dom }
}
