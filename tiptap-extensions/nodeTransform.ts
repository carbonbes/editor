import { type CommandProps, Extension } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import { NodeSelection } from '@tiptap/pm/state'
import { Fragment, type Attrs, type Node, type Schema } from '@tiptap/pm/model'
import isEqual from 'lodash/isEqual'
import type { EditorRootNodes } from '~/types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeTransform: {
      transformToHeading: (level: Level) => ReturnType
      transformToParagraph: () => ReturnType
      transformToList: (
        type: Extract<EditorRootNodes, 'bulletList' | 'orderedList'>,
      ) => ReturnType
    }
  }
}

function omitAttrs(attrs?: Attrs) {
  if (!attrs) return

  const { testid, selected, ...rest } = attrs

  return rest
}

function getTargetContent(
  selectedNode: Node,
  targetNodeName: string,
  schema: Schema,
) {
  const { type, content } = selectedNode
  const textBlockNodes = EDITOR_TEXTBLOCK_NODES as ReadonlyArray<string>
  const listNodes = EDITOR_LIST_NODES as ReadonlyArray<string>

  const isSelectedList = listNodes.includes(type.name)

  if (textBlockNodes.includes(targetNodeName)) {
    if (isSelectedList) {
      if (selectedNode.childCount > 1) {
        return null
      }

      const listItem = selectedNode.firstChild
      const paragraph = listItem?.firstChild

      return paragraph?.content || Fragment.empty
    }

    return content
  } else if (listNodes.includes(targetNodeName)) {
    if (isSelectedList) return content

    const paragraph = schema.nodes.paragraph.create(null, content)
    const listItem = schema.nodes.listItem.create(null, paragraph)

    return Fragment.from(listItem)
  }

  return content
}

function transformTo(targetNodeName: EditorRootNodes, targetNodeAttrs?: Attrs) {
  return ({ state, dispatch, tr }: CommandProps) => {
    const { selection, schema } = state

    if (!(selection instanceof NodeSelection)) return false

    const selectedNode = selection.node
    const selectedNodeName = selectedNode.type.name
    const selectedNodeAttrs = selectedNode.attrs

    if (
      targetNodeName === selectedNodeName &&
      (!targetNodeAttrs ||
        isEqual(omitAttrs(targetNodeAttrs), omitAttrs(selectedNodeAttrs)))
    ) {
      return false
    }

    const targetContent = getTargetContent(selectedNode, targetNodeName, schema)

    if (targetContent === null) return false

    const node = schema.nodes[targetNodeName].create(
      targetNodeAttrs,
      targetContent,
    )

    dispatch?.(tr.replaceSelectionWith(node))

    return true
  }
}

export const NodeTransform = new Extension({
  name: 'nodeTransform',
  addCommands() {
    return {
      transformToHeading: (level) => transformTo('heading', { level }),
      transformToParagraph: () => transformTo('paragraph'),
      transformToList: (type) => transformTo(type),
    }
  },
})
