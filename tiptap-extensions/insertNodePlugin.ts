import { Extension } from '@tiptap/core'
import type { Attrs } from '@tiptap/pm/model'
import { NodeSelection } from '@tiptap/pm/state'
import type { EditorRootNodes } from '~/types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    insertNodePlugin: {
      insertNode: (nodeName: EditorRootNodes, nodeAttrs?: Attrs) => ReturnType
    }
  }
}

export const insertNodePlugin = Extension.create({
  name: 'insertNodePlugin',

  addCommands() {
    return {
      insertNode:
        (nodeName: EditorRootNodes, nodeAttrs?: Attrs) =>
          ({ state: { selection, schema: { nodes } }, tr, dispatch }) => {
            if (!(selection instanceof NodeSelection) || !dispatch) return false

            const insertPos = selection.to

            function createListNode() {
              const listNodeType = nodes[nodeName]
              const listItemType = nodes.listItem

              if (!listNodeType || !listItemType) return null

              const listItem = listItemType.createAndFill()

              return listItem ? listNodeType.create(null, listItem) : null
            }

            function createRegularNode() {
              const nodeType = nodes[nodeName]

              return nodeType?.createAndFill(nodeAttrs) ?? null
            }

            const node =
              ['bulletList', 'orderedList'].includes(nodeName)
                ? createListNode()
                : createRegularNode()

            if (!node) return false

            dispatch(tr.insert(insertPos, node))

            return true
          },

    }
  },
})
