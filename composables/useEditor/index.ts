import { Editor, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { NodeHtmlAttrs } from '~/tiptap-extensions/nodeHtmlAttrs'
import { NodeTestIdAttr } from '~/tiptap-extensions/nodeTestIdAttr'
import type { EditorEvents } from '@tiptap/core'
import type { NodeSelection } from '@tiptap/pm/state'
import { movingNodesPlugin } from '~/tiptap-extensions/movingNodesPlugin'
import { nodeTransformPlugin } from '~/tiptap-extensions/nodeTransformPlugin'
import { insertNodePlugin } from '~/tiptap-extensions/insertNodePlugin'

export function useEditor() {
  const editor = useState<Editor | undefined>()
  const nodeSelection = useState<NodeSelection | undefined>('nodeSelection')

  function init(content?: Content) {
    if (editor.value) return

    editor.value = new Editor({
      content,

      extensions: [
        StarterKit,
        NodeHtmlAttrs,
        NodeTestIdAttr,
        movingNodesPlugin,
        nodeTransformPlugin,
        insertNodePlugin,
      ],

      editorProps: {
        attributes: {
          class: 'p-4 h-full overflow-x-hidden prose touch-pan-y focus:outline-none [&>*]:relative [&>.ProseMirror-selectednode]:after:absolute [&>.ProseMirror-selectednode]:after:inset-0 [&>.ProseMirror-selectednode]:after:-m-2 [&>.ProseMirror-selectednode]:after:bg-blue-50 [&>.ProseMirror-selectednode]:after:rounded-xl [&>.ProseMirror-selectednode]:after:z-[-1] [&>*]:transition-transform',
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
