import { Editor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { NodeStylesAttrs } from '~/tiptap-extensions/nodeStylesAttrs'
import { NodeTestIdAttr } from '~/tiptap-extensions/nodeTestIdAttr'
import { NodeMoving } from '~/tiptap-extensions/nodeMoving'
import { NodeTransform } from '~/tiptap-extensions/nodeTransform'
import { NodeInsert } from '~/tiptap-extensions/nodeInsert'

export function useEditor() {
  const editor = useState<Editor | undefined>()

  function init(content?: Content) {
    if (editor.value) return

    editor.value = new Editor({
      content,

      extensions: [
        StarterKit,
        NodeStylesAttrs,
        NodeTestIdAttr,
        NodeMoving,
        NodeTransform,
        NodeInsert,
      ],

      editorProps: {
        attributes: {
          class: `sm:mx-auto p-4 sm:pl-22 w-full max-w-[640px] h-full prose touch-pan-y focus:outline-none [&>*]:transition-transform`,
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
