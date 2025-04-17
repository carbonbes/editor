export default function () {
  const { editor } = useEditor()

  function setNodeHtmlAttrs(
    pos: number,
    { classes, styles }: { classes?: string; styles?: string }
  ) {
    editor.value?.commands.setNodeHtmlAttrs(pos, {
      classes,
      styles,
    })
  }

  return {
    setNodeHtmlAttrs,
  }
}
