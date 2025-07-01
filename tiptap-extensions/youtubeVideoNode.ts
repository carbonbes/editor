import { createNodeWithView } from '~/tiptap/utils/createNodeWithView'
import { YoutubeNodeView } from '~/components/Editor/NodeViews'
import { PasteRule } from '@tiptap/core'

export const YoutubeVideoNode = createNodeWithView({
  name: 'youtubeVideo',
  group: 'block',
  atom: true,
  content: 'block*',
  nodeView: YoutubeNodeView,

  addAttributes: () => ({
    id: {
      default: null,
    },
  }),

  addPasteRules: () => [
    new PasteRule({
      find: /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=([a-zA-Z0-9_]+)|youtu\.be\/([a-zA-Z\d_]+))(?:&.*)?$/g,
      handler: ({ match, state: { schema, tr } }) => {
        const youtubeVideoNode = schema.nodes.youtubeVideo.create({
          id: match[1],
        })

        tr.replaceSelectionWith(youtubeVideoNode)
      },
    }),
  ],
})
