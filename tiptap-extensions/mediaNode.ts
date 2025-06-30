import { Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import { Plugin, PluginKey } from '@tiptap/pm/state'
import type { EditorView } from '@tiptap/pm/view'
import { MediaNodeView } from '~/components/Editor/NodeViews/MediaNodeView'

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

async function getMediaItemMeta(media: string): Promise<MediaItemMeta | null> {
  const buffer = getBufferFromBase64(media)

  const fileType = await getFileTypeFromBuffer(buffer)
  if (!fileType) return null

  const { ext: extension, mime } = fileType

  const group = mime.startsWith('image/')
    ? 'image'
    : mime.startsWith('video/')
      ? 'video'
      : null

  if (!group) return null

  const dimensions = await getDimensionsFromBase64Media(media)
  if (!dimensions) return null

  const { width, height } = dimensions

  const thumbnail =
    group === 'video' ? await getThumbnailFromBase64Video(media) : null

  return { width, height, extension, mime, thumbnail }
}

export async function getMediaItemsFromFiles(files: File[]) {
  const items: MediaItem[] = []

  for (const file of files) {
    const base64 = (await getBase64FromFile(file)) as string
    if (!base64) return null

    const id = window.crypto.randomUUID()
    const src = base64

    const meta = await getMediaItemMeta(base64)
    if (!meta) return null

    items.push({ id, src, meta })
  }

  return items
}

async function createMediaNode(
  { state: { schema, tr }, dispatch }: EditorView,
  files: File[],
) {
  let media: MediaItem[] | null = null

  try {
    media = await getMediaItemsFromFiles(files)
  } catch (e) {}

  const mediaNode = schema.nodes.media.create({
    media,
  })

  dispatch(tr.replaceSelectionWith(mediaNode))
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
  content: 'block*',

  addAttributes() {
    return {
      media: {
        default: null,
      },
    }
  },

  renderHTML() {
    return 'div'
  },

  addNodeView() {
    return VueNodeViewRenderer(MediaNodeView, {
      stopEvent({ event }) {
        const isTouchDevice = window.matchMedia(
          '(hover: none) and (pointer: coarse)',
        ).matches

        if (isTouchDevice && event.type === 'mousedown') {
          event.preventDefault()
        }

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
