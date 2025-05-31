import { injectMediaNodeViewContext } from '~/components/Editor/NodeViews/MediaNodeView/MediaNodeView.vue'

export function useEditorMediaNodeViewFileDialog() {
  const { open, onChange, reset } = useFileDialog({
    accept: [...ALLOWED_IMAGE_MIME_TYPES, ...ALLOWED_VIDEO_MIME_TYPES].join(
      ',',
    ),
  })

  const { add } = injectMediaNodeViewContext()

  onChange((fileList: FileList | null) => {
    if (!fileList) return

    const files = Array.from(fileList)

    add(files)
    reset()
  })

  return { open }
}
