import type { EditorNodeMenuPopoverContext } from '~/components/Editor/NodeMenu/Popover'
import { editorNodeMenuPopoverInjectionKey } from '~/injectionKeys'

export function useEditorNodeMenuPopover() {
  return inject(
    editorNodeMenuPopoverInjectionKey,
  ) as EditorNodeMenuPopoverContext
}
