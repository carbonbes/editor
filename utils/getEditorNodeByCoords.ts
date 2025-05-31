export default function (x: number, y: number) {
  return (
    document
      .elementsFromPoint(x, y)
      .find((el: Element) => el.parentElement?.matches?.('.ProseMirror')) ||
    null
  )
}
