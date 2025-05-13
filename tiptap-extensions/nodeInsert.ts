import { Extension } from '@tiptap/core'
import type { Attrs } from '@tiptap/pm/model'
import { NodeSelection } from '@tiptap/pm/state'
import type { EditorRootNodes } from '~/types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeInsert: {
      insertNode: (
        nodeName: EditorRootNodes,
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

            return listNodeType.create(null, listItemType.createAndFill())
          }

          function createQuoteNode() {
            const quoteNodeType = nodes.blockquote
            const paragraphNodeType = nodes.paragraph

            return quoteNodeType.create(null, paragraphNodeType.create())
          }

          function createRegularNode() {
            const nodeType = nodes[nodeName]

            return nodeType.create(nodeAttrs)
          }

          function createNode() {
            const listNodes = EDITOR_LIST_NODES as ReadonlyArray<string>

            if (listNodes.includes(nodeName)) {
              return createListNode()
            } else if (nodeName === EDITOR_BLOCKQUOTE_NODE) {
              return createQuoteNode()
            }

            return createRegularNode()
          }

          const node = createNode()

          dispatch(tr.insert(insertPos, node))

          return true
        },
    }
  },
})
