import { Extension } from '@tiptap/vue-3'

export const addGlobalTestIdAttrPlugin = Extension.create({
  name: 'testIdAttrPlugin',

  addGlobalAttributes() {
    return [
      {
        types: ['paragraph'],

        attributes: {
          testId: {
            parseHTML: (element) => element.getAttribute('data-test-id'),

            renderHTML(attributes) {
              if (!attributes.testId) return {}

              return { 'data-test-id': attributes.testId }
            },
          },
        },
      },
    ]
  },
})
