import { Editor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { setNodeHtmlAttrsPlugin } from '~/tiptap-extensions/setNodeHtmlAttrsPlugin'
import { addGlobalTestIdAttrPlugin } from '~/tiptap-extensions/addGlobalTestIdAttrPlugin'

export default function () {
  const editor = useState<Editor | undefined>()

  function init(content?: Content) {
    if (editor.value) return

    editor.value = new Editor({
      content,

      extensions: [
        StarterKit,
        setNodeHtmlAttrsPlugin,
        addGlobalTestIdAttrPlugin,
      ],

      editorProps: {
        attributes: {
          class: '[&>*]:transition-transform prose touch-pan-y focus:outline-none',
        },
      },
    })
  }

  function destroy() {
    if (!editor.value) return

    editor.value.destroy()
    editor.value = undefined
  }

  return { editor, init, destroy }
}
