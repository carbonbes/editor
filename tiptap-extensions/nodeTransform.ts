import { type CommandProps, Extension } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import { NodeSelection } from '@tiptap/pm/state'
import { Fragment, type Attrs, type Node, type Schema } from '@tiptap/pm/model'
import isEqual from 'lodash/isEqual'
import type { EditorRootNodes } from '~/types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeTransform: {
      transform: () => ReturnType
      transformToHeading: (level: Level) => ReturnType
      transformToParagraph: () => ReturnType
      transformToList: (
        type: Extract<EditorRootNodes, 'bulletList' | 'orderedList'>,
      ) => ReturnType
    }
  }
}

function getTargetNodeContent(
  selectedNode: Node,
  targetNodeName: string,
  schema: Schema,
) {
  const {
    childCount: selectedNodeChildCount,
    firstChild: selectedNodeFirstChild,
    type: { name: selectedNodeName },
    content: selectedNodeContent,
  } = selectedNode

  const textBlockNodes = EDITOR_TEXTBLOCK_NODES as ReadonlyArray<string>
  const listNodes = EDITOR_LIST_NODES as ReadonlyArray<string>

  const isSelectedListNode = listNodes.includes(selectedNodeName)
  const isTargetTextBlockNode = textBlockNodes.includes(targetNodeName)
  const isTargetListNode = listNodes.includes(targetNodeName)

  if (isTargetTextBlockNode) {
    if (isSelectedListNode) {
      if (selectedNodeChildCount > 1) {
        return null
      }

      const listItem = selectedNodeFirstChild
      const paragraph = listItem?.firstChild

      return paragraph?.content || Fragment.empty
    }

    return selectedNodeContent
  } else if (isTargetListNode) {
    if (isSelectedListNode) {
      return selectedNodeContent
    }

    const paragraph = schema.nodes.paragraph.create(null, selectedNodeContent)
    const listItem = schema.nodes.listItem.create(null, paragraph)

    return Fragment.from(listItem)
  }

  return selectedNodeContent
}

function omitAttrs(attrs: Attrs) {
  const { testid, selected, ...rest } = attrs

  return rest
}

function transformTo(
  targetNodeName?: EditorRootNodes,
  targetNodeAttrs?: Attrs,
) {
  return ({ state, dispatch, tr }: CommandProps) => {
    const { selection, schema } = state
    if (!(selection instanceof NodeSelection)) return false

    const selectedNode = selection.node
    const {
      type: { name: selectedNodeName },
      attrs: selectedNodeAttrs,
    } = selectedNode

    if (!targetNodeName) {
      const editorNonTransformNodes =
        EDITOR_NON_TRANSFORM_NODES as ReadonlyArray<string>

      return !editorNonTransformNodes.includes(selectedNodeName)
    }

    const isTargetSameNodeName = targetNodeName === selectedNodeName

    const isTargetSameNodeAttrs =
      !targetNodeAttrs ||
      isEqual(omitAttrs(targetNodeAttrs), omitAttrs(selectedNodeAttrs))

    const isTargetSameNode = isTargetSameNodeName && isTargetSameNodeAttrs

    if (isTargetSameNode) {
      return false
    }

    const targetNodeContent = getTargetNodeContent(
      selectedNode,
      targetNodeName,
      schema,
    )

    if (targetNodeContent === null) return false

    const node = schema.nodes[targetNodeName].create(
      targetNodeAttrs,
      targetNodeContent,
    )

    dispatch?.(tr.replaceSelectionWith(node))

    return true
  }
}

export const NodeTransform = new Extension({
  name: 'nodeTransform',

  addCommands() {
    return {
      transform: () => transformTo(),
      transformToHeading: (level) => transformTo('heading', { level }),
      transformToParagraph: () => transformTo('paragraph'),
      transformToList: (type) => transformTo(type),
    }
  },
})
