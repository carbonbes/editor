export const EDITOR_HEADING_NODE = 'heading' as const
export const EDITOR_PARAGRAPH_NODE = 'paragraph' as const
export const EDITOR_CODEBLOCK_NODE = 'codeBlock' as const

export const EDITOR_TEXTBLOCK_NODES = [
  EDITOR_HEADING_NODE,
  EDITOR_PARAGRAPH_NODE,
  EDITOR_CODEBLOCK_NODE,
] as const

export const EDITOR_BULLETLIST_NODE = 'bulletList' as const
export const EDITOR_ORDEREDLIST_NODE = 'orderedList' as const

export const EDITOR_LIST_NODES = [
  EDITOR_BULLETLIST_NODE,
  EDITOR_ORDEREDLIST_NODE,
] as const

export const EDITOR_BLOCKQUOTE_NODE = 'blockquote' as const
export const EDITOR_HORIZONTALRULE_NODE = 'horizontalRule' as const

export const EDITOR_ROOT_NODES = [
  ...EDITOR_TEXTBLOCK_NODES,
  ...EDITOR_LIST_NODES,
  EDITOR_BLOCKQUOTE_NODE,
  EDITOR_HORIZONTALRULE_NODE,
] as const
