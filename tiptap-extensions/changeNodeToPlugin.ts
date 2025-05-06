import { type CommandProps, Extension } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import { NodeSelection } from '@tiptap/pm/state'
import type { Attrs } from '@tiptap/pm/model'
import isEqual from 'lodash/isEqual'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    changeNodeToPlugin: {
      changeToHeading: (level: Level) => ReturnType
      changeToParagraph: () => ReturnType
      changeToList: (type: 'bulletList' | 'orderedList') => ReturnType
    }
  }
}

function changeNodeTo(nodeName: string, nodeAttrs?: Attrs) {
  return function({ tr, state: { selection, schema }, dispatch }: CommandProps) {
    if (!(selection instanceof NodeSelection)) return false

    const selectedNode = selection.node

    if (nodeName === selectedNode.type.name && (nodeAttrs ? isEqual(nodeAttrs, selectedNode.attrs) : true)) {
      return false
    }

    if (
      ['heading', 'paragraph'].includes(nodeName)
      && ['bulletList', 'orderedList'].includes(selectedNode.type.name)
      && selectedNode.content.childCount > 1
    ) {
      return false
    }

    const newNodeSchema = schema.nodes[nodeName]
    const newNode = newNodeSchema.create(nodeAttrs, selectedNode.content, selectedNode.marks)

    dispatch?.(tr.replaceSelectionWith(newNode))

    return true
  }
}

export const changeNodeToPlugin = new Extension({
  name: 'changeNodeToPlugin',

  addCommands() {
    return {
      changeToHeading: (level) => changeNodeTo('heading', { level }),
      changeToParagraph: () => changeNodeTo('paragraph'),
      changeToList: (type) => changeNodeTo(type),
    }
  },
})
