import { Extension } from '@tiptap/core'

export interface NodeStylesGlobalAttrsOptions {
  types: string[],
  defaultClass: string | null,
  defaultStyle: string | null,
}

export const NodeStylesGlobalAttrs = Extension.create<NodeStylesGlobalAttrsOptions>({
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

  },
})
