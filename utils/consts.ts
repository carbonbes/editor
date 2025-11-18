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
export const EDITOR_MEDIA_NODE = 'media' as const

export const EDITOR_ROOT_NODES = [
  ...EDITOR_TEXTBLOCK_NODES,
  ...EDITOR_LIST_NODES,
  EDITOR_BLOCKQUOTE_NODE,
  EDITOR_HORIZONTALRULE_NODE,
  EDITOR_MEDIA_NODE,
] as const

export const EDITOR_BOLD_MARK = 'bold' as const
export const EDITOR_CODE_MARK = 'code' as const
export const EDITOR_ITALIC_MARK = 'italic' as const
export const EDITOR_STRIKE_MARK = 'strike' as const

export const EDITOR_MARKS = [
  EDITOR_BOLD_MARK,
  EDITOR_CODE_MARK,
  EDITOR_ITALIC_MARK,
  EDITOR_STRIKE_MARK,
] as const

export const EDITOR_NON_TRANSFORM_NODES = [
  EDITOR_HORIZONTALRULE_NODE,
  EDITOR_MEDIA_NODE,
  EDITOR_CODEBLOCK_NODE
] as const

export const ALLOWED_IMAGE_MIME_TYPES = [
  'image/png',
  'image/webp',
  'image/jpeg',
  'image/tiff',
  'image/gif',
] as const

export const ALLOWED_VIDEO_MIME_TYPES = [
  'video/mp4',
  'video/webm',
  'video/x-flv',
  'video/mpeg',
] as const
