import type { PopoverContent } from 'reka-ui'

export function useEditorNodeMenuPopover() {
  const open = useState(() => false)
  const contentRef = useState<InstanceType<typeof PopoverContent> | null>(
    () => null,
  )

  return { open, contentRef }
}
