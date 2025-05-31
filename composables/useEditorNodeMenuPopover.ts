import type { PopoverContent } from 'reka-ui'

export function useEditorNodeMenuPopover() {
  const contentRef = useState<InstanceType<typeof PopoverContent> | null>(
    () => null,
  )

  return { contentRef }
}
