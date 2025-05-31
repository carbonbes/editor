export default function (
  event: ClipboardEvent | DragEvent,
  mime_types?: string[],
) {
  event.preventDefault()

  let files: File[]

  if (event instanceof ClipboardEvent) {
    if (!event.clipboardData || !event.clipboardData.files.length) return

    files = Array.from(event.clipboardData.files)
  } else {
    if (!event.dataTransfer || !event.dataTransfer.files.length) return

    files = Array.from(event.dataTransfer.files)
  }

  if (!mime_types) {
    return files
  }

  return files.filter((file) => mime_types.includes(file.type))
}
