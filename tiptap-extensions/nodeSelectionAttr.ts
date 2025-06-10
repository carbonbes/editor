import { Extension } from '@tiptap/vue-3'
import { Decoration, DecorationSet } from 'prosemirror-view'
import { Plugin, PluginKey } from '@tiptap/pm/state'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeSelectionAttr: {
      setSelected: (value: boolean) => ReturnType
      toggleSelected: () => ReturnType
    }
  }
}

const decorationKey = new PluginKey('nodeSelectionAttr')

export const NodeSelectionAttr = Extension.create({
  name: 'nodeSelectionAttr',

  addGlobalAttributes() {
    return [
      {
        types: [...EDITOR_ROOT_NODES],

        attributes: {
          selected: {
            renderHTML(attributes) {
              if (!attributes.selected) return {}

              return { 'data-selected': attributes.selected }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setSelected:
        (value) =>
        ({ dispatch, state: { selection, doc }, tr }) => {
          if (!dispatch) return false

          const { from } = selection

          const node = doc.nodeAt(from)
          if (!node) return false

          const deco = Decoration.node(from, from + node.nodeSize, {
            'data-selected': value.toString(),
          })

          const decoSet = DecorationSet.create(doc, [deco])

          dispatch(
            tr.setMeta('addToHistory', false).setMeta(decorationKey, decoSet),
          )

          return true
        },

      toggleSelected:
        () =>
        ({ state: { selection, doc }, commands }) => {
          const { from } = selection

          const node = doc.nodeAt(from)
          if (!node) return false

          const selected = node.attrs.selected as boolean

          return commands.setSelected(!selected)
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
