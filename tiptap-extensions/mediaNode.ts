import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import { Plugin, PluginKey } from '@tiptap/pm/state'
import type { EditorView } from '@tiptap/pm/view'
import MediaNodeView from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'

export type MediaItemId = ReturnType<typeof window.crypto.randomUUID>

export interface MediaItemMeta {
  width: number
  height: number
  extension: string
  mime: string
  thumbnail: string | null
}

export interface MediaItem {
  id: MediaItemId
  src: string
  meta: MediaItemMeta
}

export interface MediaNodeAttrs {
  media: MediaItem[] | null
}

async function getMediaMeta(
  media: string | ArrayBuffer,
): Promise<MediaItemMeta | null> {
  const { width, height } =
    (await getDimensionsFromBase64Media(media as string)) || {}

  const buffer = getBufferFromBase64(media as string)

  const { ext: extension, mime } = (await getFileTypeFromBuffer(buffer)) || {}

  const group = await getMediaGroupFromBase64Media(media as string)

  if (!width || !height || !extension || !mime || !group) return null

  const thumbnail =
    group === 'video'
      ? await getThumbnailFromBase64Video(media as string)
      : null

  return {
    width,
    height,
    extension,
    mime,
    thumbnail,
  }
}

export async function getMediaItemsFromFiles(files: File[]) {
  return await Promise.all(
    files.map(async (file) => {
      const base64 = await getBase64FromFile(file)
      if (!base64) return

      const id = window.crypto.randomUUID()
      const src = base64
      const meta = await getMediaMeta(base64)

      return { id, src, meta }
    }),
  )
}

async function createMediaNode(
  { state: { schema, tr }, dispatch }: EditorView,
  files: File[],
) {
  let media: MediaItem[]

  try {
    media = await getMediaItemsFromFiles(files)
  } catch (e) {}

  const mediaNode = schema.nodes.media.create({
    media,
  })

  dispatch(tr.insert(tr.selection.anchor, mediaNode))
}

async function handleEvent(
  view: EditorView,
  event: ClipboardEvent | DragEvent,
) {
  const files = getFilesFromEvent(event, [
    ...ALLOWED_IMAGE_MIME_TYPES,
    ...ALLOWED_VIDEO_MIME_TYPES,
  ])

  if (!files) return false

  await createMediaNode(view, files)

  return true
}

export const MediaNode = Node.create({
  name: 'media',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      media: {
        default: null,
      },
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'media' }), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(MediaNodeView, {
      stopEvent({ event }) {
        event.preventDefault()

        return true
      },
    })
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
