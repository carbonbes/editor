import { type CommandProps, Extension } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import { NodeSelection } from '@tiptap/pm/state'
import type { Node, Attrs } from '@tiptap/pm/model'
import isEqual from 'lodash/isEqual'
import type { EditorRootNodes } from '~/types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    nodeTransformPlugin: {
      transformToHeading: (level: Level) => ReturnType
      transformToParagraph: () => ReturnType
      transformToList: (type: 'bulletList' | 'orderedList') => ReturnType
    }
  }
}

function changeTo(nodeName: EditorRootNodes, nodeAttrs?: Attrs) {
  return function ({
    tr,
    state: { selection, schema },
    dispatch,
  }: CommandProps) {
    if (!(selection instanceof NodeSelection)) return false

    const selectedNode = selection.node

    function getSelectedNodeContent() {
      if (selectedNode.isTextblock && selectedNode.firstChild?.isText) {
        return selectedNode.content
      }

      if (
        ['bulletList', 'orderedList'].includes(selectedNode.type.name) &&
        selectedNode.content.childCount > 1
      ) {
        return selectedNode.content
      }

      let content: Node | null = null

      selectedNode.descendants((child) => {
        if (child.isTextblock && child.firstChild?.isText) {
          content = child.firstChild

          return false
        }

        return true
      })

      return content
    }

    function createNode(nodeName: EditorRootNodes, nodeAttrs?: Attrs) {
      const content = getSelectedNodeContent()

      function createListNode() {
        const listNodeType = schema.nodes[nodeName]
        const paragraphNodeType = schema.nodes.paragraph
        const listItemType = schema.nodes.listItem

        const paragraphNode = paragraphNodeType.create(null, content)
        const listItem = listItemType.create(null, paragraphNode)

        return listNodeType.create(null, listItem)
      }

      function createRegularNode() {
        const nodeType = schema.nodes[nodeName]

        return nodeType.create(nodeAttrs, content)
      }

      return ['bulletList', 'orderedList'].includes(nodeName)
        ? createListNode()
        : createRegularNode()
    }

    if (
      nodeName === selectedNode.type.name &&
      (nodeAttrs ? isEqual(nodeAttrs, selectedNode.attrs) : true)
    ) {
      return false
    }

    if (
      ['heading', 'paragraph'].includes(nodeName) &&
      ['bulletList', 'orderedList'].includes(selectedNode.type.name) &&
      selectedNode.content.childCount > 1
    ) {
      return false
    }

    const newNode = createNode(nodeName, nodeAttrs)

    dispatch?.(tr.replaceSelectionWith(newNode))

    return true
  }
}

export const nodeTransformPlugin = new Extension({
  name: 'nodeTransformPlugin',

  addCommands() {
    return {
      transformToHeading: (level) => changeTo('heading', { level }),
      transformToParagraph: () => changeTo('paragraph'),
      transformToList: (type) => changeTo(type),
    }
  },
})
