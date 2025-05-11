import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'
import { Decoration, DecorationSet } from 'prosemirror-view'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeHtmlAttrs: {
      setNodeHtmlAttrs: (
        pos: number,
        { classes, styles }: { classes?: string; styles?: string }
      ) => ReturnType
    }
  }
}

const decorationKey = new PluginKey('nodeHtmlAttrs')

export const NodeHtmlAttrs = Extension.create({
  name: 'nodeHtmlAttrs',

  addCommands() {
    return {
      setNodeHtmlAttrs:
        (pos, { classes, styles }) =>
        ({ dispatch, state: { doc }, tr }) => {
          if (!dispatch) return false

          const node = doc.nodeAt(pos)

          if (!node) return false

          const deco = Decoration.node(pos, pos + node.nodeSize, {
            class: classes,
            style: styles,
          })

          const decoSet = DecorationSet.create(doc, [deco])

          dispatch(
            tr.setMeta('addToHistory', false).setMeta(decorationKey, decoSet)
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
