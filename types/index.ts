import type { PopoverContentEmits } from 'reka-ui'

export type PointerDownOutsideEvent =
  PopoverContentEmits['pointerDownOutside'][0]

export type EditorRootNodes = (typeof EDITOR_ROOT_NODES)[number]
