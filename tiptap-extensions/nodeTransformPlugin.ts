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
    tr,
    state: { selection, schema },
    dispatch,
  }: CommandProps) {
    if (!(selection instanceof NodeSelection)) return false

    const selectedNode = selection.node
    const selectedNodeName = selectedNode.type.name
    const selectedNodeAttrs = selectedNode.attrs
    const selectedNodeContent = selectedNode.content
    const selectedNodeMarks = selectedNode.marks

    const isConvertingToText = EDITOR_TEXTBLOCK_NODES.includes(targetNodeName)

    const isConvertingToList =
      EDITOR_LIST_NODES.includes(targetNodeName) &&
      EDITOR_TEXTBLOCK_NODES.includes(selectedNodeName)

    const isSingleItemList =
      EDITOR_LIST_NODES.includes(selectedNodeName) &&
      selectedNodeContent.childCount === 1

    const flatContent =
      isSingleItemList && isConvertingToText
        ? selectedNodeContent.child(0).content
        : selectedNodeContent

    const listContent = isConvertingToList
      ? [schema.nodes.listItem.create(null, flatContent, selectedNodeMarks)]
      : flatContent

    const isTransformToSameNode =
      targetNodeName === selectedNodeName &&
      (targetNodeAttrs ? isEqual(targetNodeAttrs, selectedNodeAttrs) : true)

    const isTransformOfAListWithMultipleItems =
      isConvertingToText &&
      EDITOR_LIST_NODES.includes(selectedNodeName) &&
      !isSingleItemList

    if (isTransformToSameNode || isTransformOfAListWithMultipleItems) {
      return false
    }

    const nodeType = schema.nodes[targetNodeName]

    const content = isConvertingToList ? listContent : flatContent

    const node = nodeType.create(targetNodeAttrs, content, selectedNodeMarks)

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
