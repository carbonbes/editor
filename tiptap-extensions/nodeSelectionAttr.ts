import { Extension } from '@tiptap/vue-3'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeSelectionAttr: {
      setSelected: (value: boolean) => ReturnType
    }
  }
}

export const NodeSelectionAttr = Extension.create({
  name: 'nodeSelectionAttr',

  addCommands() {
    return {
      setSelected:
        (value) =>
        ({ state: { selection, doc }, commands }) => {
          const { from } = selection

          const node = doc.nodeAt(from)
          if (!node) return false

          return commands.setNodeAttrs(from, { 'data-selected': value })
        },
    }
  },
})
