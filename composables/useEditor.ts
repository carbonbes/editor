import { Editor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { NodeHtmlAttrs } from '~/tiptap-extensions/nodeHtmlAttrs'
import { NodeTestIdAttr } from '~/tiptap-extensions/nodeTestIdAttr'
import { NodeMoving } from '~/tiptap-extensions/nodeMoving'
import { NodeTransform } from '~/tiptap-extensions/nodeTransform'
import { NodeInsert } from '~/tiptap-extensions/nodeInsert'
import { NodeStylesGlobalAttrs } from '~/tiptap-extensions/nodeStylesGlobalAttrs'

export function useEditor() {
  const editor = useState<Editor | undefined>()

  function init(content?: Content) {
    if (editor.value) return

    editor.value = new Editor({
      content,

      extensions: [
        StarterKit,
        NodeHtmlAttrs,
        NodeTestIdAttr,
        NodeMoving,
        NodeTransform,
        NodeInsert,
        NodeStylesGlobalAttrs.configure({
          defaultClass: 'transition-transform'
        }),
      ],

      editorProps: {
        attributes: {
          class: 'p-4 h-full overflow-x-hidden prose touch-pan-y focus:outline-none',
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
