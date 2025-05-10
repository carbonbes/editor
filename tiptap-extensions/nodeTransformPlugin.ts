import { type CommandProps, Extension } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import { NodeSelection } from '@tiptap/pm/state'
import type { Attrs } from '@tiptap/pm/model'
import isEqual from 'lodash/isEqual'
import type { EditorRootNodes } from '~/types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    nodeTransformPlugin: {
      transformToHeading: (level: Level) => ReturnType
      transformToParagraph: () => ReturnType
      transformToList: (
        type: Extract<EditorRootNodes, 'bulletList' | 'orderedList'>,
      ) => ReturnType
    }
  }
}

function transformTo(targetNodeName: EditorRootNodes, targetNodeAttrs?: Attrs) {
  return function ({
    state: { selection, schema },
    dispatch,
    tr,
  }: CommandProps) {
    if (!(selection instanceof NodeSelection)) {
      return false
    }

    const selectedNode = selection.node
    const selectedNodeName = selectedNode.type.name
    const selectedNodeAttrs = selectedNode.attrs
    const selectedNodeContent = selectedNode.content

    const textBlockNodes = EDITOR_TEXTBLOCK_NODES as ReadonlyArray<string>
    const listNodes = EDITOR_LIST_NODES as ReadonlyArray<string>

    const isTransformToText = textBlockNodes.includes(targetNodeName)
    const isTransformToList = listNodes.includes(targetNodeName)

    const isSingleItemList =
      listNodes.includes(selectedNodeName) &&
      selectedNodeContent.childCount === 1

    const isMultipleItemsList =
      listNodes.includes(selectedNodeName) && selectedNodeContent.childCount > 1

    const flatContent =
      isSingleItemList && isTransformToText
        ? selectedNodeContent.child(0).child(0).content
        : selectedNodeContent

    const listContent = isTransformToList
      ? [
          schema.nodes.listItem.create(
            null,
            schema.nodes.paragraph.create(null, flatContent),
          ),
        ]
      : flatContent

    const isTransformToSameNode =
      targetNodeName === selectedNodeName &&
      (targetNodeAttrs ? isEqual(targetNodeAttrs, selectedNodeAttrs) : true)

    const isTransformFromMultipleItemsListToText =
      isMultipleItemsList && isTransformToText

    if (isTransformToSameNode || isTransformFromMultipleItemsListToText) {
      return false
    }

    const nodeType = schema.nodes[targetNodeName]

    const targetNodeContent = isTransformToList ? listContent : flatContent

    const node = nodeType.create(targetNodeAttrs, targetNodeContent)

    dispatch?.(tr.replaceSelectionWith(node))

    return true
  }
}

export const nodeTransformPlugin = new Extension({
  name: 'nodeTransformPlugin',

  addCommands() {
    return {
      transformToHeading: (level) => transformTo('heading', { level }),
      transformToParagraph: () => transformTo('paragraph'),
      transformToList: (type) => transformTo(type),
    }
  },
})
