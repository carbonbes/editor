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
          class: `h-full prose touch-pan-y focus:outline-none [&>*]:relative [&>*]:after:absolute [&>*]:after:inset-0 [&>*]:after:-ml-[92px] [&>*]:after:z-[-1] [&>*]:transition-transform`,
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
