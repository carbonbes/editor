import { Editor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default function () {
  const editor = useState<Editor | undefined>()

  const isInitialized = computed(() => {
    if (!editor.value) return false

    return editor.value.isInitialized
  })

  function init(content?: Content) {
    if (editor.value) return

    editor.value = new Editor({
      content,
      extensions: [StarterKit],
    })
  }

  function destroy() {
    if (!editor.value) return

    editor.value.destroy()
    editor.value = undefined
  }

  return { editor, isInitialized, init, destroy }
}
