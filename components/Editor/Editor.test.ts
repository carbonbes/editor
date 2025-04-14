import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Editor from '~/components/Editor/Editor.vue'

describe('Editor', () => {
  test('should be defined', () => {
    expect(Editor).toBeDefined()
  })

  test('renders the correct markup without content', () => {
    const wrapper = mount(Editor)

    expect(wrapper.find('#editor').html()).toContain('<div></div>')
  })

  /* test('renders the correct markup with content', async () => {
    const wrapper = mount(Editor, {
      props: {
        content: `<h1>Всем привет!</h1>`,
      },
    })

    await nextTick()

    expect(wrapper.html()).toContain('<div><h1>Всем привет!</h1></div>')
  }) */
})
