import type { EditorView } from '@tiptap/pm/view'

export function getEditorNodePos(view: EditorView, node: Element) {
  if (!view || !node) return

  return view.posAtDOM(node, 0) - 1
}
