import { Extension } from '@tiptap/vue-3'

export const NodeTestIdAttr = Extension.create<{ types: string[] }>({
  name: 'nodeTestIdAttr',

  addOptions() {
    return {
      types: [...EDITOR_ROOT_NODES, ...EDITOR_MARKS],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,

        attributes: {
          testid: {
            parseHTML: (element) => element.getAttribute('data-testid'),

            renderHTML(attributes) {
              if (!attributes.testid) return {}

              return { 'data-testid': attributes.testid }
            },
          },
        },
      },
    ]
  },
})
