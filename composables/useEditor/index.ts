import { Editor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { setNodeHtmlAttrsPlugin } from '~/tiptap-extensions/setNodeHtmlAttrsPlugin'
import { addGlobalTestIdAttrPlugin } from '~/tiptap-extensions/addGlobalTestIdAttrPlugin'
import type { EditorEvents } from '@tiptap/core'
import type { NodeSelection } from '@tiptap/pm/state'

export function useEditor() {
  const editor = useState<Editor | undefined>()
  const nodeSelection = useState<NodeSelection | undefined>('nodeSelection')

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
          class: 'h-full overflow-hidden prose touch-pan-y focus:outline-none [&>*]:relative [&>.ProseMirror-selectednode]:after:absolute [&>.ProseMirror-selectednode]:after:inset-0 [&>.ProseMirror-selectednode]:after:-m-2 [&>.ProseMirror-selectednode]:after:bg-blue-50 [&>.ProseMirror-selectednode]:after:rounded-xl [&>.ProseMirror-selectednode]:after:z-[-1] [&>*]:transition-transform',
        },
      },

      onSelectionUpdate: handleSelectionUpdate,
    })
  }

  function destroy() {
    if (!editor.value) return

    editor.value.destroy()
    editor.value = undefined
  }

  function handleSelectionUpdate({ transaction: tr, transaction: { selection } }: EditorEvents['selectionUpdate']) {
    const isSetNodeSelection = tr.getMeta('setNodeSelection') as boolean
    const isClearNodeSelection = tr.getMeta('clearNodeSelection') as boolean

    if (isSetNodeSelection) {
      nodeSelection.value = selection as NodeSelection
    } else if (isClearNodeSelection) {
      nodeSelection.value = undefined
    }
  }

  return { editor, nodeSelection, init, destroy }
}
