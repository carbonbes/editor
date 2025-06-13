import { Extension } from '@tiptap/vue-3'
import { Decoration, DecorationSet } from 'prosemirror-view'
import { Plugin, PluginKey } from '@tiptap/pm/state'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeAttrs: {
      setNodeAttrs: (
        pos: number,
        attrs: { class?: string; style?: string } & Record<string, any>,
      ) => ReturnType
    }
  }
}

const decorationKey = new PluginKey('nodeAttrs')

export const NodeAttrs = Extension.create({
  name: 'nodeAttrs',

  addCommands() {
    return {
      setNodeAttrs:
        (pos, attrs) =>
        ({ dispatch, state: { doc }, tr }) => {
          if (!dispatch) return false

          const node = doc.nodeAt(pos)
          if (!node) return false

          const deco = Decoration.node(pos, pos + node.nodeSize, attrs)

          const decoSet = DecorationSet.create(doc, [deco])

          dispatch(
            tr.setMeta('addToHistory', false).setMeta(decorationKey, decoSet),
          )

          return true
        },
    }
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: decorationKey,
        state: {
          init() {
            return DecorationSet.empty
          },

          apply(tr, oldDecoSet) {
            const newDecoSet = tr.getMeta(decorationKey)

            if (newDecoSet) {
              return newDecoSet
            }

            return oldDecoSet.map(tr.mapping, tr.doc)
          },
        },

        props: {
          decorations(state) {
            return this.getState(state)
          },
        },
      }),
    ]
  },
})
