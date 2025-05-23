export function useEditorTextSelectionCommands() {
  const { editor } = useEditor()

  const canToggleBold = computed(
    () => editor.value?.can().toggleBold() || false,
  )

  const canToggleItalic = computed(
    () => editor.value?.can().toggleItalic() || false,
  )

  const canToggleStrike = computed(
    () => editor.value?.can().toggleStrike() || false,
  )

  const canToggleCode = computed(
    () => editor.value?.can().toggleCode() || false,
  )

  const boldActive = computed(() => editor.value?.isActive('bold') || false)
  const italicActive = computed(() => editor.value?.isActive('italic') || false)
  const strikeActive = computed(() => editor.value?.isActive('strike') || false)
  const codeActive = computed(() => editor.value?.isActive('code') || false)

  function toggleBold() {
    editor.value?.chain().focus().toggleBold().run()
  }

  function toggleItalic() {
    editor.value?.chain().focus().toggleItalic().run()
  }

  function toggleStrike() {
    editor.value?.chain().focus().toggleStrike().run()
  }

  function toggleCode() {
    editor.value?.chain().focus().toggleCode().run()
  }

  return {
    canToggleBold,
    canToggleItalic,
    canToggleStrike,
    canToggleCode,
    boldActive,
    italicActive,
    strikeActive,
    codeActive,
    toggleBold,
    toggleItalic,
    toggleStrike,
    toggleCode,
  }
}
