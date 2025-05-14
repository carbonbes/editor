import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'
import { Decoration, DecorationSet } from 'prosemirror-view'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeStylesAttrs: {
      setNodeStylesAttrs: (
        pos: number,
        { classes, styles }: { classes?: string; styles?: string },
      ) => ReturnType
    }
  }
}

const decorationKey = new PluginKey('nodeStylesAttrs')

export const NodeStylesAttrs = Extension.create({
  name: 'nodeStylesAttrs',
  addCommands() {
    return {
      setNodeStylesAttrs:
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
