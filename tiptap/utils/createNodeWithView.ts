import { Node, type NodeViewProps, VueNodeViewRenderer } from '@tiptap/vue-3'

type CreateNodeWithViewOptions = Parameters<typeof Node.create>[0] & {
  nodeView: Component<NodeViewProps>
}

export function createNodeWithView(options: CreateNodeWithViewOptions) {
  return Node.create({
    ...options,

    renderHTML() {
      return 'div'
    },

    addNodeView() {
      return VueNodeViewRenderer(options.nodeView, {
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
  })
}
