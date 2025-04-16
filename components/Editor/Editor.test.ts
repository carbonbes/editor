import { describe, expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import Editor from '~/components/Editor/Editor.client.vue'
import type { Content } from '@tiptap/vue-3'

describe('Editor', () => {
  test('should be defined', () => {
    expect(Editor).toBeDefined()
  })

  describe('renders', () => {
    async function mountEditor(content?: Content) {
      const wrapper = mount(Editor, { props: { content } })

      await flushPromises()

      return wrapper
    }

    test('the correct markup without content', async () => {
      const wrapper = await mountEditor()

      expect(wrapper.element.innerHTML).toMatchSnapshot()

      wrapper.unmount()
    })

    test('the correct markup with content', async () => {
      const wrapper = await mountEditor('<h1>Всем привет!</h1>')

      expect(wrapper.element.innerHTML).toMatchSnapshot()

      wrapper.unmount()
    })
  })
})
