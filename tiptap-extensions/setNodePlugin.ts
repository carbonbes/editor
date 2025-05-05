import { Extension } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import { NodeSelection } from '@tiptap/pm/state'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    setNodePlugin: {
      setHeading: (level: Level) => ReturnType
      setParagraph: () => ReturnType
      setList: (type: 'bulletList' | 'orderedList') => ReturnType
    }
  }
}

export const setNodePlugin = new Extension({
  name: 'setNodePlugin',

  addCommands() {
    return {
      setHeading: (level) => ({ tr, state: { selection, schema }, dispatch }) => {
        if (!(selection instanceof NodeSelection)) return false

        const headingSchema = schema.nodes.heading

        const node = selection.node

        if (node.type.name === 'heading' && node.attrs.level === level) {
          return false
        }

        if (['bulletList', 'orderedList'].includes(node.type.name) && node.content.childCount > 1) {
          return false
        }

        const newNode = headingSchema.create({ level }, node.content, node.marks)

        if (!dispatch) return false

        dispatch(tr.replaceSelectionWith(newNode))

        return true
      },

      setParagraph: () => () => {
        return true
      },

      setList: (type) => () => {
        return true
      },
    }
  },
})
