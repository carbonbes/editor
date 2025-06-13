import { Editor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { NodeTestIdAttr } from '~/tiptap-extensions/nodeTestIdAttr'
import { NodeMoving } from '~/tiptap-extensions/nodeMoving'
import { NodeTransform } from '~/tiptap-extensions/nodeTransform'
import { NodeInsert } from '~/tiptap-extensions/nodeInsert'
import { MediaNode } from '~/tiptap-extensions/mediaNode'
import { NodeSelectionAttr } from '~/tiptap-extensions/nodeSelectionAttr'
import { NodeAttr } from '~/tiptap-extensions/nodeAttr'

export function useEditor() {
  const editor = useState<Editor | undefined>()

  function init(content?: Content) {
    if (editor.value) return

    editor.value = new Editor({
      content,

      extensions: [
        StarterKit,
        NodeTestIdAttr,
        NodeMoving,
        NodeTransform,
        NodeInsert,
        MediaNode,
        NodeSelectionAttr,
        NodeAttr,
      ],

      editorProps: {
        attributes: {
          class: `p-4 sm:pl-22 pb-50 overflow-x-hidden prose prose-img:my-0 prose-video:my-0 touch-pan-y focus:outline-none [&>*]:data-[selected=true]:relative [&>*]:data-[selected=true]:before:absolute [&>*]:data-[selected=true]:before:inset-0 [&>*]:data-[selected=true]:before:-m-2 [&>*]:data-[selected=true]:before:bg-blue-50 [&>*]:data-[selected=true]:before:rounded-xl [&>*]:data-[selected=true]:before:z-[-1] [&>*]:transition-transform`,
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
