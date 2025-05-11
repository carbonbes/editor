import { Extension } from '@tiptap/core'
import type { Attrs } from '@tiptap/pm/model'
import { NodeSelection } from '@tiptap/pm/state'
import type { EditorRootNodes } from '~/types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeInsert: {
      insertNode: (
        nodeName: Extract<EditorRootNodes, 'bulletList' | 'orderedList'>,
        nodeAttrs?: Attrs,
      ) => ReturnType
    }
  }
}

export const NodeInsert = Extension.create({
  name: 'nodeInsert',

  addCommands() {
    return {
      insertNode:
        (nodeName, nodeAttrs) =>
        ({
          state: {
            selection,
            schema: { nodes },
          },
          tr,
          dispatch,
        }) => {
          if (!(selection instanceof NodeSelection) || !dispatch) return false

          const insertPos = selection.to

          function createListNode() {
            const listNodeType = nodes[nodeName]
            const listItemType = nodes.listItem

            const listItem = listItemType.createAndFill()

            return listNodeType.create(null, listItem)
          }

          function createRegularNode() {
            const nodeType = nodes[nodeName]

            return nodeType.create(nodeAttrs)
          }

          const node = EDITOR_LIST_NODES.includes(nodeName)
            ? createListNode()
            : createRegularNode()

          dispatch(tr.insert(insertPos, node))

          return true
        },
    }
  },
})
