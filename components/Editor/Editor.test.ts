import { describe, expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import Editor from '~/components/Editor/Editor.client.vue'
import type { Content } from '@tiptap/vue-3'

describe('Editor', () => {
  async function mountEditor(content?: Content) {
    const wrapper = mount(Editor, { props: { content } })

    await flushPromises()

    return wrapper
  }

  test('should be defined', () => {
    expect(Editor).toBeDefined()
  })

  test('renders the correct markup without content', async () => {
    const wrapper = mount(Editor)

    await flushPromises()

    expect(wrapper.element.innerHTML).toBe(
      '<div contenteditable="true" role="textbox" translate="no" class="tiptap ProseMirror" tabindex="0">' +
        '<p><br class="ProseMirror-trailingBreak"></p>' +
      '</div>'
    )

    wrapper.unmount()
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

    wrapper.unmount()
  })
})
