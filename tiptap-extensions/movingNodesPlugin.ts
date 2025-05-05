import { Extension } from '@tiptap/core'
import type { Transaction } from '@tiptap/pm/state'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    movingNodes: {
      moveUp: () => ReturnType
      moveDown: () => ReturnType
    }
  }
}

function moveNode(direction: 'up' | 'down', tr: Transaction) {
  const { $from, $to } = tr.selection

  const node = direction === 'up' ? $from.nodeBefore : $to.nodeAfter

  if (!node) return false

  const size = node.nodeSize
  const fromPos = direction === 'up' ? $from.pos - size : $to.pos
  const toPos = direction === 'up' ? $to.pos - size : $from.pos

  tr.delete(fromPos, fromPos + size).insert(toPos, node)

  return true
}

export const movingNodesPlugin = Extension.create({
  name: 'movingNodesPlugin',

  addCommands() {
    return {
      moveUp:
        () =>
          ({ tr }) =>
            moveNode('up', tr),

      moveDown:
        () =>
          ({ tr }) =>
            moveNode('down', tr),
    }
  },
})
