import { Extension } from '@tiptap/core'

export interface NodeStylesGlobalAttrsOptions {
  types: string[]
  defaultClass: string | null
  defaultStyle: string | null
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    NodeStylesGlobalAttrs: {
      setNodeStyles: ({
        pos,
        classes,
        styles,
      }: {
        pos: number
        classes?: string
        styles?: string
      }) => ReturnType
    }
  }
}

export const NodeStylesGlobalAttrs =
  Extension.create<NodeStylesGlobalAttrsOptions>({
    name: 'nodeStyleGlobalAttrs',

    addOptions() {
      return {
        types: [...EDITOR_ROOT_NODES],
        defaultClass: null,
        defaultStyle: null,
      }
    },

    addGlobalAttributes() {
      return [
        {
          types: this.options.types,

          attributes: {
            class: {
              default: this.options.defaultClass,

              parseHTML: (element) => element.getAttribute('class'),

              renderHTML(attributes) {
                if (!attributes.class) return {}

                return { class: attributes.class }
              },
            },

            style: {
              default: this.options.defaultStyle,

              parseHTML: (element) => element.getAttribute('style'),

              renderHTML(attributes) {
                if (!attributes.style) return {}

                return { style: attributes.style }
              },
            },
          },
        },
      ]
    },

    addCommands() {
      return {
        setNodeStyles:
          ({ pos, classes, styles }) =>
          ({ state: { doc }, dispatch, tr }) => {
            if (!dispatch) return false

            const node = doc.nodeAt(pos)

            if (!node) return false

            dispatch(
              tr.setMeta('addToHistory', false).setNodeMarkup(pos, undefined, {
                ...node.attrs,
                class: classes,
                style: styles,
              }),
            )

            return true
          },
      }
    },
  })
