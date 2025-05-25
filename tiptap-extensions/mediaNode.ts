import { Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import { Plugin, PluginKey } from '@tiptap/pm/state'
import type { EditorView } from '@tiptap/pm/view'
import MediaNodeView from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'

async function createMediaNode(
  {
    state: {
      schema: { nodes },
      tr,
    },
    dispatch,
  }: EditorView,
  file: File,
) {
  try {
    const base64 = await getBase64FromFile(file)

    if (!base64) return

    const mediaNode = nodes.media.create({
      media: [base64],
    })

    dispatch(tr.insert(tr.selection.anchor, mediaNode))
  } catch (error) {}
}

function handleEvent(view: EditorView, event: ClipboardEvent | DragEvent) {
  const items = getFilesFromEvent(event, [
    ...ALLOWED_IMAGE_MIME_TYPES,
    ...ALLOWED_VIDEO_MIME_TYPES,
  ])

  if (!items || items.length > 1) return false

  createMediaNode(view, items[0])

  return true
}

export const MediaNode = Node.create({
  name: 'media',
  group: 'block',

  addAttributes() {
    return {
      media: {
        default: null,
      },
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(MediaNodeView)
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('handleMediaPaste'),

        props: {
          handlePaste: handleEvent,
        },
      }),

      new Plugin({
        key: new PluginKey('handleMediaDrop'),

        props: {
          handleDrop: handleEvent,
        },
      }),
    ]
  },
})
