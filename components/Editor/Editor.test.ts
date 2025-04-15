import { describe, expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import Editor from '~/components/Editor/Editor.client.vue'

describe('Editor', () => {
  test('should be defined', () => {
    expect(Editor).toBeDefined()
  })

  test('renders the correct markup without content', () => {
    const wrapper = mount(Editor)

    expect(wrapper.element.innerHTML).toBe('')
  })

  test('renders the correct markup with content', async () => {
    const wrapper = mount(Editor, {
      props: {
        content: '<h1>Всем привет!</h1>',
      },
    })

    await flushPromises()

    expect(wrapper.element.innerHTML).toBe(
      '<div contenteditable="true" role="textbox" translate="no" class="tiptap ProseMirror" tabindex="0">' +
        '<h1>Всем привет!</h1>' +
      '</div>'
    )
  })
})
