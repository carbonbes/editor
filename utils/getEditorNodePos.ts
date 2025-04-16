import type { EditorView } from '@tiptap/pm/view'

export default function (view: EditorView, node: Element) {
  if (!view || !node) return

  const { left, top } = node.getBoundingClientRect()

  return view.posAtCoords({ left, top })?.inside
}
