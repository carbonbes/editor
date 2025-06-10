import { Extension } from '@tiptap/vue-3'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeSelectionAttr: {
      setSelected: (value: boolean) => ReturnType
      toggleSelected: () => ReturnType
    }
  }
}

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
        ({ tr, dispatch }) => {
          if (!dispatch) return false

          const { from } = tr.selection

          dispatch(tr.setNodeAttribute(from, 'selected', value))

          return true
        },

      toggleSelected:
        () =>
        ({ state: { doc }, tr, dispatch }) => {
          if (!dispatch) return false

          const { from } = tr.selection

          const node = doc.nodeAt(from)
          if (!node) return false

          const selected = node.attrs.selected as boolean

          dispatch(tr.setNodeAttribute(from, 'selected', !selected))

          return true
        },
    }
  },
})
