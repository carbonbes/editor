import { describe, expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import EditorContent from '~/components/Editor/Editor.client.vue'
import type { Content } from '@tiptap/vue-3'

describe('Editor', () => {
  test('should be defined', () => {
    expect(EditorContent).toBeDefined()
  })

  describe('renders the correct markup', () => {
    async function mountEditorContent(content?: Content) {
      const wrapper = mount(EditorContent, { props: { content } })

      await flushPromises()

      return wrapper
    }

    const cases = [
      ['without content'],
      ['with content', '<h1>Всем привет!</h1>'],
    ]

    test.each(cases)('%s', async (_, content) => {
      const wrapper = await mountEditorContent(content)

      expect(wrapper.element.innerHTML).toMatchSnapshot()

      wrapper.unmount()
    })
  })
})
