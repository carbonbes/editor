import { Extension, type CommandProps } from '@tiptap/core'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeMoving: {
      moveUp: () => ReturnType
      moveDown: () => ReturnType
    }
  }
}

function moveNode(direction: 'up' | 'down') {
  return function ({ tr }: CommandProps) {
    const { $from, $to } = tr.selection

    const node = direction === 'up' ? $from.nodeBefore : $to.nodeAfter

    if (!node) return false

    const size = node.nodeSize
    const fromPos = direction === 'up' ? $from.pos - size : $to.pos
    const toPos = direction === 'up' ? $to.pos - size : $from.pos

    tr.delete(fromPos, fromPos + size).insert(toPos, node)

    return true
  }
}

export const NodeMoving = Extension.create({
  name: 'nodeMoving',

  addCommands() {
    return {
      moveUp: () => moveNode('up'),
      moveDown: () => moveNode('down'),
    }
  },
})
